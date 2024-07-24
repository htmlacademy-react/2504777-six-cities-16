import { SpecialClassName } from '../../const';

type PremiumMarkProps = {
  className: SpecialClassName;
}

function PremiumMark({className}: PremiumMarkProps): JSX.Element {
  return (
    <div className={`${className}__mark`}>
      <span>Premium</span>
    </div>
  );
}

export default PremiumMark;
