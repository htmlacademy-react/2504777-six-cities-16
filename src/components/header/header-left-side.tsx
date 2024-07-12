import Logo from '../logo/logo';
import { LogoType } from '../../const';

const { ForHeader } = LogoType;

function HeaderLeftSide(): JSX.Element {
  return (
    <div className="header__left">
      <Logo {...ForHeader}/>
    </div>
  );
}
export default HeaderLeftSide;
