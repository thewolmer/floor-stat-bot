import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';

import { updateNicknames } from './utils';

dotenv.config();

const bot = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user?.tag}`);
  updateNicknames(bot);
  const updateInterval = 60000;
  setInterval(() => updateNicknames(bot), updateInterval);
});

bot.login(process.env.TOKEN);
