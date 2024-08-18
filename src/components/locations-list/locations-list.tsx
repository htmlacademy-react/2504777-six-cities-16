import { CITIES_LIST, SixCities } from '../../const';
import { useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/slices/offers';

type LocationItemProps = {
	city: SixCities;
	activeCity: SixCities;
}

function LocationItem({ city, activeCity }: LocationItemProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <li className="locations__item">
      <a
        className={`locations__item-link tabs__item ${activeCity === city ? 'tabs__item--active' : ''}`}
        href="#"
        onClick={() => dispatch(changeCity(city))}
      >
        <span>{city}</span>
      </a>
    </li>
  );
}

type LocationListProps = {
	activeCity: SixCities;
}

function LocationsList({ activeCity }: LocationListProps): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {CITIES_LIST.map((city) => <LocationItem key={city} city={city} activeCity={activeCity} />)}
    </ul>
  );
}

export default LocationsList;
