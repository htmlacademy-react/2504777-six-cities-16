import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { cardOffers } from './mocks/offers/card-offers';
import { fullOffers } from './mocks/offers/full-offers';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      cardOffers={cardOffers}
      fullOffers={fullOffers}
    />
  </React.StrictMode>,
);
