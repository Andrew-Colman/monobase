import * as _ from "lodash";
import { renderToString } from "react-dom/server";
import { Compiler, Config } from "./compiler";
import * as types from "./types";
import * as dynamic from "./dynamic";
import * as context from "./context";

// We memoize the script compiler based on the config for fast reloads
// as long as the dynamic components have not changed on disk.
const getCachedCompiler = _.memoize(config => {
  return new Compiler(config);
}, JSON.stringify);

export const page = async (project: types.Project, pagePath: string) => {
  const config = Config(project.path, [pagePath], {
    context: context.create(project, pagePath),
    cache: true
  });

  const compiler = getCachedCompiler(config);

  // A syntax error could occur here
  await compiler.compile();

  // An eval runtime could happen here
  const pageModule = compiler.module.default(project);

  return new Promise((resolve, reject) => {
    resolve(renderToString(pageModule));
  });
};

export const script = async (project: types.Project) => {
  const entries = dynamic.entries(project);
  const config = Config(project.path, entries, {
    production: project.build === "production",
    cache: true
  });

  const compiler = getCachedCompiler(config);
  return compiler.compile();
};
