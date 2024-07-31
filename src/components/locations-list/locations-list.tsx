import { CITIES_LIST } from '../../const';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/action';

type LocationItemProps = {
  city: string;
}

function LocationItem({city}: LocationItemProps): JSX.Element {
  const activeCity = useAppSelector((state) => state.city);
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

function LocationsList(): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {CITIES_LIST.map((city) => <LocationItem key={city} city={city}/>)}
    </ul>
  );
}

export default LocationsList;
