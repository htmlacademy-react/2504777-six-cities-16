import { SyntheticEvent } from 'react';
import { useNavigate} from 'react-router-dom';
import { SpecialClassName, AuthorizationStatus, AppRoute } from '../../const';
import { BookmarkSize } from './const';
import { changeFavorites } from '../../store/thunk-action/favorites';
import { useAppDispatch } from '../../hooks';
import { useAuthorization } from '../../hooks/use-authorization';

const { Width, Height } = BookmarkSize;

type BookmarkProps = {
  className: SpecialClassName;
  offerId: string;
  isFavorite: boolean;
}

function Bookmark({className, offerId, isFavorite}: BookmarkProps): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { authorizationStatus } = useAuthorization();

  const width = className === SpecialClassName.PlaceCard ? Width.BASIC : Width.FOR_OFFER;
  const height = className === SpecialClassName.PlaceCard ? Height.BASIC : Height.FOR_OFFER;

  const handleButtonClick = (evt: SyntheticEvent) => {
    evt.preventDefault();
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(changeFavorites({offerId, status: Number(!isFavorite)}));
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
