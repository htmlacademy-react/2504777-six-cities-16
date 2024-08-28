import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { LogoSize } from './const';

const { Width, Height } = LogoSize;

type LogoProps = {
  pathname: AppRoute;
  className: string;
}

function Logo({pathname, className}: LogoProps): JSX.Element {
  if (pathname === AppRoute.Root) {
    return (
      <a className="header__logo-link header__logo-link--active">
        <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
      </a>
    );
  }

  const width = className === 'header' ? Width.FOR_HEADER : Width.FOR_FOOTER;
  const height = className === 'header' ? Height.FOR_HEADER : Height.FOR_FOOTER;

  return (
    <Link className={`${className}__logo-link`} to={AppRoute.Root}>
      <img className={`${className}__logo`} src="img/logo.svg" alt="6 cities logo" width={width} height={height}/>
    </Link>
  );
}

export default Logo;
