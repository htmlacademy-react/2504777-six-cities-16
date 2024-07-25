import { CardOffer } from '../../types/offers';
import LocationsList from '../../components/locations-list/locations-list';
import PlacesSorting from '../../components/places-sorting/places-sorting';
import PlacesList from '../../components/places-list/places-list';
import {SpecialClassName } from '../../const';
import Map from '../../components/map/map';
import { CITY } from '../../mocks/city';

type MainPageProps = {
	cardOffers: CardOffer[];
}

function MainPage({ cardOffers }: MainPageProps): JSX.Element {
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <LocationsList />
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{cardOffers.length} places to stay in Amsterdam</b>
            <PlacesSorting />
            <PlacesList className={SpecialClassName.Cities} places={cardOffers} />
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              <Map city={CITY} />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainPage;
