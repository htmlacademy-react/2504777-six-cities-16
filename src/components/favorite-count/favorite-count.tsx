import { useFavoritesCount } from '../../hooks/use-favorites-count';

function FavoriteCount(): JSX.Element {
  const count = useFavoritesCount();

  return <span className="header__favorite-count">{count}</span>;
}

export default FavoriteCount;
