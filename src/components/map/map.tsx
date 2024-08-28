import 'leaflet/dist/leaflet.css';
import { useRef, useEffect } from 'react';
import { Icon, LayerGroup, Marker, layerGroup } from 'leaflet';
import { Location, MapPoint } from '../../types/offers';
import { UrlMapMarker } from './const';
import { activeOfferId } from '../../store/slices/offers';
import { useAppSelector } from '../../hooks';
import { useMap } from './use-map';


type MapProps = {
  className: string;
  city: Location;
  points: MapPoint[];
}

const defaultCustomIcon = new Icon({
  iconUrl: UrlMapMarker.Default,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

const activeCustomIcon = new Icon({
  iconUrl: UrlMapMarker.Active,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

function Map({className, city, points}: MapProps) {

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const markerLayer = useRef<LayerGroup>(layerGroup());

  const activePointId = useAppSelector(activeOfferId);

  useEffect(() => {
    if (map) {
      map.setView([city.latitude, city.longitude], city.zoom);
      markerLayer.current.addTo(map);
      markerLayer.current.clearLayers();
    }
  });

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.latitude,
          lng: point.longitude,
        },
        {
          icon: activePointId === point.id ? activeCustomIcon : defaultCustomIcon,
        });
        marker.addTo(markerLayer.current);
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
