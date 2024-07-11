import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const FOUND_PLACES_COUNT = 45;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      foundPlacesCount = {FOUND_PLACES_COUNT}
    />
  </React.StrictMode>,
);
