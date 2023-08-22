import axios from 'axios';

import FloorData from '../types/Floor';

async function fetchFloorPrice(): Promise<FloorData> {
  try {
    const apiEndpoint = process.env.API_ENDPOINT!;
    const response = await axios.get(apiEndpoint, {});
    return response.data;
  } catch (error) {
    console.error('An error occurred while fetching the floor price:', error);
    throw error;
  }
}
export default fetchFloorPrice;
