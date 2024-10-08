import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Title, SpecialClassName, RequestStatus } from '../../const';
import { MAX_OFFER_IMAGE_NUMBER, MAX_OFFERS_NEARBY_NUMBER } from './const';
import { getRatingStars, getEnding, upFirstLetter } from '../../utils';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { fetchFullOffer, fetchOffersNearby } from '../../store/thunk-action/full-offer';
import { fetchReviews } from '../../store/thunk-action/reviews';
import { offerInfo, offersNearby, requestStatus } from '../../store/slices/full-offer';
import { userReviews } from '../../store/slices/reviews';
import { setActiveOfferId } from '../../store/slices/offers';
import { useAuthorization } from '../../hooks/use-authorization';
import PlacesList from '../../components/places-list/places-list';
import NotFoundPage from '../not-found-page/not-found-page';
import ReviewsSection from '../../components/reviews/reviews';
import Bookmark from '../../components/bookmark/bookmark';
import PremiumMark from '../../components/premium-mark/premium-mark';
import OfferHost from '../../components/offer-host/offer-host';
import Map from '../../components/map/map';
import Loader from '../loader/loader';

function OfferPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const { authorizationStatus } = useAuthorization();
  const offer = useAppSelector(offerInfo);
  const nearby = useAppSelector(offersNearby).slice(0, MAX_OFFERS_NEARBY_NUMBER);
  const offerStatus = useAppSelector(requestStatus);
  const reviews = useAppSelector(userReviews);

  const { id: offerId } = useParams();

  useEffect(() => {
    Promise.all([dispatch(fetchFullOffer(offerId as string)), dispatch(fetchOffersNearby(offerId as string)), dispatch(fetchReviews(offerId as string))]);
    dispatch(setActiveOfferId(offerId as string));
  }, [dispatch, offerId]);

  if (offerStatus === RequestStatus.Loading) {
    return <Loader />;
  }

  if (offerStatus === RequestStatus.Failed || !offer) {
    return <NotFoundPage />;
  }

  const { images, isPremium, title, isFavorite, rating, type, bedrooms, maxAdults, price, goods, host, description, city } = offer;

  const mapPoints = nearby.map(({ id, location }) => ({ id, ...location }))
    .concat({ id: offer.id, ...offer.location });

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
                        <img className="offer__image" src={image} alt="Photo studio" />
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

                <Bookmark className={SpecialClassName.Offer} isFavorite={isFavorite} offerId={offer.id} />

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
                  {upFirstLetter(type)}
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

              <ReviewsSection reviews={reviews} authorizationStatus={authorizationStatus} />
            </div>
          </div>
          <Map className={SpecialClassName.Offer} city={city.location} points={mapPoints} />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <PlacesList className={SpecialClassName.NearPlaces} offers={nearby} />
          </section>
        </div>
      </main>
    </>
  );
}

export default OfferPage;
