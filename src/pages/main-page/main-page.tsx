import { MapPoint } from '../../types/offers';
import LocationsList from '../../components/locations-list/locations-list';
import PlacesSorting from '../../components/places-sorting/places-sorting';
import PlacesList from '../../components/places-list/places-list';
import { SpecialClassName, CitiesLocation } from '../../const';
import Map from '../../components/map/map';
import { useState } from 'react';
import { useAppSelector} from '../../hooks';
import { sortOffersByCurrentType } from '../../utils';

function MainPage(): JSX.Element {
  const [activePointId, setActivePointId] = useState<string | null>(null);

  const activeCity = useAppSelector((state) => state.city);
  const currentSortingType = useAppSelector((state) => state.sortingType);
  const offers = useAppSelector((state) => state.offers);

  const offersByCity = offers.filter((offer) => offer.city.name === activeCity as string);

  const handleListItemHover = (listItemId: string | null) => {
    setActivePointId(listItemId);
  };

  const mapPoints: MapPoint[] = offersByCity.map(({id, location}) => ({id, ...location}));

  return (
    <main className={`page__main page__main--index ${offersByCity.length === 0 ? 'page__main--index-empty' : ''}`}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <LocationsList activeCity={activeCity}/>
        </section>
      </div>
      <div className="cities">
        {
          offersByCity.length ? (
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{`${offersByCity.length} places to stay in ${activeCity}`}</b>
                <PlacesSorting />
                <PlacesList className={SpecialClassName.Cities} places={sortOffersByCurrentType(currentSortingType, offersByCity)} onMouseHover={handleListItemHover}/>
              </section>
              <div className="cities__right-section">
                <Map className={SpecialClassName.Cities} city={CitiesLocation[activeCity]} points={mapPoints} activePointId={activePointId}/>
              </div>
            </div>
          ) : (
            <div className="cities__places-container cities__places-container--empty container">
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">{`We could not find any property available at the moment in ${activeCity}`}</p>
                </div>
              </section>
              <div className="cities__right-section"></div>
            </div>
          )
        }
      </div>
    </main>
  );
}

export default MainPage;
