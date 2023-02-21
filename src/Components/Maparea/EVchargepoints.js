import {Marker } from '@react-google-maps/api';
import React from 'react';

function EVchargepoints (props) {

    const [coordsArr, setCoordsArr] = React.useState([]);

    let request = {
        query: "electric vehicle charging station",
        fields: ["name", "geometry"]
      };
  
      // console.log(`Using map in PlacesService, map is: ${map}`);
      let service = new window.google.maps.places.PlacesService(props.map);
      // console.log(`after window.google.maps.places.PlacesService`)
  
      service.findPlaceFromQuery(request, (results, status) => {
        // console.log (`executing findPlaceFromQuery`);
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {


          // for (var i = 0; i < results.length; i++) {
          //   coordsArr.push(results[i]);
          //   console.log(`result ${i} is: ${JSON.stringify(results[i])}`)
          // }

          setCoordsArr([...results]);

  
          console.log(`coordsArr= ${JSON.stringify(coordsArr)}`);
        }
      });

    return(
        <>
            {/* {coordsArr !== [] && */}

            {coordsArr.map(function(results, i) {

                console.log(`Results items through map metho: ${results} and key is: ${i}`)

                return (
                
                <Marker key={i} position={results.geometry.location} onClick={() => {
                    
                }}>
            

                    {/* <InfoWindow position={results.geometry.location} options={{ maxWidth: 300 }}>
                    
                        <span>{results.name}</span>
                    
                    </InfoWindow> */}
                
                </Marker>
            
                );
            })}
        </>
    )

}

export default EVchargepoints