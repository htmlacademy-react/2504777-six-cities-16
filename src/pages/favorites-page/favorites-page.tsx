import { Helmet } from 'react-helmet-async';
import { Title } from '../../const';
import Loader from '../loader/loader';
import NotFoundPage from '../not-found-page/not-found-page';
import FavoritesEmpty from '../../components/favorites/favorites-empty';
import Favorites from '../../components/favorites/favorites';
import { useFavorites } from '../../hooks/use-favorites';

function FavoritesPage(): JSX.Element {
  const { favorites, hasFavorites, isLoading, isFailed } = useFavorites();

  if (isLoading) {
    return <Loader />;
  }

  if (isFailed) {
    return <NotFoundPage />;
  }

  return (
    <>
      <Helmet>
        <title>{Title.Favorites}</title>
      </Helmet>

      <main className={`page__main page__main--favorites ${hasFavorites ? '' : 'page__main--favorites-empty'}`}>
        <div className="page__favorites-container container">
          {hasFavorites ? <Favorites favorites={favorites} /> : <FavoritesEmpty />}
        </div>
      </main>
    </>
  );
}

export default FavoritesPage;
