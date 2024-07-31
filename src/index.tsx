import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './components/app/app';
import { cardOffers } from './mocks/offers/card-offers';
import { fullOffers } from './mocks/offers/full-offers';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        cardOffers={cardOffers}
        fullOffers={fullOffers}
      />
    </Provider>
  </React.StrictMode>,
);
