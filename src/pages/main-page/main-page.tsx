import { Offers } from '../../types/types';
import PlaceCard from '../../components/place-card/place-card';
import LocationsList from '../../components/locations-list/locations-list';
import PlacesSorting from '../../components/places-sorting/places-sorting';
import Header from '../../components/header/header';
import HeaderLeftSide from '../../components/header/header-left-side';
import HeaderNavigation from '../../components/header/header-navigation';

type MainPageProps = {
  foundPlacesCount: number;
  offers: Offers;
}

function MainPage({foundPlacesCount, offers}: MainPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header>
        <HeaderLeftSide/>
        <HeaderNavigation/>
      </Header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsList/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{foundPlacesCount} places to stay in Amsterdam</b>
              <PlacesSorting/>
              <div className="cities__places-list places__list tabs__content">
                {offers.map((offer) => <PlaceCard key={offer.id} {...offer}/>)}
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
