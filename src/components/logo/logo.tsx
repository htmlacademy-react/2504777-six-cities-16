import { AppRoute, LogoHeight, LogoWidth } from '../../const';
import { Link } from 'react-router-dom';

type LogoProps = {
  pathname: string;
  className: string;
}

function Logo({pathname, className}: LogoProps): JSX.Element {
  if (pathname === AppRoute.Root as string) {
    return (
      <a className="header__logo-link header__logo-link--active">
        <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
      </a>
    );
  }

  const width = className === 'header' ? LogoWidth.ForHeader : LogoWidth.ForFooter;
  const height = className === 'header' ? LogoHeight.ForHeader : LogoHeight.ForFooter;

  return (
    <Link className={`${className}__logo-link`} to={AppRoute.Root}>
      <img className={`${className}__logo`} src="img/logo.svg" alt="6 cities logo" width={width} height={height}/>
    </Link>
  );
}
export default Logo;
