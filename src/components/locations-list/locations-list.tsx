import { CITIES } from '../../const';

type LocationItemProps = {
  city: string;
}

function LocationItem({city}: LocationItemProps): JSX.Element {
  return (
    <li className="locations__item">
      <a className="locations__item-link tabs__item" href="#">
        <span>{city}</span>
      </a>
    </li>
  );
}

function LocationsList(): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => <LocationItem key={city} city={city}/>)}
    </ul>
  );
}

export default LocationsList;
