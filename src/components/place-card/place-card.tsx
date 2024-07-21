import { CardOffer } from '../../types/offers';
import { getRatingStars } from '../../utils';
import { SpecialClassName, ImageHeight, ImageWidth, AppRoute } from '../../const';
import { Link } from 'react-router-dom';
import Bookmark from '../bookmark/bookmark';


function PlaceCardMark(): JSX.Element {
  return (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );
}

type PlaceCardProps = {
  className: SpecialClassName;
	place: CardOffer;
}

function PlaceCard({ className, place }: PlaceCardProps): JSX.Element {

  const width = className === SpecialClassName.Favorites ? ImageWidth.ForFavorite : ImageWidth.Basic;
  const height = className === SpecialClassName.Favorites ? ImageHeight.ForFavorite : ImageHeight.Basic;

  return (
    <article className={`${className}__card place-card`}>

      {place.isPremium && <PlaceCardMark />}

      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <Link to={AppRoute.Offer.replace(':id', place.id)}>
          <img className="place-card__image" src={place.previewImage} width={width} height={height} alt="Place image" />
        </Link>
      </div>
      <div className={`${className === SpecialClassName.Favorites ? 'favorites__card-info' : ''} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{place.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <Bookmark className={SpecialClassName.PlaceCard} isFavorite={place.isFavorite}/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span
              style={{
                width: getRatingStars(place.rating),
              }}
            >
            </span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={AppRoute.Offer.replace(':id', place.id)}>{place.title}</Link>
        </h2>
        <p className="place-card__type">{place.type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
