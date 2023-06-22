require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const axios = require('axios');

const bot = new Client({ 
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ]
});

const contractAddress = process.env.CONTRACT;
const updateInterval = 60000; 
const apiEndpoint = process.env.API_ENDPOINT; 
const serverIds = process.env.SERVER_IDS.split(','); 

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}`);
  updateNicknames();
  setInterval(updateNicknames, updateInterval);
});

async function updateNicknames() {
  try {
    const floorPrice = await fetchFloorPrice();
    for (const serverId of serverIds) {
      const guild = bot.guilds.cache.get(serverId);
      if (guild) {
        const me = guild.members.cache.get(bot.user.id);
        if (me) {
          await me.setNickname(`${floorPrice}Ξ`);
          console.log(`Updated nickname for server ${guild.name}: ${floorPrice}`);
        }
      } else {
        console.error(`Server with ID ${serverId} not found.`);
      }
    }
  } catch (error) {
    console.error('An error occurred while updating the nicknames:', error);
  }
}

async function fetchFloorPrice() {
  try {
    const response = await axios.get(apiEndpoint, {
      params: {
        contract: contractAddress,
      },
      headers: {
        'X-API-KEY': process.env.API_KEY, 
      },
    });
    return response.data.collection.stats.floor_price;
  } catch (error) {
    console.error('An error occurred while fetching the floor price:', error);
    throw error;
  }
}

bot.login(process.env.TOKEN);
