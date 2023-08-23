# NFT Floor Price Stat Bot

The NFT Floor Price Stat Bot is a Discord bot that provides real-time floor price statistics for a specific NFT collection. It updates the nickname of a specified user in your Discord server with the current floor price of the chosen NFT collection from OpenSea.

## Features

- Updates the nickname of a specified user with the floor price of the chosen NFT collection.
- Real-time floor price data fetched from OpenSea using Axios.
- Built using Discord.js for seamless integration with Discord servers.
- Written in TypeScript for improved code maintainability and type safety.

## Tech Stack

- Node.js
- TypeScript
- Discord.js
- Axios

## Run Locally

Clone the project

```bash
  git clone https://github.com/thewolmer/nft-floor-price-stat-bot.git
```

Go to the project directory

```bash
  cd nft-floor-price-stat-bot
```

Install dependencies

```bash
  npm install
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

1. **Discord Bot Token** Create a new application with all gateway intents on [Discord developer portal](https://discord.com/developers/applications/) and grab the bot token.

2. **OpenSea API Token:** You need to acquire an OpenSea API token. Follow the instructions on the [OpenSea API documentation](https://docs.opensea.io/reference/api-keys) to obtain your token.

3. **NFT Collection Name:** You should know the exact name of the NFT collection for which you want to fetch the floor price.

Create a `.env` file in the project root and add the following variables:

```env
TOKEN=your discord bot token
SERVER_IDS=servers ids where you want this bot to work
API_KEY=opensea api key
CONTRACT=contract address of nft collection
API_ENDPOINT= opensea api url
```

Start the server

```bash
  npm run start
```

The bot will now update the specified user's nickname with the current floor price of the chosen NFT collection.

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, feel free to open an issue or create a pull request.

## Support

Happy NFT tracking with the NFT Floor Price Stat Bot! If you find this bot useful, consider giving it a ⭐ on GitHub. For questions or support, please contact [contact@wolmer.me](mailto:contact@wolmer.me).

## Used By

This project is used by the following:

- [Moonie Moo Genesis NFT](https://moonie.moo.io?utm_source=github.com/thewolmer/nft-stat-bot)
- Add your Name here by creating a pull request.

## Authors

- [@thewolmer](https://www.github.com/thewolmer)
