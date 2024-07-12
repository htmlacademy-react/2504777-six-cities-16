import MainPage from '../../pages/main-page/main-page';
import { Offers } from '../../types/types';

type AppProps = {
  foundPlacesCount: number;
  offers: Offers;
}

function App({foundPlacesCount, offers}: AppProps): JSX.Element {
  return (
    <MainPage
      foundPlacesCount={foundPlacesCount}
      offers={offers}
    />
  );
}

export default App;

