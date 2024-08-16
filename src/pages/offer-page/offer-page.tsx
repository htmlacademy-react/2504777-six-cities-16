import { Helmet } from 'react-helmet-async';
import { Title, AppRoute, SpecialClassName, MAX_OFFER_IMAGE_NUMBER, MAX_REVIEWS_NUMBER, AuthorizationStatus } from '../../const';
import PlacesList from '../../components/places-list/places-list';
import { useParams, Navigate } from 'react-router-dom';
import Bookmark from '../../components/bookmark/bookmark';
import PremiumMark from '../../components/premium-mark/premium-mark';
import { getRatingStars, getEnding, sortReviewsByDate } from '../../utils';
import OfferHost from '../../components/offer-host/offer-host';
import ReviewsForm from '../../components/reviews-form/reviews-form';
import ReviewsList from '../../components/reviews-list/reviews-list';
import Map from '../../components/map/map';
import { useAppSelector, useAppDispatch } from '../../hooks';
import LoadingPage from '../loading-page/loading-page';
import { useEffect } from 'react';
import { fetchFullOffer, fetchOffersNearby } from '../../store/thunk-action/full-offer';
import { fetchReviews } from '../../store/thunk-action/reviews';
import { getOfferInfo, getOffersNearby, getOfferStatus } from '../../store/slices/full-offer';
import { getAuthorizationStatus } from '../../store/slices/user';
import { getReviews, getReviewsStatus } from '../../store/slices/reviews';
import { RequestStatus } from '../../const';

function OfferPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const offer = useAppSelector(getOfferInfo);
  const offersNearby = useAppSelector(getOffersNearby);
  const offerStatus = useAppSelector(getOfferStatus);
  const reviews = useAppSelector(getReviews);
  // const reviewsStatus = useAppSelector(getReviewsStatus);

  const { id: offerId } = useParams();

  // Нужно будет добавить зависимости для useEffect, но после добавления хука useActionCreator
  useEffect(() => {
    Promise.all([dispatch(fetchFullOffer(offerId as string)), dispatch(fetchOffersNearby(offerId as string)), dispatch(fetchReviews(offerId as string))]);
  });

  if (offerStatus === RequestStatus.Loading) {
    return <LoadingPage />;
  }

  if (offerStatus === RequestStatus.Failed || !offer) {
    return <Navigate to={AppRoute.Error} replace />;
  }

  const { images, isPremium, title, isFavorite, rating, type, bedrooms, maxAdults, price, goods, host, description, city } = offer;

  const mapPoints = offersNearby.map(({id, location}) => ({id, ...location}))
    .concat({id: offer.id, ...offer.location});

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
                images.map((image, index) => {
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
              {isPremium && <PremiumMark className={SpecialClassName.Offer} />}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{title}</h1>

                <Bookmark className={SpecialClassName.Offer} isFavorite={isFavorite}/>

              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span
                    style={getRatingStars(rating)}
                  >
                  </span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {`${bedrooms} ${getEnding(bedrooms, 'Bedroom')}`}
                </li>
                <li className="offer__feature offer__feature--adults">
                  {`Max ${maxAdults} ${getEnding(maxAdults, 'adult')}`}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {goods.map((good) => (<li key={good} className="offer__inside-item">{good}</li>))}
                </ul>
              </div>

              <OfferHost host={host} offerDescription={description} />

              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ReviewsList reviews={sortReviewsByDate(reviews).slice(0, MAX_REVIEWS_NUMBER)} />

                { authorizationStatus === AuthorizationStatus.Auth && <ReviewsForm />}

              </section>
            </div>
          </div>
          <Map className={SpecialClassName.Offer} city={city.location} points={mapPoints} activePointId={offer.id}/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <PlacesList className={SpecialClassName.NearPlaces} offers={offersNearby} />
          </section>
        </div>
      </main>
    </>
  );
}
export default OfferPage;
