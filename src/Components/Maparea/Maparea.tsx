import React, { useEffect, useState } from 'react';
import { APIProvider, Map, MapCameraChangedEvent, Marker} from '@vis.gl/react-google-maps';
import './Maparea.css';
import EVchargepoints from './EVchargepoints';

interface Position {
  lat: number;
  lng: number;
}

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string;

const Maparea: React.FC = () => {
  const [pos, setPos] = useState<Position | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newPos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setPos(newPos);
        }
      );
    }
  }, []);

  // useEffect(() => {
  //   if (pos && primaryMapRef) {
  //     const bounds = new window.google.maps.LatLngBounds(
  //       new window.google.maps.LatLng(pos.lat, pos.lng),
  //       new window.google.maps.LatLng(pos.lat, pos.lng)
  //     );
  //     primaryMapRef.fitBounds(bounds);
  //   }
  // }, [pos, primaryMapRef]);

  // const handleBoundsChanged = () => { 
  //   if (primaryMapRef) { 
  //     console.log('Bounds changed:', primaryMapRef.getBounds()); 
  //   } 
  // };

  return (
    <APIProvider apiKey={apiKey} libraries={['places']} onLoad={() => console.log('Maps API has loaded.')}>
      {pos && (
        <Map
          // onBoundsChanged={handleBoundsChanged}
          defaultZoom={13}
          defaultCenter={{ lat: pos.lat, lng: pos.lng }}
          onCameraChanged={(ev: MapCameraChangedEvent) =>
            console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
          }
          // style={{ width: '100vw', height: '100vh' }}
        >
          <Marker position={{ lat: pos.lat, lng: pos.lng }} />
          <EVchargepoints />
          {/* Your other map components go here */}
        </Map>
      )}
    </APIProvider>
  );
};

export default Maparea;
