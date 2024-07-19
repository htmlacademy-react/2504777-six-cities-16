import { CardOffer } from '../../types/offers';
import { getRatingStars } from '../../utils';
import { PlaceCardClassName, ImageHeight, ImageWidth } from '../../const';

function PlaceCardMark(): JSX.Element {
  return (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );
}

function Bookmark(): JSX.Element {
  return (
    <button className="place-card__bookmark-button button" type="button">
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

type PlaceCardProps = {
  className: PlaceCardClassName;
	place: CardOffer;
}

function PlaceCard({ className, place }: PlaceCardProps): JSX.Element {

  const width = className === PlaceCardClassName.Favorites ? ImageWidth.ForFavorite : ImageWidth.Basic;
  const height = className === PlaceCardClassName.Favorites ? ImageHeight.ForFavorite : ImageHeight.Basic;

  return (
    <article className={`${className}__card place-card`}>

      {place.isPremium && <PlaceCardMark />}

      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={place.previewImage} width={width} height={height} alt="Place image" />
        </a>
      </div>
      <div className={`${className === PlaceCardClassName.Favorites ? 'favorites__card-info' : ''} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{place.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <Bookmark />
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
          <a href="#">{place.title}</a>
        </h2>
        <p className="place-card__type">{place.type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
