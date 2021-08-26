import { MessageSelectMenu } from "discord.js";
import { BaseSelectMenu } from "smooth-discord";

const exampleSelectMenu = new BaseSelectMenu(
  new MessageSelectMenu().setCustomId("exampleSelectMenu"),
  (interaction) => {
    interaction.reply("This is a example select menu.");
  }
);
