import { Review } from '../types/reviews';

const reviewsByOfferId: Record<string, Review[]> = {
  '2b1d1f4b-990c-4e1a-abe5-d0405da10fff': [
    {
      id: '3541ddb6-1fde-4a39-930d-1e25087c8316',
      comment: 'What an amazing view! The house is stunning and in an amazing location. The large glass wall had an amazing view of the river!',
      date: '2024-07-02T21:00:00.477Z',
      rating: 4,
      user: {
        name: 'Sophie',
        avatarUrl: 'https://16.design.htmlacademy.pro/static/avatar/8.jpg',
        isPro: true
      }
    },
    {
      id: 'e41a87a4-e0ef-49ef-b935-ea682e0de417',
      comment: 'The deluxe room was a quite comfortable one with all the adequate facilities. The only thing that made me feel uncomfortable was the rude behavior of an impolite staff at the reception desk.',
      date: '2024-07-02T21:00:00.477Z',
      rating: 3,
      user: {
        name: 'Isaac',
        avatarUrl: 'https://16.design.htmlacademy.pro/static/avatar/4.jpg',
        isPro: true
      }
    },
  ],
  '36b7a660-a8a4-4a4d-b3e8-732ca64c8cd4': [
    {
      id: 'a87b68e2-419e-4f77-b38b-c2fdfeb58b4c',
      comment: 'aaadslh fadhkdhjlk halkdhgjlka hglkj hafjlkgjl kfhgl jkhlfjkghl',
      date: '2024-07-23T06:38:50.266Z',
      rating: 3,
      user: {
        name: 'aaa',
        avatarUrl: 'https://16.design.htmlacademy.pro/static/avatar/7.jpg',
        isPro: false
      }
    },
    {
      id: 'd2c74308-6fd4-4989-9f2b-989abd0402bf',
      comment: 'Home is amazing. It\'s like staying in a museum. The rooms, furnishings and artworks are incredible. The views of My Vesuvius',
      date: '2024-06-30T10:05:47.083Z',
      rating: 1,
      user: {
        name: 'Isaac',
        avatarUrl: 'https://16.design.htmlacademy.pro/static/avatar/10.jpg',
        isPro: true
      }
    },
    {
      id: '66609e60-9f42-4b7f-bd9c-4baa71d0f000',
      comment: 'Home is amazing. It\'s like staying in a museum. The rooms, furnishings and artworks are incredible. The views of My Vesuvius',
      date: '2024-07-01T10:05:47.083Z',
      rating: 2,
      user: {
        name: 'Emely',
        avatarUrl: 'https://16.design.htmlacademy.pro/static/avatar/3.jpg',
        isPro: false
      }
    },
  ],
  'cb2c441d-58c2-41b5-8168-9b564214dfab': [
    {
      id: '55a40d0a-8ded-4f7b-9486-afc2df3a054c',
      comment: 'I stayed here for one night and it was an unpleasant experience.',
      date: '2024-06-28T10:05:47.083Z',
      rating: 5,
      user: {
        name: 'Isaac',
        avatarUrl: 'https://16.design.htmlacademy.pro/static/avatar/4.jpg',
        isPro: false
      }
    },
    {
      id: 'fff9b2a3-3bbd-4488-a00b-37938232256e',
      comment: 'We loved it so much, the house, the veiw, the location just great.. Highly reccomend :)',
      date: '2024-06-25T10:05:47.083Z',
      rating: 2,
      user: {
        name: 'Kendall',
        avatarUrl: 'https://16.design.htmlacademy.pro/static/avatar/2.jpg',
        isPro: true
      }
    },
    {
      id: '64f9124a-b876-4151-8288-958172071e0e',
      comment: 'The room was spacious and clean. The pool looked nothing like the photos and desparately needs a clean. The sauna and spa were closed for lunar new year holiday.',
      date: '2024-06-30T10:05:47.084Z',
      rating: 4,
      user: {
        name: 'Isaac',
        avatarUrl: 'https://16.design.htmlacademy.pro/static/avatar/3.jpg',
        isPro: true
      }
    },
    {
      id: 'dbe974b2-231f-4305-8dbc-5ad26265df46',
      comment: 'Bathed in the nature. Completely unplugged. Unforgettable.',
      date: '2024-06-30T10:05:47.084Z',
      rating: 3,
      user: {
        name: 'Zak',
        avatarUrl: 'https://16.design.htmlacademy.pro/static/avatar/10.jpg',
        isPro: false
      }
    },
  ],
  '57c9f89d-30b3-4c53-a210-2c7f5dde384b': [
    {
      id: 'f2feb1e6-3468-4c4a-b683-2a07204f9bc5',
      comment: 'The deluxe room was a quite comfortable one with all the adequate facilities. The only thing that made me feel uncomfortable was the rude behavior of an impolite staff at the reception desk.',
      date: '2024-06-30T10:05:47.084Z',
      rating: 1,
      user: {
        name: 'Kendall',
        avatarUrl: 'https://16.design.htmlacademy.pro/static/avatar/2.jpg',
        isPro: true
      }
    },
    {
      id: '573b7826-0437-45a0-bd1c-4d56c877094d',
      comment: 'I stayed here for one night and it was an unpleasant experience.',
      date: '2024-06-28T10:05:47.084Z',
      rating: 2,
      user: {
        name: 'Corey',
        avatarUrl: 'https://16.design.htmlacademy.pro/static/avatar/5.jpg',
        isPro: false
      }
    }
  ],
};

export const getReviewsByOfferId = (searchId: string | undefined): Review[] => {
  if (searchId) {
    for (const [offerId, value] of Object.entries(reviewsByOfferId)) {
      if (offerId === searchId) {
        return value;
      }
    }
  }
  return [];
};
