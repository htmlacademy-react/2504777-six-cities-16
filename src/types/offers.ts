type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type City = {
  name: string;
  location: Location;
}

export type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

type BaseOffer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}

export type CardOffer = BaseOffer & {
  previewImage: string;
};

export type FullOffer = BaseOffer & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  images: string[];
  maxAdults: number;
};

export type OffersByCitiesType = {
  [key: string]: CardOffer[];
}
// export type Offers = CardOffer[];

// export type LogoParams = {
//   prefixName: string;
//   width: number;
//   height: number;
// };
