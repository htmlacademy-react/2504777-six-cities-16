// import { LogoParams } from '../../types/types';

// function Logo({prefixName, width, height}: LogoParams): JSX.Element {
//   return (
//     <a className={`${prefixName}__logo-link header__logo-link--active`}>
//       <img className={`${prefixName}__logo`} src="img/logo.svg" alt="6 cities logo" width={`${width}`} height={`${height}`}/>
//     </a>
//   );
// }

function Logo(): JSX.Element {
  return (
    <a className="header__logo-link header__logo-link--active">
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
    </a>
  );
}
export default Logo;
