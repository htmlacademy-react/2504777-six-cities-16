import MainPage from '../../pages/main-page/main-page';

type AppProps = {
  foundPlacesCount: number;
}

export default function App({foundPlacesCount}: AppProps): JSX.Element {
  return (
    <MainPage foundPlacesCount={foundPlacesCount}/>
  );
}
