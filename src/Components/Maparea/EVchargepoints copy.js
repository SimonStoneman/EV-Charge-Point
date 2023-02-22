import {Marker, InfoWindow } from '@react-google-maps/api';
import React from 'react';


function EVchargepoints (props) {

    //State variable to notify data available and render charge point markers on map/dom
    const [coordsArr, setCoordsArr] = React.useState([]);

    //State variable to toggle infowindow when charge point is selected
    const [selectChargeP, setSelectChargeP] = React.useState(null)

    let request = {
            query: "electric vehicle charging station",
            fields: ["name", "geometry"]
        };
        
    let service = new window.google.maps.places.PlacesService(props.map);

    console.log ('in EVchargepoints function');

    service.textSearch(request, (results, status) => {

        if (status === window.google.maps.places.PlacesServiceStatus.OK) {

            setCoordsArr([...results]);

        }
    });

      //Event to detect when the 'x' has been clicked and then changed the state of selectChargeP back to null
      const onClick_chargeP = React.useCallback((chargepoint) => {
        setSelectChargeP(chargepoint);
    }, []);

    //Event to detect when the 'x' has been clicked and then changed the state of selectChargeP back to null
    const onCloseClick_infoWin = React.useCallback(() => {
        setSelectChargeP(null);
    }, []);


    return (
        <>
            {coordsArr !== [] && coordsArr.map((chargepoint, i) => {

                return (
                
                <Marker key={i} position={chargepoint.geometry.location} onClick={onClick_chargeP(chargepoint)}></Marker>
            
                );
            })}

            {selectChargeP ? (<InfoWindow position={selectChargeP.geometry.location} onCloseClick={onCloseClick_infoWin}>
                
                    <div>
                        <span>{selectChargeP.name}</span>
                    </div>

            </InfoWindow>) : null}
        </>
    )

}

export default EVchargepoints