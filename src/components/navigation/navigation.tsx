import { Link } from 'react-router-dom';
import { AuthorizationStatus, AppRoute } from '../../const';
import { useAuthorization } from '../../hooks/use-authorization';
import LoggedNavigation from './logged-navigation';

function Navigation() : JSX.Element {
  const { authorizationStatus } = useAuthorization();

  return (
    <nav className="header__nav">
      {authorizationStatus === AuthorizationStatus.Auth ? <LoggedNavigation /> : (
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
              <div className="header__avatar-wrapper user__avatar-wrapper">
              </div>
              <span className="header__login">Sign in</span>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navigation;
