import { Link } from 'react-router-dom';
import { SixCities, AppRoute } from '../../const';
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
      <Link
        className={`locations__item-link tabs__item ${activeCity === city ? 'tabs__item--active' : ''}`}
        to={AppRoute.Root}
        onClick={() => dispatch(changeCity(city))}
      >
        <span>{city}</span>
      </Link>
    </li>
  );
}

export default LocationItem;
