export interface Bage {
  id: number;
  thumbnail_badge_id: number;
  position: number;
  image: {
    url: string;
    width: any;
    height: any;
  };
}
export interface CategoryInterface {
  count: number;
  has_featured_html: boolean;
  hash: string;
  id: number;
  image_url: string;
  item_desc: string;
  original_image_url: string;
  resized_image_url: string;
  title: string;
}
export type CategoriesInterface = CategoryInterface[];
export interface ItemInterface {
  id: number;
  is_scrap: boolean;
  is_wish: boolean;
  type: string;
  badges: Bage[];
  benefit_badges: any[];
  brand: {
    id: number;
    name: string;
  };
  brand_id: number;
  brand_name: string;
  cost: number;
  delivery_type: number | any;
  free_delivery: boolean;
  image_url: string;
  is_bespoke: boolean;
  is_buyable: boolean;
  is_cheapest_price: boolean;
  is_consultable: boolean;
  is_delivery_date_specified: boolean;
  is_discontinued: boolean;
  is_discounted: boolean;
  is_free_delivery: boolean;
  is_hidden: boolean;
  is_overseas_purchase: boolean;
  is_remodel: boolean;
  is_retail_delivery: boolean;
  is_selling: boolean;
  is_sold_out: boolean;
  is_special_price: boolean;
  is_third_party_logistic: boolean;
  lowest_guarantee: boolean;
  name: string;
  original_image_url: string;
  original_price: number;
  raw_image_url: string;
  resized_image_url: string;
  review_avg: number;
  review_count: number;
  scrap_count: number;
  selling: boolean;
  selling_cost: number;
  selling_price: number;
  sold_out: boolean;
  status: number;
  used_card_count: number;
  user_id: number;
  view_count: number;
  week_rank: number;
  wish_count: number;
}
