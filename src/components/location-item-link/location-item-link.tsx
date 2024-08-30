import { Link } from 'react-router-dom';
import { CITIES_LIST, AppRoute } from '../../const';
import { getRandomInt } from '../../utils';
import { useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/slices/offers';

function LocationItemLink(): JSX.Element {
  const dispatch = useAppDispatch();

  const city = CITIES_LIST[getRandomInt(0, CITIES_LIST.length - 1)];

  return (
    <div className="locations__item">
      <Link
        className="locations__item-link"
        to={AppRoute.Root}
        onClick={() => dispatch(changeCity(city))}
      >
        <span>{city}</span>
      </Link>
    </div>
  );
}

export default LocationItemLink;
