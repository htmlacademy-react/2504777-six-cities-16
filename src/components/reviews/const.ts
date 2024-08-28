export const MAX_REVIEWS_NUMBER = 10;

export const ReviewLength = {
  Min: 50,
  Max: 300,
} as const;

export const Rating = {
  Perfect: 5,
  Good: 4,
  NotBad: 3,
  Badly: 2,
  Terribly: 1,
} as const;

export enum DateFormat {
  FullDate = 'YYYY-MM-DD',
  MonthAndYear = 'MMMM YYYY',
}
