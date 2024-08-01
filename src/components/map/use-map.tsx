import { useState, useRef, useEffect, MutableRefObject } from 'react';
import { Location } from '../../types/offers';
import { Map, TileLayer } from 'leaflet';
import { MapLayer } from '../../const';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, city: Location): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.latitude,
          lng: city.longitude,
        },
        zoom: city.zoom
      });

      const layer = new TileLayer(
        MapLayer.Template,
        {
          attribution:
            MapLayer.Attribution,
        }
      );

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  return map;
}

export default useMap;
