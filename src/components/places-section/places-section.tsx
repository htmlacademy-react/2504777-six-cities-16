import PlacesSorting from '../places-sorting/places-sorting';
import PlacesList from '../places-list/places-list';
import { SixCities, SpecialClassName } from '../../const';
import { Offers, CardOffer } from '../../types/offers';
import { getSortingType } from '../../store/slices/offers';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { sortOffersByCurrentType } from '../../utils';
import { setActiveOfferId } from '../../store/slices/offers';

type PlacesSectionProps = {
  activeCity: SixCities;
  offers: Offers;
}

function PlacesSection({activeCity, offers}: PlacesSectionProps): JSX.Element {
  const dispatch = useAppDispatch();
  const currentType = useAppSelector(getSortingType);

  const handleMouseHover = (offerId: CardOffer['id'] | null) => dispatch(setActiveOfferId(offerId));

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{`${offers.length} places to stay in ${activeCity}`}</b>
      <PlacesSorting currentType={currentType}/>
      <PlacesList className={SpecialClassName.Cities} offers={sortOffersByCurrentType(currentType, offers)} onMouseHover={handleMouseHover}/>
    </section>
  );
}
export default PlacesSection;
