import { MAX_REVIEWS_NUMBER } from './const';
import { AuthorizationStatus } from '../../const';
import { Review } from '../../types/reviews';
import { sortReviewsByDate } from '../../utils';
import ReviewsForm from './reviews-form';
import ReviewsList from './reviews-list';

type ReviewsProps = {
  reviews: Review[];
  authorizationStatus: AuthorizationStatus;
}

function Reviews({reviews, authorizationStatus}: ReviewsProps): JSX.Element {

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      {reviews.length ? <ReviewsList reviews={sortReviewsByDate(reviews).slice(0, MAX_REVIEWS_NUMBER)} /> : ''}

      { authorizationStatus === AuthorizationStatus.Auth && <ReviewsForm />}

    </section>
  );
}

export default Reviews;
