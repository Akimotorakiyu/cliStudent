import { GluegunToolbox } from "gluegun";
export default {
  async run(toolbox: GluegunToolbox) {
    toolbox.print.warning("create command");
    toolbox.print.info("create command");
    toolbox.print.debug("create command");
    toolbox.print.error("create command");
    toolbox.print.success("create command");

    const spin = toolbox.print.spin("create command");

    spin.stopAndPersist({
      text: "over"
    });
  }
};
