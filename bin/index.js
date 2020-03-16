require("ts-node").register({ project: `./tsconfig.json` });
// run the CLI with the current process arguments
require(`../src/cli`).default.run(process.argv);
