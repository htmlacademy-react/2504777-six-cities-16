import { Helmet } from 'react-helmet-async';
import { Title } from '../../const';
import { useRef } from 'react';
import { useAppDispatch } from '../../hooks';
import { login } from '../../store/thunk-action/user';
// import { useFavorites } from '../../hooks/use-favorites';
// import { updateOffers,  } from '../../store/slices/offers';
import { fetchOffers } from '../../store/thunk-action/offers';
// import { fetchFavorites } from '../../store/thunk-action/favorites';

function LoginPage(): JSX.Element {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();

  // const { favorites } = useFavorites();

  const handleFormSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    if (emailRef.current !== null && passwordRef.current !== null) {
      dispatch(login({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }))
        .unwrap()
        .then(() => {
          // dispatch(fetchFavorites());
          dispatch(fetchOffers());
          // .unwrap()
          // .then(() => {
          //   dispatch(updateOffers(favorites));
          // });
        });
    }
  };

  return (
    <>
      <Helmet>
        <title>{Title.Login}</title>
      </Helmet>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="#"
              method="post"
              onSubmit={handleFormSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={emailRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  pattern="^(?=.*[a-zA-Z])(?=.*\d).*$"
                  title="Password must contain at least one letter and one number"
                  placeholder="Password"
                  required
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default LoginPage;
