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
  const [review, setReview] = useState<UserReview>({
    rating: 0,
    comment: '',
  });

  const dispatch = useAppDispatch();

  const offer = useAppSelector(getOfferInfo);
  const requestStatus = useAppSelector(getReviewsStatus);

  const isLoadingProcess = requestStatus === RequestStatus.Loading;
  const hasExtraCommentLength = review.comment.length > ReviewLength.MAX;
  const isInvalid = review.rating === 0 || !(review.comment.length >= ReviewLength.MIN && review.comment.length <= ReviewLength.MAX);

  const handleTextAreaChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview({
      ...review,
      comment: evt.target.value});
  };

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setReview({
      ...review,
      rating: Number(evt.target.value),
    });
  };

  const handleFormSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    if (offer) {
      dispatch(postReview({body: {...review}, offerId: offer.id}))
        .unwrap()
        .then(() => {
          setReview({
            rating: 0,
            comment: ''
          });
        });
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
              disabled={isLoadingProcess}
              onChange={handleInputChange}
              checked={value === review.rating}
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
        value={review.comment}
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        disabled={isLoadingProcess}
        onChange={handleTextAreaChange}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>. {hasExtraCommentLength && <Notification />}
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isInvalid || isLoadingProcess}>Submit</button>
      </div>
    </form>
  );
}
export default ReviewsForm;

