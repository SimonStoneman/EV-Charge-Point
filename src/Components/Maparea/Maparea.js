import React from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import EVchargepoints from './EVchargepoints'
import './Maparea.css'

const containerStyle = {
  height: '400px',
  width: '500px',
  maxWidth: '100%',
  maxHeight: '45vh'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

//Defining the libraries required from google maps on loading (useJsApiLoader). Recommended to use this, as arrays & objects used a literals look to react as a new item and can cause re-rendering
const libraries = ["places"];

const options = {
  disableDefaultUI: true,
  zoomControl: true,
}

var pos;
var bounds;

function Maparea() {

  //call useJsApiLoader with ID & googleMapsApiKey properties an save the state to isLoaded to check if loader worked. Using process.env to load hidden API key in env.local file. Adding additional functionalities via libraries prop to add 'place'
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  //Define stateful 'map' value, with inital value of null
  const [map, setMap] = React.useState(null);



  //use the react useCallback to prevent the called function (callback) from recreating unless necessary
  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!

    if (navigator.geolocation) {
      //Call the geolocation API of the browser window.navigator object, using the getCurrentPosition method to obtain from the users device the current location co-ords
      navigator.geolocation.getCurrentPosition(
        (position) => {
          pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          bounds = new window.google.maps.LatLngBounds(pos);
          //call the fitBounds method of map object to the co-ords from pos
          map.fitBounds(bounds);
          map.setZoom(14);

          // //Set the map state from null to true;GoogleMap
          // console.log(map);
          setMap(map);
        },
        () => {
          // handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    }
    // } else {
    //     // Browser doesn't support Geolocation
    // handleLocationError(false, infoWindow, map.getCenter());
    // };



  }, []);

  //Define the onUnmount property as the return of callback that reset map to null via setMap
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, []);

  //Define the onClick action of InfoWindows

  const [selectedinfows, setSelectedInfoWS] = React.useState(null);

  const onClickInfoW = React.useCallback(function callback(map) {
  }, []);

  return isLoaded ? (
    <div className="landing-content">


      <div className="map-wrapper">
        <h1 className="mapHeader">Charge Mapz <span role="img" aria-label="lightning">⚡</span></h1>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={pos}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={options}
        >
          { /* Child components, such as markers, info windows, etc. */}

          {/* Marker current users position */}
          <Marker position={pos}></Marker>
          {map && <EVchargepoints map={map} />}
        </GoogleMap>
      </div>
    </div>
  ) : <></>
};

export default Maparea;