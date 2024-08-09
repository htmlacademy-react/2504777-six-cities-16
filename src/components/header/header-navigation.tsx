import { useAppSelector, useAppDispatch } from '../../hooks';
import { AuthorizationStatus, AppRoute } from '../../const';
import { Link } from 'react-router-dom';
import { logoutAction } from '../../store/api-actions';

type NavigationUserItemProps = {
  authorizationStatus: AuthorizationStatus;
  favoriteOffersCount: number;
}

function NavigationUserItem({authorizationStatus, favoriteOffersCount}: NavigationUserItemProps): JSX.Element {
  return (
    <li className="header__nav-item user">
      {
        authorizationStatus === AuthorizationStatus.Auth ? (
          <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
            <span className="header__favorite-count">{favoriteOffersCount}</span>
          </Link>
        ) : (
          <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__login">Sign in</span>
          </Link>
        )
      }
    </li>
  );
}

type HeaderNavigationProps = {
  favoriteOffersCount: number;
}

function HeaderNavigation({favoriteOffersCount}: HeaderNavigationProps) : JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const dispatch = useAppDispatch();

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <NavigationUserItem authorizationStatus={authorizationStatus} favoriteOffersCount={favoriteOffersCount} />

        {
          authorizationStatus === AuthorizationStatus.Auth && (
            <li className="header__nav-item">
              <a
                className="header__nav-link"
                href="#"
                onClick={(evt) => {
                  evt.preventDefault();
                  dispatch(logoutAction());
                }}
              >
                <span className="header__signout">Sign out</span>
              </a>
            </li>
          )
        }

      </ul>
    </nav>
  );
}
export default HeaderNavigation;
