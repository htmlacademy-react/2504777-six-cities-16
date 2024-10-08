import { SixCities, SpecialClassName } from '../../const';
import { Offers, CardOffer } from '../../types/offers';
import { sortingType, setActiveOfferId } from '../../store/slices/offers';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { sortOffersByCurrentType, getEnding } from '../../utils';
import PlacesSorting from '../places-sorting/places-sorting';
import PlacesList from '../places-list/places-list';

type PlacesSectionProps = {
  activeCity: SixCities;
  offers: Offers;
}

function PlacesSection({activeCity, offers}: PlacesSectionProps): JSX.Element {
  const dispatch = useAppDispatch();
  const currentType = useAppSelector(sortingType);

  const handleMouseHover = (offerId: CardOffer['id'] | null) => dispatch(setActiveOfferId(offerId));

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{`${offers.length} ${getEnding(offers.length, 'place')} to stay in ${activeCity}`}</b>
      <PlacesSorting currentType={currentType}/>
      <PlacesList className={SpecialClassName.Cities} offers={sortOffersByCurrentType(currentType, offers)} onMouseHover={handleMouseHover}/>
    </section>
  );
}

export default PlacesSection;
