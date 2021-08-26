import { BaseCommand } from "smooth-discord";

const exampleGlobalCommand = new BaseCommand(
  "example-global",
  "This is a example global command. Please delete this file before your development.",
  (interaction) => {
    interaction.reply("This is a example global command.");
  }
);

export default exampleGlobalCommand;
