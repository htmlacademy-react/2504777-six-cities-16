import { useRef, useEffect } from 'react';
import { City, MapPoint } from '../../types/offers';
import useMap from './use-map';
import { Icon, Marker, layerGroup } from 'leaflet';
import { UrlMapMarker } from '../../const';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  className: string;
  city: City;
  points: MapPoint[];
  activePointId: string | null;
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

function Map({className, city, points, activePointId}: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.latitude,
          lng: point.longitude,
        },
        {
          icon: activePointId === point.id ? activeCustomIcon : defaultCustomIcon,
        });
        marker.addTo(markerLayer);
      });
    }
  }, [map, points, activePointId]);

  return (
    <section
      className={`${className}__map map`}
      ref={mapRef}
    >
    </section>
  );
}

export default Map;
