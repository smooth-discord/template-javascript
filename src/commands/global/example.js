import { BaseCommand } from "smooth-discord";

const exampleGlobalCommand = new BaseCommand({
  name: "example-global",
  description:
    "This is a example global command. Please delete this file before your development.",
  execute: (interaction) => {
    interaction.reply("This is a example global command.");
  },
});

export default exampleGlobalCommand;
