import React, { useEffect, useRef, useState } from 'react';

import {
  setKey,
  setDefaults,
  setLanguage,
  setRegion,
  fromAddress,
  fromLatLng,
  fromPlaceId,
  setLocationType,
  geocode,
  RequestType,
} from "react-geocode";

export default function Gmap (info){
  const GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  setDefaults({
    key:  GOOGLE_MAP_API_KEY , // Your API key here.
    language: "en", // Default language for responses.
    region: "nl", // Default region for responses.
  });

  const googleMapRef = useRef(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    const googleMap = initGoogleMap();
    setMap(googleMap);
  }, []);

  useEffect(() => {
    if (!map) return;

    var directionsService = new window.google.maps.DirectionsService();
    var directionsRenderer = new window.google.maps.DirectionsRenderer();
if(info.departure==String && info.arriving==String) {fromAddress( info.departure)
  .then(({ results }) => {
    const { lat, lng } = results[0].geometry.location;
    console.log(lat, lng);
    var haight = new window.google.maps.LatLng(lat, lng);
 
  
  
  fromAddress(info.arriving)
  .then(({ results }) => {
    const { lat, lng } = results[0].geometry.location;
    console.log(results);
    var oceanBeach = new window.google.maps.LatLng(lat, lng);
    var request = {
      origin: haight,
      destination: oceanBeach,
      travelMode: 'DRIVING'
    };
    directionsService.route(request, function (response, status) {
      if (status == 'OK') {
        directionsRenderer.setDirections(response);
        console.log(response);
        directionsRenderer.setMap(map);
      }
    });


  })
  .catch(console.error);

  
})
.catch(console.error);}
else {
  return
}
    
  }, [map])

  

  const initGoogleMap = () => {
    return new window.google.maps.Map(googleMapRef.current, {
      center: new window.google.maps.LatLng(51.9244, 4.4777),
      zoom: 10
    });
  }

  return <div
    ref={googleMapRef}
    style={{ width: 600, height: 500 }}
  />



}