import * as path from "path";
import * as inject from "connect-inject";
import * as morgan from "morgan";
import * as express from "express";
import * as unmarkdown from "remove-markdown";
import * as prettyBytes from "pretty-bytes";
import chalk from "chalk";
import { token } from "morgan";
import { renderToString } from "react-dom/server";
import * as types from "./types";
import * as error from "./error";

export const reload = inject({
  snippet: `
    <script src="/_socket/socket.io.min.js"></script>
    <script>var socket = io(); socket.on("reload", function(msg) { location.reload() });</script>
    `
});

export const nocache = (req, res, next) => {
  res.setHeader("Surrogate-Control", "no-store");
  res.setHeader(
    "Cache-Control",
    "no-store, no-cache, must-revalidate, proxy-revalidate"
  );
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Expires", "0");

  next();
};

export const addslash = (req, res, next) => {
  const extension = path.extname(req.path);

  if (!extension && req.path.substr(-1) !== "/") {
    const query = req.url.slice(req.path.length);
    res.redirect(301, req.path + "/" + query);
  } else {
    next();
  }
};

export const logging = morgan((tokens, req, res) => {
  // Filter out all paths starting with /_ like socket.io
  if (tokens.url(req, res).startsWith("/_")) {
    return null;
  }

  let status = tokens.status(req, res);

  // Filter out all entries that have no status for some reason
  // Todo: maybe investigate this further
  if (!status) {
    return null;
  }

  if (status.startsWith("4") || status.startsWith("5")) {
    status = chalk.red(status);
  }

  // const remoteAddress = req.socket.address().address;

  return chalk.gray(
    [
      tokens.method(req, res),
      status,
      chalk.rgb(170, 170, 170)(tokens.url(req, res)),
      prettyBytes(parseInt(tokens.res(req, res, "content-length") || "0")),
      `(${Math.round(parseFloat(tokens["response-time"](req, res)) || 0)}ms)`
    ].join(" ")
  );
});

export const errors = (project: types.Project) => {
  return (err: Error, req, res, next) => {
    const shortStack =
      err.stack.split("\n").slice(1, 4).join("\n") + "\n    [...]";

    console.error(chalk.white("Error:"), chalk.red(unmarkdown(err.message)));
    console.error(chalk.gray(shortStack));

    res.status("500").send(renderToString(error.render(err, project)));
  };
};
