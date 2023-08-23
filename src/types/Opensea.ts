export interface OpenseaCollection {
  collection: Collection;
}

export interface Collection {
  editors: string[];
  payment_tokens: PaymentToken[];
  is_collection_offers_enabled: boolean;
  is_trait_offers_enabled: boolean;
  primary_asset_contracts: PrimaryAssetContract[];
  traits: [];
  stats: Stats;
  banner_image_url: string;
  chat_url: null;
  created_date: Date;
  default_to_fiat: boolean;
  description: string;
  dev_buyer_fee_basis_points: string;
  dev_seller_fee_basis_points: string;
  discord_url: string;
  display_data: DisplayData;
  external_url: string;
  featured: boolean;
  featured_image_url: string;
  hidden: boolean;
  safelist_request_status: string;
  image_url: string;
  is_subject_to_whitelist: boolean;
  large_image_url: string;
  medium_username: null;
  name: string;
  only_proxied_transfers: boolean;
  opensea_buyer_fee_basis_points: string;
  opensea_seller_fee_basis_points: number;
  payout_address: string;
  require_email: boolean;
  short_description: null;
  slug: string;
  telegram_url: null;
  twitter_username: string;
  instagram_username: null;
  wiki_url: null;
  is_nsfw: boolean;
  fees: Fees;
  is_rarity_enabled: boolean;
  is_creator_fees_enforced: boolean;
}

export interface Stats {
  one_minute_volume: number;
  one_minute_change: number;
  one_minute_sales: number;
  one_minute_sales_change: number;
  one_minute_average_price: number;
  one_minute_difference: number;
  five_minute_volume: number;
  five_minute_change: number;
  five_minute_sales: number;
  five_minute_sales_change: number;
  five_minute_average_price: number;
  five_minute_difference: number;
  fifteen_minute_volume: number;
  fifteen_minute_change: number;
  fifteen_minute_sales: number;
  fifteen_minute_sales_change: number;
  fifteen_minute_average_price: number;
  fifteen_minute_difference: number;
  thirty_minute_volume: number;
  thirty_minute_change: number;
  thirty_minute_sales: number;
  thirty_minute_sales_change: number;
  thirty_minute_average_price: number;
  thirty_minute_difference: number;
  one_hour_volume: number;
  one_hour_change: number;
  one_hour_sales: number;
  one_hour_sales_change: number;
  one_hour_average_price: number;
  one_hour_difference: number;
  six_hour_volume: number;
  six_hour_change: number;
  six_hour_sales: number;
  six_hour_sales_change: number;
  six_hour_average_price: number;
  six_hour_difference: number;
  one_day_volume: number;
  one_day_change: number;
  one_day_sales: number;
  one_day_sales_change: number;
  one_day_average_price: number;
  one_day_difference: number;
  seven_day_volume: number;
  seven_day_change: number;
  seven_day_sales: number;
  seven_day_average_price: number;
  seven_day_difference: number;
  thirty_day_volume: number;
  thirty_day_change: number;
  thirty_day_sales: number;
  thirty_day_average_price: number;
  thirty_day_difference: number;
  total_volume: number;
  total_sales: number;
  total_supply: number;
  count: number;
  num_owners: number;
  average_price: number;
  num_reports: number;
  market_cap: number;
  floor_price: number;
}

export interface DisplayData {
  card_display_style: string;
  images: null;
}

export interface Fees {
  seller_fees: SellerFees;
  opensea_fees: OpenseaFees;
}

export interface OpenseaFees {
  '0x0000a26b00c1f0df003000390027140000faa719': number;
}

export interface SellerFees {
  '0x7906af0220e77ccd495dd60b683e7b863eff4a0e': number;
}

export interface PaymentToken {
  id: number;
  symbol: string;
  address: string;
  image_url: string;
  name: string;
  decimals: number;
  eth_price: number;
  usd_price: number;
}

export interface PrimaryAssetContract {
  address: string;
  asset_contract_type: string;
  chain_identifier: string;
  created_date: Date;
  name: string;
  nft_version: null;
  opensea_version: null;
  owner: number;
  schema_name: string;
  symbol: string;
  total_supply: string;
  description: string;
  external_link: string;
  image_url: string;
  default_to_fiat: boolean;
  dev_buyer_fee_basis_points: number;
  dev_seller_fee_basis_points: number;
  only_proxied_transfers: boolean;
  opensea_buyer_fee_basis_points: number;
  opensea_seller_fee_basis_points: number;
  buyer_fee_basis_points: number;
  seller_fee_basis_points: number;
  payout_address: string;
}
