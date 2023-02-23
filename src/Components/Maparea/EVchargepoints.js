import React from 'react';
import { Marker, InfoWindow } from '@react-google-maps/api';
import Poi from './Poi';


import charge_icon from '../../assets/images/charge_icon.png';


var coordsArr = [];

function EVchargepoints(props) {

    const [coordsArrRdy, setCoordsArrRdy] = React.useState(null);

    //State variable to toggle infowindow when charge point is selected
    const [selectChargeP, setSelectChargeP] = React.useState(null)

    // const [enablePoi, setEnablePoi] = React.useState(null);

    let request = {
        query: "electric vehicle charging station",
        fields: ["name", "geometry"]
    };

    let service = new window.google.maps.places.PlacesService(props.map);

    service.textSearch(request, (results, status) => {

        if (status === window.google.maps.places.PlacesServiceStatus.OK) {

            // setCoordsArr([...results]);
            // console.log(results);
            for (var i = 0; i < results.length; i++) {
                coordsArr.push(results[i]);
                // console.log(`item ${i} is: ${JSON.stringify(results[i])}`);
            }

            // console.log(`coords contains: ${JSON.stringify(coords)}`);
            setCoordsArrRdy(true);
        }
    });

    //Event to detect when the 'x' has been clicked and then changed the state of selectChargeP back to null
    const onClick_chargeP = React.useCallback((chargepoint) => {
        setSelectChargeP(chargepoint);
        // setEnablePoi(true)
    }, []);

    // Event to detect when the 'x' has been clicked and then changed the state of selectChargeP back to null
    const onCloseClick_infoWin = React.useCallback(() => {
        setSelectChargeP(null);
    }, []);

    return (
        <>
            {/* {coordsArr !== [] && */}

            {/* {coordsArr.map(function (chargepoint, i) { */}
            {coordsArrRdy && coordsArr.map(function (chargepoint, i) {

                // console.log(`in map of coords, chargepoint is: ${JSON.stringify(chargepoint)}`);

                return (

                    <Marker key={i} position={chargepoint.geometry.location} icon={charge_icon} onClick={() => onClick_chargeP(chargepoint)}>


                    </Marker>

                );
            })}
            {selectChargeP && (<InfoWindow position={selectChargeP.geometry.location} onCloseClick={onCloseClick_infoWin}>
                
                <div>
                    <span>{selectChargeP.name}</span>
                </div>

            </InfoWindow>)}
            {selectChargeP && <Poi map={props.map} location={selectChargeP.geometry.location}/>}
        </>
    )

}

export default EVchargepoints