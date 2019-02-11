import * as React from "react";
import { renderToString } from "react-dom/server";
import * as styled from "styled-components";
import * as types from "./types";
import * as _relative from "relative";

const getContext = (): types.Context | null => {
  if (!process.env["context"]) return null;
  if (Object.keys(process.env["context"]).length === 0) return null;
  return (process.env["context"] as any) as types.Context;
};

// Component to inline styled component css
export const StyledSheet: React.SFC<{ app: React.ReactNode }> = props => {
  const sheet = new styled.ServerStyleSheet();

  renderToString(sheet.collectStyles(<>{props.app}</>));

  return (sheet.getStyleElement() as any) as React.ReactElement<any>;
};

export const Development = () => {
  const context = useContext();
  return <script src={relative(context.project.config.componentScript)} />;
};

export const useContext = (): types.Context => {
  const context = getContext();
  if (!context) {
    throw Error(
      "process.env.context is missing. You might be using useContext in a Dynamic component? "
    );
  }
  // This gets inserted by webpack on build
  return (process.env["context"] as any) as types.Context;
};

export const usePath = (): string => {
  const context = getContext();
  if (context) {
    return context.url;
  }
  return window.location.pathname;
};

export const useProject = (): types.Project => {
  return useContext().project;
};

export const relative = (from: string, url?: string) => {
  return _relative(url || usePath(), from);
};
