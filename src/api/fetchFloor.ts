import axios from 'axios';
import dotenv from 'dotenv';

import { Collection } from '../types/Opensea';

dotenv.config();
const apiEndpoint = process.env.API_ENDPOINT as string;

async function fetchFloorPrice(): Promise<Collection> {
  try {
    const response = await axios.get(apiEndpoint, {
      headers: {
        'X-API-KEY': process.env.API_KEY,
      },
    });
    return response.data.collection;
  } catch (error) {
    console.error('An error occurred while fetching the floor price:', error);
    throw error;
  }
}

export default fetchFloorPrice;
