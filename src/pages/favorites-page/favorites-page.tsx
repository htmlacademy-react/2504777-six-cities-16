// import Header from '../../components/header/header';
// import PlaceCard from '../../components/place-card/place-card';
// import Logo from '../../components/logo/logo';
// import { LogoType } from '../../const';
import { Helmet } from 'react-helmet-async';
import { Title, CITIES } from '../../const';
import { CardOffer } from '../../types/offers';
import FavoritesLocationsItems from '../../components/favorites-locations-items/favorites-locations-items';

// const { ForFooter } = LogoType;
type FavoritesPageProps = {
  favoritesOffers: CardOffer[];
}

function FavoritesPage({favoritesOffers}: FavoritesPageProps): JSX.Element {
  const favoritesLocations = CITIES.filter((city) => favoritesOffers.some((offer) => offer.city.name === city));

  return (
    <>
      <Helmet>
        <title>{Title.Favorites}</title>
      </Helmet>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {favoritesLocations.map((location) => <FavoritesLocationsItems key={location} city={location} places={favoritesOffers.filter((offer) => offer.city.name === location)}/>)}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
        {/* <Logo {...ForFooter} /> */}
      </footer>
    </>
  );
}

export default FavoritesPage;
