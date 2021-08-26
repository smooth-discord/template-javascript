import { MessageButton } from "discord.js";
import { BaseButton } from "smooth-discord";

const exampleGlobalCommand = new BaseButton(
  new MessageButton()
    .setCustomId("exampleGlobalCommand")
    .setStyle("PRIMARY")
    .setLabel("Example"),
  (interaction) => {
    interaction.reply("This is a example button.");
  }
);

export default exampleGlobalCommand;
