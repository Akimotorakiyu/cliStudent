import { GluegunToolbox } from "gluegun";
export default {
  async run(toolbox: GluegunToolbox) {
    console.log("defult command");
    console.log(toolbox.parameters);
    const spin = toolbox.print.spin("defult command");
  }
};
