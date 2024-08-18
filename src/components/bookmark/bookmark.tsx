import { SyntheticEvent } from 'react';
import { SpecialClassName, BookmarkHeight, BookmarkWidth } from '../../const';
import { changeFavorite } from '../../store/thunk-action/favorites';
import { useAppDispatch } from '../../hooks';
import { updateOffer } from '../../store/slices/full-offer';
import { updateOffers } from '../../store/slices/offers';

type BookmarkProps = {
  className: SpecialClassName;
  offerId: string;
  isFavorite: boolean;
}

function Bookmark({className, offerId, isFavorite}: BookmarkProps): JSX.Element {
  const dispatch = useAppDispatch();

  const width = className === SpecialClassName.PlaceCard ? BookmarkWidth.Basic : BookmarkWidth.ForOffer;
  const height = className === SpecialClassName.PlaceCard ? BookmarkHeight.Basic : BookmarkHeight.ForOffer;

  const handleButtonClick = (evt: SyntheticEvent) => {
    evt.preventDefault();
    dispatch(changeFavorite({offerId, status: Number(!isFavorite)}));
    dispatch(updateOffers(offerId));
    dispatch(updateOffer(offerId));
  };

  return (
    <button
      className={`${className}__bookmark-button ${isFavorite ? `${className}__bookmark-button--active` : ''} button`}
      type="button"
      onClick={handleButtonClick}
    >
      <svg className={`${className}__bookmark-icon`} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}

export default Bookmark;
