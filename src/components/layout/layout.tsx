import { Outlet, useLocation } from 'react-router-dom';
import Logo from '../logo/logo';
import { getLayoutState } from '../../utils';
import { AppRoute } from '../../const';
import HeaderNavigation from '../navigation/navigation';
import { getFavorites } from '../../store/slices/favorites';
import { useAppSelector } from '../../hooks';

function Layout(): JSX.Element {
  const { pathname } = useLocation();
  const favoritesCount = useAppSelector(getFavorites).length;

  const {extraClassName, shouldRenderFooter, shouldRenderNavigation} = getLayoutState(pathname as AppRoute, favoritesCount);

  return (
    <div className={`page ${extraClassName}`}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo pathname={pathname as AppRoute} className='header'/>
            </div>
            {shouldRenderNavigation ? <HeaderNavigation favoriteOffersCount={favoritesCount} /> : ''}
          </div>
        </div>
      </header>

      <Outlet />

      {
        shouldRenderFooter ? (
          <footer className={`footer ${favoritesCount ? 'container' : ''}`}>
            <Logo pathname={pathname as AppRoute} className='footer'/>
          </footer>
        ) : ''
      }
    </div>
  );
}

export default Layout;
