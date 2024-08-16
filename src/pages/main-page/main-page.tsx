import { MapPoint } from '../../types/offers';
import LocationsList from '../../components/locations-list/locations-list';
import LoadingPage from '../loading-page/loading-page';
import PlacesSection from '../../components/places-section/places-section';
import NoPlacesSection from '../../components/places-section/no-places-section';
import { SpecialClassName, CitiesLocation } from '../../const';
import Map from '../../components/map/map';
// import { useEffect } from 'react';
import { useAppSelector, useOffersByCity} from '../../hooks';
// import { fetchOffers } from '../../store/thunk-action/offers';
import { getRequestLoadedStatus, getActiveCity } from '../../store/slices/offers';
import { getActiveOfferId } from '../../store/slices/offers';


function MainPage(): JSX.Element {

  const isOffersLoaded = useAppSelector(getRequestLoadedStatus);
  const activeCity = useAppSelector(getActiveCity);
  const activePointId = useAppSelector(getActiveOfferId);
  const { offers, isEmpty } = useOffersByCity(activeCity);

  if (!isOffersLoaded) {
    return (
      <LoadingPage />
    );
  }

  const mapPoints: MapPoint[] = offers.map(({id, location}) => ({id, ...location}));

  return (
    <main className={`page__main page__main--index ${isEmpty ? 'page__main--index-empty' : ''}`}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <LocationsList activeCity={activeCity}/>
        </section>
      </div>
      <div className="cities">
        <div className={`cities__places-container ${isEmpty ? 'cities__places-container--empty' : ''} container`}>
          {!isEmpty ? <PlacesSection activeCity={activeCity} offers={offers}/> : <NoPlacesSection activeCity={activeCity} />}
          <div className="cities__right-section">
            {!isEmpty ? <Map className={SpecialClassName.Cities} city={CitiesLocation[activeCity]} points={mapPoints} activePointId={activePointId}/> : ''}
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainPage;
