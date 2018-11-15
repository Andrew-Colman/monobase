export type ProjectConfiguration = {
  pages: string;
  components: string;
  static: string;
  componentScript: string;
};

export type Project = {
  path: string;
  config: ProjectConfiguration;
  build: "debug" | "production";
};
