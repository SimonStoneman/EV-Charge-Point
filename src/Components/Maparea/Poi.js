import React from 'react';

import { Marker, InfoWindow } from '@react-google-maps/api';

import food_icon from '../../assets/images/food_icon.png';

function Poi(props) {

    const [coordsArr, setCoordsArr] = React.useState([]);

    //State variable to toggle infowindow when charge point is selected
    const [selectPoi, setSelectPoi] = React.useState(null)

    let request = {
        query: "restaurant",
        fields: ["name", "geometry"]
    };

    let service = new window.google.maps.places.PlacesService(props.map);

    service.textSearch(request, (results, status) => {

        if (status === window.google.maps.places.PlacesServiceStatus.OK) {

            setCoordsArr([...results]);
        }
    });

    //Event to detect when the 'x' has been clicked and then changed the state of selectChargeP back to null
    const onClick_poi= React.useCallback((poi) => {
        setSelectPoi(poi);
    }, []);

    // Event to detect when the 'x' has been clicked and then changed the state of selectChargeP back to null
    const onCloseClick_infoWin = React.useCallback(() => {
        setSelectPoi(null);
    }, []);

    return (
        <>
            {/* {coordsArr !== [] && */}

            {coordsArr.map(function (poi, i) {

                return (

                    <Marker key={i} position={poi.geometry.location} icon={food_icon} onClick={() => onClick_poi(poi)}>


                    </Marker>

                );
            })}
            {selectPoi && (<InfoWindow position={selectPoi.geometry.location} onCloseClick={onCloseClick_infoWin}>
                
                <div>
                    <span>{selectPoi.name}</span>
                </div>

            </InfoWindow>)}
        </>
    )

}

export default Poi