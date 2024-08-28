import { Outlet, useLocation } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useLayoutState } from '../../hooks/use-layout-state';
import Logo from '../logo/logo';
import Navigation from '../navigation/navigation';

function Layout(): JSX.Element {
  const { pathname } = useLocation();

  const {extraClassName, shouldRenderFooter, shouldRenderNavigation} = useLayoutState(pathname as AppRoute);

  return (
    <div className={`page ${extraClassName}`}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo pathname={pathname as AppRoute} className='header'/>
            </div>
            {shouldRenderNavigation ? <Navigation /> : ''}
          </div>
        </div>
      </header>

      <Outlet />

      {
        shouldRenderFooter ? (
          <footer className='footer'>
            <Logo pathname={pathname as AppRoute} className='footer'/>
          </footer>
        ) : ''
      }
    </div>
  );
}

export default Layout;
