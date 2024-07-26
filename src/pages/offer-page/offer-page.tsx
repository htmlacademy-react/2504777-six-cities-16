import { Helmet } from 'react-helmet-async';
import { Title, AppRoute, SpecialClassName, MAX_OFFER_IMAGE_NUMBER, AuthorizationStatus } from '../../const';
import PlacesList from '../../components/places-list/places-list';
import { useParams, Navigate } from 'react-router-dom';
import Bookmark from '../../components/bookmark/bookmark';
import { getFullOfferById } from '../../mocks/offers/full-offers';
import { getNearPlaces, getOfferById } from '../../mocks/offers/card-offers';
import PremiumMark from '../../components/premium-mark/premium-mark';
import { getRatingStars, getEnding, getAuthorizationStatus } from '../../utils';
import OfferHost from '../../components/offer-host/offer-host';
import ReviewsForm from '../../components/reviews-form/reviews-form';
import { getReviewsByOfferId } from '../../mocks/reviews';
import ReviewsList from '../../components/reviews-list/reviews-list';
import Map from '../../components/map/map';
import { CardOffer } from '../../types/offers';

function OfferPage(): JSX.Element {
  const { id: offerId } = useParams();

  const currentOffer: CardOffer | null = getOfferById(offerId);
  const currentFullOffer = getFullOfferById(offerId);
  const nearPlaces = getNearPlaces(offerId);
  const authorizationStatus = getAuthorizationStatus();
  const reviews = getReviewsByOfferId(offerId);

  if (!currentFullOffer || !currentOffer) {
    return <Navigate to={AppRoute.Error} replace />;
  }

  return (
    <>
      <Helmet>
        <title>{Title.Favorites}</title>
      </Helmet>

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {
                currentFullOffer.images.map((image, index) => {
                  if (index < MAX_OFFER_IMAGE_NUMBER) {
                    return (
                      <div key={image} className="offer__image-wrapper">
                        <img className="offer__image" src={image} alt="Photo studio"/>
                      </div>);
                  }
                })
              }
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {currentFullOffer.isPremium && <PremiumMark className={SpecialClassName.Offer} />}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{currentFullOffer.title}</h1>

                <Bookmark className={SpecialClassName.Offer} isFavorite={currentFullOffer.isFavorite}/>

              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span
                    style={getRatingStars(currentFullOffer.rating)}
                  >
                  </span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{currentFullOffer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {currentFullOffer.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {`${currentFullOffer.bedrooms} ${getEnding(currentFullOffer.bedrooms, 'Bedroom')}`}
                </li>
                <li className="offer__feature offer__feature--adults">
                  {`Max ${currentFullOffer.maxAdults} ${getEnding(currentFullOffer.maxAdults, 'adult')}`}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{currentFullOffer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {
                    currentFullOffer.goods.map((good) => (
                      <li key={good} className="offer__inside-item">
                        {good}
                      </li>
                    ))
                  }
                </ul>
              </div>

              <OfferHost host={currentFullOffer.host} offerDescription={currentFullOffer.description} />

              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ReviewsList reviews={reviews} />

                { authorizationStatus === AuthorizationStatus.Auth && <ReviewsForm />}

              </section>
            </div>
          </div>
          <section className="offer__map map">
            <Map city={currentFullOffer.city} points={[...nearPlaces, currentOffer]} activePoint={currentOffer}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <PlacesList className={SpecialClassName.NearPlaces} places={nearPlaces} />
          </section>
        </div>
      </main>
    </>
  );
}
export default OfferPage;
