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
    releaseRules: [
        {type: "docs", release: "patch"},
        {type: "refactor", release: "patch"}
    ]
};

export = options;