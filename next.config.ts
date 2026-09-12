import type { NextConfig } from "next";

// GitHub Pages serves this project at
// https://<user>.github.io/<repo-name>/ , so every asset and route
// needs the repo name as a base path — but only for the exported
// production build, never for local `next dev`.
const repoName = "7.77-chlef-session11h15-ai.cybersecurity.entrepreneurshi";
const isGithubPagesBuild = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGithubPagesBuild ? `/${repoName}` : "",
  assetPrefix: isGithubPagesBuild ? `/${repoName}/` : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
