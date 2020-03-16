import { build } from "gluegun";
async function run() {
  const cli = build("cliStudent")
    .src(__dirname)
    .help()
    .version()
    .create();

  const toolbox = await cli.run();
  return toolbox;
}

export default {
  run
};
