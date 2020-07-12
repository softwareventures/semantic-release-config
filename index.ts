import {Options} from "semantic-release";

const options: Options = {
    branches: [
        "+([0-9])?(.{+([0-9]),x}).x",
        "{main,master}",
        "next",
        "next-major",
        {
            name: "beta",
            prerelease: true as any // TODO: Fix when types are updated
        },
        {
            name: "alpha",
            prerelease: true as any // TODO: Fix when types are updated
        }
    ],
    releaseRules: [
        {type: "docs", release: "patch"},
        {type: "refactor", release: "patch"}
    ]
};

export = options;