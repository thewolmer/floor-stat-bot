import { Client } from 'discord.js';

import fetchFloorPrice from '../api/fetchFloor';

async function updateNicknames(bot: Client) {
  try {
    const floorDetails = await fetchFloorPrice();
    const floorEth = floorDetails.priceAmountNative;
    const serverIds = process.env.SERVER_IDS!.split(',');

    for (const serverId of serverIds) {
      const guild = bot.guilds.cache.get(serverId);
      if (guild) {
        const me = guild.members.cache.get(bot.user!.id);
        if (me) {
          await me.setNickname(`${floorEth}Ξ`);
          console.log(`Updated nickname for server ${guild.name}: ${floorEth}`);
        }
      } else {
        console.error(`Server with ID ${serverId} not found.`);
      }
    }
  } catch (error) {
    console.error('An error occurred while updating the nicknames:', error);
  }
}
export { updateNicknames };
