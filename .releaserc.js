module.exports = {
  repositoryUrl: "https://github.com/DevGirl-Team/condereve.git",
  branches: ["main", "master", "next", "circle-ci"],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        // https://github.com/semantic-release/commit-analyzer#releaserules
        releaseRules: [
          { scope: "no-release", release: false },
          { breaking: true, release: "major" },
          { type: "feat", release: "minor" },
          { type: "refactor", scope: "core-*", release: "minor" },
          { type: "*", release: "patch" },
        ],
      },
    ],
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/github",
  ],
};
