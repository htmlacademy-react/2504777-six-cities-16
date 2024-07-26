import { useRef, useEffect } from 'react';
import { City, CardOffer } from '../../types/offers';
import useMap from './use-map';
import { Icon, Marker, layerGroup } from 'leaflet';
import { UrlMapMarker } from '../../const';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: City;
  points: CardOffer[];
  activePoint: CardOffer | null;
}

const defaultCustomIcon = new Icon({
  iconUrl: UrlMapMarker.Default,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const activeCustomIcon = new Icon({
  iconUrl: UrlMapMarker.Active,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({city, points, activePoint}: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        },
        {
          icon: activePoint && activePoint.id === point.id ? activeCustomIcon : defaultCustomIcon,
        });
        marker.addTo(markerLayer);
      });
    }
  }, [map, points, activePoint]);

  return (
    <div
      style={{height: '100%'}}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
