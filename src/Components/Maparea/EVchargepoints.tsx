import React, { useState, useCallback, useEffect } from 'react';
import { Marker, InfoWindow, useMap, useApiIsLoaded } from '@vis.gl/react-google-maps';
import Poi from './Poi';

const charge_icon = require('../../assets/images/charge_icon.png');

interface EVchargepointsProps {
}

interface PlaceResult {
  name?: string;
  location: google.maps.LatLng;
  photos?: google.maps.places.PlacePhoto[];
  evOptions?: {
    minimumChargingRateKw: number;
    connectorTypes: string[];
  };
  evChargeOptions?: {
    connectorCount: number;
    connectorAggregation: {
      type: string;
      maxChargeRateKw: number;
      count: number;
      availableCount: number;
    }[];
  };
  streetViewUrl?: string; // Add this property
}

const EVchargepoints: React.FC<EVchargepointsProps> = () => {
  const [chargePointDataArr, setChargePointDataArr] = useState<PlaceResult[]>([]);
  // const [chargePointDataArrRdy, setChargePointDataArrRdy] = useState<boolean | null>(null);
  const [selectChargeP, setSelectChargeP] = useState<PlaceResult | null>(null);

  const mapRef = useMap();
  const apiIsLoaded = useApiIsLoaded();

  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string;

  // console.log(`mapref is ${mapRef}`);
  // console.log(`apiIsLoaded is ${apiIsLoaded}`);

  useEffect(() => { 
    if (mapRef && apiIsLoaded) { 
      // console.log("in EVChargepoints, mapRef not Null"); 
      const fetchPlaces = async () => { 
        const location = mapRef.getCenter(); 
        if (location) {
          const response = await fetch(`https://places.googleapis.com/v1/places:searchText`, { 
            method: 'POST', 
            headers: { 
              'Content-Type': 'application/json', 
              'X-Goog-Api-Key': apiKey, 
              'X-Goog-FieldMask': 'places.displayName,places.location,places.photos,places.evChargeOptions' 
            }, 
            body: JSON.stringify({ 
              textQuery: "charging station", 
              includedType: "electric_vehicle_charging_station",
              locationBias: {
                circle: { 
                  center: {
                    latitude: location.lat(), 
                    longitude: location.lng()
                  },
                  radius: 500.0 // 2.5 km radius
                },
              }, 
              evOptions: { 
                minimumChargingRateKw: 50, // Minimum charging rate in kilowatts 
                connectorTypes: ["EV_CONNECTOR_TYPE_TESLA", "EV_CONNECTOR_TYPE_CCS_COMBO_2", "EV_CONNECTOR_TYPE_CCS_COMBO_1", "EV_CONNECTOR_TYPE_CHADEMO", "EV_CONNECTOR_TYPE_TYPE_2", "EV_CONNECTOR_TYPE_J1772"] // Preferred EV connector types 
              } 
            }) 
          }); 
          const data = await response.json(); 
          if (data.places) { 
            const newCoordsArr: PlaceResult[] = data.places.map(async (place: any) => {
              const location = { lat: place.location.latitude, lng: place.location.longitude };
              const streetViewUrl = `https://maps.googleapis.com/maps/api/streetview?size=400x400&location=${location.lat},${location.lng}&key=${apiKey}`;

              return { 
                name: place.displayName.text, 
                location: new google.maps.LatLng(location.lat, location.lng), 
                evOptions: place.evOptions, 
                evChargeOptions: place.evChargeOptions,
                streetViewUrl, // Add the Street View URL
              };
            });

            const resolvedCoordsArr = await Promise.all(newCoordsArr);
            console.log('Chargepoints found:', resolvedCoordsArr); // Log the chargepoints to the console 
            setChargePointDataArr(resolvedCoordsArr); 
            // setChargePointDataArrRdy(true); 
            
          } else { 
            console.log(`Text search via Google Places API for the request found no results`); 
            // setChargePointDataArrRdy(false); 
          }
        } else { 
          console.log("Location is undefined"); 
        } 
      }; 
      fetchPlaces(); 
    } 
  }, [mapRef, apiIsLoaded, apiKey]);

  const onClick_chargeP = useCallback((chargepoint: PlaceResult) => {
    setSelectChargeP(chargepoint);
    // console.log(`Chargepoint data is: ${JSON.stringify(chargepoint)}`)
    if (chargepoint.evChargeOptions){
      console.log(`Chargepoint data is: ${JSON.stringify(chargepoint.evChargeOptions.connectorAggregation)}`)
    }  
  }, []);

  const onCloseClick_infoWin = useCallback(() => {
    setSelectChargeP(null);
  }, []);

  // Function to determine the background color class 
  const getBackgroundColorClass = (availableCount: number, count: number) => { 
    if (availableCount === 0) { 
      return 'bg-red-500'; 
    } else if (availableCount === count) { 
      return 'bg-green-500'; 
    } else if (availableCount <= count / 2) { 
      return 'bg-yellow-500'; 
    } else { 
      return 'bg-gray-300'; // Default background color if none of the conditions are met 
  } };



  return (
    <>
      {chargePointDataArr && chargePointDataArr.map((chargepoint, i) => {
        const lat = chargepoint.location.lat();
        const lng = chargepoint.location.lng();
        // console.log(`Chargepoint ${i}: lat=${lat}, lng=${lng}`);
        if (lat && lng) {
          return (
            <Marker
              key={i}
              position={{ lat, lng }}
              icon={charge_icon}
              onClick={() => onClick_chargeP(chargepoint)}
            />
          );
        } else {
          console.log(`Invalid coordinates for chargepoint ${i}: lat=${lat}, lng=${lng}`);
          return null;
        }
      })}

      {selectChargeP && (
        <InfoWindow position={selectChargeP.location} onCloseClick={onCloseClick_infoWin}>
          <div className="flex flex-col items-center p-6 rounded-xl shadow-lg" style={{ width: '300px', fontFamily: 'Arial, sans-serif' }}>
            <h2 className="font-bold">{selectChargeP.name}</h2>
            {selectChargeP.streetViewUrl && (
              <div className="shrink-0">
                <img className="size-52" src={selectChargeP.streetViewUrl} alt={selectChargeP.name}/>
              </div>
            )}
            <p>276 Upper St, London N1 2TZ</p> {/* Example address */}
            <div>
              {/* {selectChargeP.evOptions && (
                <>
                  <h3 style={{ margin: '10px 0', fontSize: '16px', color: '#333' }}>Available Chargers:</h3>
                  <ul style={{ paddingLeft: '20px' }}>
                    {selectChargeP.evOptions.connectorTypes.map((type, index) => (
                      <li key={index} style={{ margin: '5px 0' }}>{type}</li>
                    ))}
                  </ul>
                </>
              )} */}
              {selectChargeP.evChargeOptions && (
                <>
                  <hr></hr>
                  <section className="rounded-lg">
                    <h4>Information:</h4>
                    <hr></hr>
                    {selectChargeP.evChargeOptions.connectorAggregation ? (
                    <>
                      {selectChargeP.evChargeOptions.connectorAggregation.map((aggregation, index) => {
                        let bgColorClass = "bg-white"
                        if (aggregation.availableCount) {
                          bgColorClass = getBackgroundColorClass(aggregation.availableCount, aggregation.count);
                        } 
                        return (
                          <article key={index} className="flex justify-stretch gap-x-2">
                            <p className="m-0">
                              <h5 className="min-w-28 shrink">Type</h5> 
                              <p className="m-0">{aggregation.type.replace("CONNECTOR_TYPE_", "").replace("EV_", "")}</p>
                            </p>
                            <p className="m-0">
                              <h5 className="min-w-24 shrink">Max Rate</h5>
                              <p className="m-0">{aggregation.maxChargeRateKw} kW</p>
                            </p> 
                            <p className={`m-0 ${bgColorClass} p-2 rounded`}>
                              <h5 className="min-w-28 shrink">Availability</h5>
                              <p className="m-0">{aggregation.availableCount ? (`${aggregation.availableCount}/${aggregation.count}`) : (`${aggregation.count}/${aggregation.count}`)}</p>
                            </p>
                          </article>
                        );
                      })}
                    </>
                    ) : (
                      <p>No connector aggregations available.</p>
                    )}
                  </section>
                </>
              )}
            </div>
            <p>Operating Hours: 24 hours</p> {/* Example hours */}
            <div>
              <p><a href="https://find.shell.com" target="_blank" rel="noopener noreferrer" style={{ color: '#007BFF' }}>Website</a></p>
              <p>Phone: 020 7288 0453</p>
              <p>Rating: 5.0 stars based on 1 review</p>
            </div>
          </div>
        </InfoWindow>
      )}

      {selectChargeP && <Poi location={selectChargeP.location} />}
    </>
  );
};

export default EVchargepoints;