import { Link } from 'react-router-dom';
import './not-found-page.css';
import { AppRoute } from '../../const';

function NotFoundPage(): JSX.Element {
  return (
    <div className="page page--gray page--error">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={AppRoute.Root}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className="page__main page__main--error">
        <div className="page__error-container container">
          <section className="error">
            <div className="error__wrapper">
              <b className="error__status">404 / Page not found</b>
              <Link className="error-link" to={AppRoute.Root}>Go to main page</Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default NotFoundPage;
