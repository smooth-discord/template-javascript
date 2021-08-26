import { BaseCommand } from "smooth-discord";

const exampleGuildCommand = new BaseCommand({
  name: "example-guild",
  description:
    "This is a example guild command. Please delete this file before your development.",
  execute: (interaction) => {
    interaction.reply("This is a example guild command.");
  },
});

export default exampleGuildCommand;
