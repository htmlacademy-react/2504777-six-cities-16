import { useState, Fragment} from 'react';
import { Rating } from '../../const';
import { getRatingKeyValue } from '../../utils';
import { ReviewLength } from './const';
import { postReview } from '../../store/thunk-action/reviews';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { UserReview } from '../../types/reviews';
import { getOfferInfo } from '../../store/slices/full-offer';
import { getReviewsStatus } from '../../store/slices/reviews';
import { RequestStatus } from '../../const';

function Notification(): JSX.Element {
  return (<span>The text of the review must contain no more than <b className="reviews__text-amount" style={{color: 'red'}}>300 characters</b>.</span>);
}

function ReviewsForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const offer = useAppSelector(getOfferInfo);
  const requestStatus = useAppSelector(getReviewsStatus);

  const isLoadingProcess = () => requestStatus === RequestStatus.Loading;

  const [review, setReview] = useState<UserReview>({
    rating: 0,
    comment: '',
  });

  const [reviewStatus, setReviewStatus] = useState({
    isInvalid: true,
    hasExtraCommentLength: false,
  });

  const isInvalid = ({rating, comment}: UserReview): boolean => rating === 0 || !(comment.length >= ReviewLength.MIN && comment.length <= ReviewLength.MAX);

  const handleRatingChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setReview({
      ...review,
      rating: Number(evt.target.value),
    });

    setReviewStatus({
      ...reviewStatus,
      isInvalid: isInvalid(review),
    });
  };

  const handleTextChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview({
      ...review,
      comment: evt.target.value
    });

    setReviewStatus({
      isInvalid: isInvalid(review),
      hasExtraCommentLength: review.comment.length > ReviewLength.MAX
    });
  };

  const handleFormSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    if (offer) {
      dispatch(postReview({body: {...review}, offerId: offer.id}));
    }
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Object.entries(Rating).map(([key, value]) => (
          <Fragment key={key}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={value}
              id={`${value}-stars`}
              type="radio"
              disabled={isLoadingProcess()}
              onChange={handleRatingChange}
            />
            <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={getRatingKeyValue(key)}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        disabled={isLoadingProcess()}
        onChange={handleTextChange}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>. {reviewStatus.hasExtraCommentLength && <Notification />}
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={reviewStatus.isInvalid || isLoadingProcess()}>Submit</button>
      </div>
    </form>
  );
}
export default ReviewsForm;

