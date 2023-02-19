import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '400px'
  };
  
  const center = {
    lat: -3.745,
    lng: -38.523
  };
  
function Maparea() {

        //call useJsApiLoader with ID & googleMapsApiKey properties an save the state to isLoaded to check if loader worked
        const { isLoaded } = useJsApiLoader({
          id: 'google-map-script',
          googleMapsApiKey: "AIzaSyCekJ-T90WDgNSJrwkYvkchwSAmhq7nq8w"
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
                        const pos = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude,
                        };
            
                        const bounds = new window.google.maps.LatLngBounds(pos);
                        //call the fitBounds method of map object to the co-ords from pos
                        map.fitBounds(bounds); 
                        map.setZoom(16);
                    
                        //Set the map state from null to true;
                        console.log(map);
                        setMap(map);
                    },
                    () => {
                        // handleLocationError(true, infoWindow, map.getCenter());
                    }
                );
            }
            // } else {
            //     // Browser doesn't support Geolocation
            //     handleLocationError(false, infoWindow, map.getCenter());
            // };
        }, []);
      
        //Define the onUnmount property as the return of callback that reset map to null via setMap
        const onUnmount = React.useCallback(function callback(map) {
          setMap(null)
        }, []);

        return isLoaded ? (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={5}
              onLoad={onLoad}
              onUnmount={onUnmount}
            >
              { /* Child components, such as markers, info windows, etc. */ }
              
              <></>
            </GoogleMap>
        ) : <></>
};

export default Maparea;