import { useRef } from 'react';
import { City } from '../../types/offers';
import useMap from './use-map';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: City;
}

function Map({city}: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  return (
    <div
      style={{height: '100%'}}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
