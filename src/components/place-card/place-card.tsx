import { Link } from 'react-router-dom';
import { CardOffer, ServerOffer } from '../../types/offers';
import { getRatingStars, upFirstLetter } from '../../utils';
import { SpecialClassName, AppRoute } from '../../const';
import { ImageSize } from './const';
import Bookmark from '../bookmark/bookmark';
import PremiumMark from '../premium-mark/premium-mark';

const { Width, Height } = ImageSize;

type PlaceCardProps = {
  className: SpecialClassName;
	offer: CardOffer | ServerOffer;
  onMouseHover?: (offerId: CardOffer['id'] | null) => void;
}

function PlaceCard({ className, offer, onMouseHover }: PlaceCardProps): JSX.Element {
  const width = className === SpecialClassName.Favorites ? Width.FOR_FAVORITE : Width.BASIC;
  const height = className === SpecialClassName.Favorites ? Height.FOR_FAVORITE : Height.BASIC;

  const handleMouseEnter = () => {
    if(onMouseHover) {
      onMouseHover(offer.id);
    }
  };
  const handleMouseLeave = () => {
    if(onMouseHover) {
      onMouseHover(null);
    }
  };

  return (
    <article
      className={`${className}__card place-card`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {offer.isPremium && <PremiumMark className={SpecialClassName.PlaceCard}/>}
      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <Link
          to={AppRoute.Offer.replace(':id', offer.id)}
        >
          <img className="place-card__image" src={offer.previewImage} width={width} height={height} alt="Place image" />
        </Link>
      </div>
      <div className={`${className === SpecialClassName.Favorites ? 'favorites__card-info' : ''} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <Bookmark className={SpecialClassName.PlaceCard} isFavorite={offer.isFavorite} offerId={offer.id}/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span
              style={getRatingStars(offer.rating)}
            >
            </span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={AppRoute.Offer.replace(':id', offer.id)}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{upFirstLetter(offer.type)}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
