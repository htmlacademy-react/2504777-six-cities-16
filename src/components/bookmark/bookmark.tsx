import { SyntheticEvent } from 'react';
import { SpecialClassName, BookmarkHeight, BookmarkWidth, AuthorizationStatus, AppRoute } from '../../const';
import { changeFavorite } from '../../store/thunk-action/favorites';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { updateOffer } from '../../store/slices/full-offer';
import { updateOffers } from '../../store/slices/offers';
import { getAuthorizationStatus } from '../../store/slices/user';
import { useNavigate} from 'react-router-dom';

type BookmarkProps = {
  className: SpecialClassName;
  offerId: string;
  isFavorite: boolean;
}

function Bookmark({className, offerId, isFavorite}: BookmarkProps): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const width = className === SpecialClassName.PlaceCard ? BookmarkWidth.Basic : BookmarkWidth.ForOffer;
  const height = className === SpecialClassName.PlaceCard ? BookmarkHeight.Basic : BookmarkHeight.ForOffer;

  const handleButtonClick = (evt: SyntheticEvent) => {
    evt.preventDefault();
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(changeFavorite({offerId, status: Number(!isFavorite)}))
        .unwrap()
        .then(() => {
          dispatch(updateOffers(offerId));
          dispatch(updateOffer(offerId));
        });
    } else {
      navigate(AppRoute.Login);
    }
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
