import { Helmet } from 'react-helmet-async';
import { Title, CITIES } from '../../const';
import { CardOffer } from '../../types/offers';
import FavoritesLocationsItems from '../../components/favorites-locations-items/favorites-locations-items';

type FavoritesPageProps = {
  favoritesOffers: CardOffer[];
}

function FavoritesPage({favoritesOffers}: FavoritesPageProps): JSX.Element {
  const favoritesLocations = CITIES.filter((city) => favoritesOffers.some((offer) => offer.city.name === city));

  // Пыталась использовать groupBy, получила: {Paris: Array(2), Amsterdam: Array(1), Hamburg: Array(1)}, но ругается TS
  // const getGroupName = (item: CardOffer) => CITIES.find((city) => item.city.name === city);
  // const groupedFavoritesOffers = Object.groupBy(favoritesOffers, getGroupName);
  // console.log(groupedFavoritesOffers);

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
