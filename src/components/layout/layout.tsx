import { Outlet, useLocation } from 'react-router-dom';
import Logo from '../logo/logo';
import { getLayoutState } from '../../utils';
import { AppRoute } from '../../const';
import HeaderNavigation from '../navigation/navigation';

type LayoutProps = {
  favoriteOffersCount: number;
}

function Layout({favoriteOffersCount}: LayoutProps): JSX.Element {
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
            {shouldRenderNavigation ? <HeaderNavigation favoriteOffersCount={favoriteOffersCount} /> : ''}
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
