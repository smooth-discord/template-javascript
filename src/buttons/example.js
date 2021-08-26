import { MessageButton } from "discord.js";
import { BaseButton } from "smooth-discord";

const exampleGlobalCommand = new BaseButton({
  component: new MessageButton()
    .setCustomId("exampleGlobalCommand")
    .setStyle("PRIMARY")
    .setLabel("Example"),
  execute: (interaction) => {
    interaction.reply("This is a example button.");
  },
});

export default exampleGlobalCommand;
