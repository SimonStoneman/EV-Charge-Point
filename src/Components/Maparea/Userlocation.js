import React from 'react';
import ReactDOM from 'react-dom';

function Userlocation () {

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
            },
            () => {
                // handleLocationError(true, infoWindow, map.getCenter());
            }
        );
    }


    return (

    )
}

export default Userlocation;