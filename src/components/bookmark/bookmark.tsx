import { SpecialClassName, BookmarkHeight, BookmarkWidth } from '../../const';

// undefined здесь костыль - смотри currentOffer в offer-page

type BookmarkProps = {
  className: SpecialClassName;
  isFavorite: boolean;
}

function Bookmark({className, isFavorite}: BookmarkProps): JSX.Element {
  const width = className === SpecialClassName.PlaceCard ? BookmarkWidth.Basic : BookmarkWidth.ForOffer;
  const height = className === SpecialClassName.PlaceCard ? BookmarkHeight.Basic : BookmarkHeight.ForOffer;

  return (
    <button className={`${className}__bookmark-button ${isFavorite ? `${className}__bookmark-button--active` : ''} button`} type="button">
      <svg className={`${className}__bookmark-icon`} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}

export default Bookmark;
