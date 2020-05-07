import {Options} from "semantic-release";

const options: Options = {
    releaseRules: [
        {type: "docs", release: "patch"},
        {type: "refactor", release: "patch"}
    ]
};

export = options;