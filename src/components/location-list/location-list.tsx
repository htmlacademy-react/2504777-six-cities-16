import { CITIES_LIST, SixCities } from '../../const';
import LocationItem from './location-item';

type LocationListProps = {
	activeCity: SixCities;
}

function LocationList({ activeCity }: LocationListProps): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {CITIES_LIST.map((city) => <LocationItem key={city} city={city} activeCity={activeCity} />)}
    </ul>
  );
}

export default LocationList;
