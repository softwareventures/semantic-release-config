import {Options} from "semantic-release";

const options: Options = {
    branches: [
        {
            name: "0.x",
            channel: "0.x",
            range: "0.x"
        },
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