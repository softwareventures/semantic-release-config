import {Options} from "semantic-release";

const options: Options = {
    branches: [
        "+([0-9])?(.{+([0-9]),x}).x",
        "{main,master}",
        "next",
        "next-major",
        {
            name: "beta",
            prerelease: true
        },
        {
            name: "alpha",
            prerelease: true
        }
    ],
    plugins: [
        ["@semantic-release/commit-analyzer", {
            preset: "conventionalcommits"
        }],
        ["@semantic-release/release-notes-generator", {
            preset: "conventionalcommits"
        }],
        "@semantic-release/npm",
        "@semantic-release/github"
    ],
    releaseRules: [
        {type: "docs", release: "patch"},
        {type: "refactor", release: "patch"}
    ]
};

export = options;
