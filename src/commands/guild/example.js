import { BaseCommand } from "smooth-discord";

const exampleGuildCommand = new BaseCommand(
  "example-guild",
  "This is a example guild command. Please delete this file before your development.",
  (interaction) => {
    interaction.reply("This is a example guild command.");
  }
);

export default exampleGuildCommand;
