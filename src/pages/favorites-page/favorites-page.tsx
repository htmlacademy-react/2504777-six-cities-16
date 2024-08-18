import { Helmet } from 'react-helmet-async';
import { Title, RequestStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { getFavorites, getStatus } from '../../store/slices/favorites';
// import LoadingPage from '../loading-page/loading-page';
import NotFoundPage from '../not-found-page/not-found-page';
import FavoritesSectionEmpty from '../../components/favorites-section/favorites-section-empty';
import FavoritesSection from '../../components/favorites-section/favorites-section';

function FavoritesPage(): JSX.Element {
  const favorites = useAppSelector(getFavorites);
  const requestStatus = useAppSelector(getStatus);

  const hasFavorites = favorites.length !== 0;

  // if (requestStatus === RequestStatus.Loading) {
  //   return <LoadingPage />;
  // }

  if (requestStatus === RequestStatus.Failed) {
    return <NotFoundPage />;
  }

  return (
    <>
      <Helmet>
        <title>{Title.Favorites}</title>
      </Helmet>

      <main className={`page__main page__main--favorites ${hasFavorites ? '' : 'page__main--favorites-empty'}`}>
        <div className="page__favorites-container container">
          {hasFavorites ? <FavoritesSection favorites={favorites} /> : <FavoritesSectionEmpty />}
        </div>
      </main>
    </>
  );
}

export default FavoritesPage;
