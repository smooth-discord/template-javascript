import { Client, Intents } from "discord.js";
import {
  BaseButton,
  BaseCommand,
  getButtons,
  getGlobalCommands,
  getGuildCommands,
  registerGlobalCommands,
  registerGuildCommands,
} from "smooth-discord";
import dotenv from "dotenv";
dotenv.config();

let commands = {
  global: [],
  guild: [],
};
let buttons = [];

const client = new Client({
  intents: Intents.FLAGS.GUILDS | Intents.FLAGS.GUILD_MESSAGES,
});

client.once("ready", async () => {
  commands.global = await getGlobalCommands();
  commands.guild = await getGuildCommands();
  buttons = await getButtons();

  await registerGlobalCommands(client, commands.global);
  await registerGuildCommands(client, commands.guild);

  console.log("bot is ready...");
});

client.on("interactionCreate", (interaction) => {
  if (interaction.isCommand()) {
    const command =
      commands.guild.find((value) => value.name === interaction.commandName) ||
      commands.global.find((value) => value.name === interaction.commandName);
    if (command) {
      command.execute(interaction);
    } else {
      interaction.reply({
        content: "コマンドが見つかりませんでした。",
        ephemeral: true,
      });
    }
  } else if (interaction.isButton()) {
    const button = buttons.find(
      (value) => value.component.customId === interaction.customId
    );
    if (button) {
      button.execute(interaction);
    } else {
      interaction.reply({
        content: "そのボタンは期限切れです。",
        ephemeral: true,
      });
    }
  }
});

client.login(process.env.BOT_TOKEN);
