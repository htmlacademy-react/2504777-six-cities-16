import MainPage from '../../pages/main-page/main-page';
import { Offers } from '../../types/types';

type AppProps = {
  offers: Offers;
}

function App({offers}: AppProps): JSX.Element {
  return (
    <MainPage
      offers={offers}
    />
  );
}

export default App;

