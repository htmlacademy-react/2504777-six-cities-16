import { SortingTypes } from '../../const';
import { useAppDispatch } from '../../hooks';
import { useState } from 'react';
import { changeSortingType } from '../../store/slices/offers';

type PlacesSortingProps = {
  currentType: string;
}

function PlacesSorting({currentType}: PlacesSortingProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useAppDispatch();

  const placesOptionsClassName = isOpen ? 'places__options--opened' : '';

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
      >
        {currentType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom ${placesOptionsClassName}`}
      >
        {
          Object.values(SortingTypes).map((sortingType) => (
            <li
              key={sortingType}
              className={`places__option ${sortingType === currentType ? 'places__option--active' : ''}`}
              tabIndex={0}
              onClick={() => {
                dispatch(changeSortingType(sortingType));
                setIsOpen((prevIsOpen) => !prevIsOpen);
              }}
            >
              {sortingType}
            </li>)
          )
        }
      </ul>
    </form>
  );
}

export default PlacesSorting;

