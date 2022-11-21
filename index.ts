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
            preset: "conventionalcommits",
            writerOpts: {
                types: [
                    { type: 'feat', section: 'Features' },
                    { type: 'feature', section: 'Features' },
                    { type: 'fix', section: 'Bug Fixes' },
                    { type: 'perf', section: 'Performance Improvements' },
                    { type: 'revert', section: 'Reverts' },
                    { type: 'docs', section: 'Documentation' },
                    { type: 'style', section: 'Styles', hidden: true },
                    { type: 'chore', section: 'Miscellaneous Chores', hidden: true },
                    { type: 'refactor', section: 'Code Refactoring' },
                    { type: 'test', section: 'Tests', hidden: true },
                    { type: 'build', section: 'Build System', hidden: true },
                    { type: 'ci', section: 'Continuous Integration', hidden: true }
                ]
            }
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
