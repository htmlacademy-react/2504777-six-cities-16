export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
};

export type Offers = Offer[];

export type LogoParams = {
  prefixName: string;
  width: number;
  height: number;
};
