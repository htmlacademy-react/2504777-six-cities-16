import { useState, useRef, useEffect, MutableRefObject } from 'react';
import { City } from '../../types/offers';
import { Map, TileLayer } from 'leaflet';
import { MapLayer } from '../../const';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, city: City): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: city.location.zoom
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
