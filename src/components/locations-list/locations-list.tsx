import { CITIES_LIST, CITIES } from '../../const';
import { useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/action';

type LocationItemProps = {
  city: CITIES;
  activeCity: CITIES;
}

function LocationItem({city, activeCity}: LocationItemProps): JSX.Element {
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
  activeCity: CITIES;
}

function LocationsList({activeCity}: LocationListProps): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {CITIES_LIST.map((city) => <LocationItem key={city} city={city} activeCity={activeCity}/>)}
    </ul>
  );
}

export default LocationsList;
