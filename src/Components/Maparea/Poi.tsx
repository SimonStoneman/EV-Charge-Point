import React, { useState, useCallback, useEffect } from 'react';
import { Marker, InfoWindow, useMap } from '@vis.gl/react-google-maps';

const food_icon = require('../../assets/images/food_icon.png');

interface PoiProps {
  location: google.maps.LatLng;
}

interface PlaceResult {
  name?: string;
  geometry: {
    location: google.maps.LatLng;
  };
  rating?: number;
}

const Poi: React.FC<PoiProps> = (props) => {
  const [coordsArr, setCoordsArr] = useState<PlaceResult[]>([]);
  const [coordsArrRdy, setCoordsArrRdy] = useState<boolean | null>(null);
  const [selectPoi, setSelectPoi] = useState<PlaceResult | null>(null);

  const mapRef = useMap();

  useEffect(() => {
    if (mapRef) {
      const request = {
        query: "restaurant",
        location: props.location,
        radius: 250.0,
        fields: ["name", "geometry", "rating"]
      };

      const service = new window.google.maps.places.PlacesService(mapRef);

      service.textSearch(request, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK && results) {
          const newCoordsArr: PlaceResult[] = [];
          for (let i = 0; i < results.length; i++) {
            if (results[i].geometry) {
              newCoordsArr.push(results[i] as PlaceResult);
            }
          }
          console.log("POI's found:", newCoordsArr); // Log the chargepoints to the console
          setCoordsArr(newCoordsArr);
          setCoordsArrRdy(true);
        }
      });
    }
  }, [mapRef, props.location]);

  const onClick_poi = useCallback((poi: PlaceResult) => {
    setSelectPoi(poi);
  }, []);

  const onCloseClick_infoWin = useCallback(() => {
    setSelectPoi(null);
  }, []);

  return (
    <>
      {coordsArrRdy && coordsArr.map((poi, i) => (
        <Marker key={i} position={poi.geometry.location} icon={food_icon} onClick={() => onClick_poi(poi)} />
      ))}

      {selectPoi && (
        <InfoWindow position={selectPoi.geometry.location} onCloseClick={onCloseClick_infoWin}>
          <div>
            <span>{selectPoi.name}</span>
            <p>User Rated: {selectPoi.rating}</p>
          </div>
        </InfoWindow>
      )}
    </>
  );
};

export default Poi;