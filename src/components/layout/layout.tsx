import { Outlet, useLocation, Link } from 'react-router-dom';
import Logo from '../logo/logo';
import { getLayoutState } from '../../utils';
import { AppRoute, AuthorizationStatus } from '../../const';

type LayoutProps = {
  favoriteOffersCount: number;
  authorizationStatus: AuthorizationStatus;
}

function Layout({favoriteOffersCount, authorizationStatus}: LayoutProps): JSX.Element {
  const { pathname } = useLocation();
  const {extraClassName, shouldRenderFooter, shouldRenderNavigation} = getLayoutState(pathname as AppRoute, favoriteOffersCount);

  return (
    <div className={`page ${extraClassName}`}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo pathname={pathname as AppRoute} className='header'/>
            </div>
            {
              shouldRenderNavigation ? (
                <nav className="header__nav">
                  <ul className="header__nav-list">
                    <li className="header__nav-item user">
                      <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                        </div>
                        <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                        <span className="header__favorite-count">{favoriteOffersCount}</span>
                      </Link>
                    </li>
                    <li className="header__nav-item">
                      <a className="header__nav-link" href="#">
                        <span className="header__signout">Sign out</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              ) : ''
            }

          </div>
        </div>
      </header>

      <Outlet />

      {
        shouldRenderFooter ? (
          <footer className={`footer ${favoriteOffersCount ? 'container' : ''}`}>
            <Logo pathname={pathname as AppRoute} className='footer'/>
          </footer>
        ) : ''
      }
    </div>
  );
}

export default Layout;
