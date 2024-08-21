import { AppRoute } from '../../const';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logout } from '../../store/thunk-action/user';
import { getUserInfo } from '../../store/slices/user';
import FavoriteCount from '../favorite-count';
// import { updateOffers } from '../../store/slices/offers';
import { resetFavorites, resetStatus } from '../../store/slices/favorites';
// import { useFavorites } from '../../hooks/use-favorites';
import { fetchOffers } from '../../store/thunk-action/offers';
import { fetchFullOffer } from '../../store/thunk-action/full-offer';

function LoggedNavigation(): JSX.Element {
  const dispatch = useAppDispatch();

  const { id: offerId } = useParams();

  const user = useAppSelector(getUserInfo);
  // const { favorites } = useFavorites();

  const handleLogout = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    dispatch(logout())
      .unwrap()
      .then(() => {
        // dispatch(updateOffers(favorites));
        dispatch(resetFavorites());
        dispatch(resetStatus());
        dispatch(fetchOffers());
        if (offerId) {
          dispatch(fetchFullOffer(offerId));
        }
      });

  };

  return (
    <ul className="header__nav-list">
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
          <div
            className="header__avatar-wrapper user__avatar-wrapper"
            style={{
              backgroundImage: `url(${user?.avatarUrl})`,
              borderRadius: '50%',
            }}
          >
          </div>
          <span className="header__user-name user__name">{user?.email}</span>
          <FavoriteCount />
        </Link>
      </li>
      <li className="header__nav-item">
        <a className="header__nav-link" href="#" onClick={handleLogout}>
          <span className="header__signout">Sign out</span>
        </a>
      </li>
    </ul>
  );
}
export default LoggedNavigation;
