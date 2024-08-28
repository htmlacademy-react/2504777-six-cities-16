import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logout } from '../../store/thunk-action/user';
import { userInfo } from '../../store/slices/user';
import FavoriteCount from '../favorite-count/favorite-count';

function LoggedNavigation(): JSX.Element {
  const dispatch = useAppDispatch();

  const user = useAppSelector(userInfo);

  const handleLogout = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    dispatch(logout());
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
