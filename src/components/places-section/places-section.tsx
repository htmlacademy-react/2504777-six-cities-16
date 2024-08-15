import PlacesSorting from '../places-sorting/places-sorting';
import PlacesList from '../places-list/places-list';
import { SixCities, SpecialClassName } from '../../const';
import { Offers } from '../../types/offers';
import { getSortingType } from '../../store/slices/offers';
import { useAppSelector } from '../../hooks';

type PlacesSectionProps = {
  activeCity: SixCities;
  offers: Offers;
}

function PlacesSection({activeCity, offers}: PlacesSectionProps): JSX.Element {
  const currentType = useAppSelector(getSortingType);

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{`${offers.length} places to stay in ${activeCity}`}</b>
      <PlacesSorting currentType={currentType}/>
      <PlacesList className={SpecialClassName.Cities} offers={offers} currentType={currentType}/>
    </section>
  );
}
export default PlacesSection;
