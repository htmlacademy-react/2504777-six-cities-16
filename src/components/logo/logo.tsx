import { LogoParams } from '../../types/types';

function Logo({prefixName, width, height}: LogoParams): JSX.Element {
  return (
    <a className={`${prefixName}__logo-link header__logo-link--active`}>
      <img className={`${prefixName}__logo`} src="img/logo.svg" alt="6 cities logo" width={`${width}`} height={`${height}`}/>
    </a>
  );
}

export default Logo;
