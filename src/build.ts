import * as path from "path";
import * as fs from "fs";
import * as prettyBytes from "pretty-bytes";
import * as unmarkdown from "remove-markdown";
import chalk from "chalk";

import * as utils from "./utils";
import * as resolve from "./resolve";
import * as render from "./render";
import * as types from "./types";

export const pages = async (project: types.Project, root: string) => {
  const pagesPath = path.join(project.path, project.config.pages);
  const exts = project.config.extensions.join(",");
  const glob = `${pagesPath}/**/*.{${exts}}`;
  const pages = utils.glob(glob);

  for (let pagePath of pages) {
    const relativePagePath = path.relative(pagesPath, pagePath);
    try {
      await page(project, relativePagePath, root);
    } catch (error) {
      console.error(
        `${chalk.red("\nerror")} /${relativePagePath}\n\n${unmarkdown(
          error.message
        )}\n\n`
      );
      console.error(chalk.grey(error.stack));
      process.exit();
    }
  }
};

const page = async (project: types.Project, page: string, root: string) => {
  const time = Date.now();

  const pageOutPath = resolve.pathForPage(project.config.pages, page);
  const pageOutFullPath = path.join(root, pageOutPath);
  const content = await render.page(project, page);

  utils.mkdir(path.dirname(pageOutFullPath));

  fs.writeFileSync(path.join(root, pageOutPath), content);

  console.log(
    chalk.gray(`/${page} ${chalk.white("→")} ${pageOutPath}`),
    chalk.gray(utils.fileSize(pageOutFullPath)),
    chalk.gray(`(${Math.round(Date.now() - time)}ms)`)
  );

  return Promise.resolve();
};

export const assets = async (project: types.Project, root) => {
  const time = Date.now();
  const source = path.join(project.path, project.config.static);
  const dest = path.join(root, project.config.static);
  await utils.cp(source, dest);
  const stats = await utils.stats(dest);
  console.log(
    chalk.gray(`${stats.files} files, ${prettyBytes(stats.bytes)}`),
    chalk.gray(`(${Math.round(Date.now() - time)}ms)`)
  );
};

export const script = async (project: types.Project, root) => {
  const time = Date.now();
  const script = await render.script(project);
  const scriptPath = path.join(root, project.config.componentScript);
  fs.writeFileSync(scriptPath, script);
  console.log(
    chalk.gray(`${project.config.componentScript}`),
    chalk.gray(utils.fileSize(scriptPath)),
    chalk.gray(`(${Math.round(Date.now() - time)}ms)`)
  );
};
