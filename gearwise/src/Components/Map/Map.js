import React, { useState, useEffect, useRef } from "react";
import {
  GoogleMap,
  LoadScript,
  MarkerF,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import abcImage from "../../img/service-station.png"; // Adjust the path as needed

const containerStyle = {
  width: "100%",
  height: "900px",
};

const center = {
  lat: 7.835652402649626,
  lng: 80.71226067573909,
};

const serviceStations = [
  { lat: 7.8624736389731575, lng: 80.64346168096239 },
  { lat: 7.759494532598141, lng: 80.56815383473314 },
];

const apiKey = "AIzaSyCfV5qd-ElYKFRJPkh7wdgC9kZ4QdqOJTw";

const Map = () => {
  const [directionsResponses, setDirectionsResponses] = useState([]);
  const [distances, setDistances] = useState([]);
  const [shortestIndex, setShortestIndex] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [error, setError] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const fetchUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setCurrentLocation({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          (err) => {
            console.error("Error getting location:", err);
            setError("Error getting location.");
          },
          { enableHighAccuracy: true }
        );
      } else {
        setError("Geolocation is not supported by this browser.");
      }
    };

    fetchUserLocation();
  }, []);

  useEffect(() => {
    if (currentLocation) {
      const fetchDirections = async () => {
        if (!window.google || !window.google.maps) {
          console.error("Google Maps JavaScript API is not loaded.");
          return;
        }
        try {
          const directionsService = new window.google.maps.DirectionsService();
          const distanceService =
            new window.google.maps.DistanceMatrixService();

          const distanceResults = await new Promise((resolve, reject) => {
            distanceService.getDistanceMatrix(
              {
                origins: [currentLocation],
                destinations: serviceStations,
                travelMode: window.google.maps.TravelMode.DRIVING,
              },
              (result, status) => {
                if (status === window.google.maps.DistanceMatrixStatus.OK) {
                  resolve(result);
                } else {
                  reject(status);
                }
              }
            );
          });

          const distancesArray = distanceResults.rows[0].elements.map(
            (element) => element.distance.text
          );
          const distancesValues = distanceResults.rows[0].elements.map(
            (element) => element.distance.value
          );
          setDistances(distancesArray);

          const minDistanceIndex = distancesValues.indexOf(
            Math.min(...distancesValues)
          );
          setShortestIndex(minDistanceIndex);
          console.log("Shortest Distance:", distancesArray[minDistanceIndex]);

          toast.info(
            `Shortest path is to service station ${minDistanceIndex + 1}: ${
              distancesArray[minDistanceIndex]
            }`,
            {
              autoClose: false,
            }
          );

          const directionsPromises = serviceStations.map(
            (station) =>
              new Promise((resolve, reject) => {
                directionsService.route(
                  {
                    origin: currentLocation,
                    destination: station,
                    travelMode: window.google.maps.TravelMode.DRIVING,
                  },
                  (result, status) => {
                    if (status === window.google.maps.DirectionsStatus.OK) {
                      resolve(result);
                    } else {
                      reject(status);
                    }
                  }
                );
              })
          );

          const directionsResults = await Promise.all(directionsPromises);
          setDirectionsResponses(directionsResults);
        } catch (error) {
          console.error("Error fetching directions or distances:", error);
          setError(error);
        }
      };

      fetchDirections();
    }
  }, [currentLocation]);

  return (
    <>
      <ToastContainer />
      <LoadScript
        googleMapsApiKey={apiKey}
        libraries={["places", "geometry"]}
        onError={(e) => {
          console.error("Error loading Google Maps script:", e);
        }}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={7}
          onLoad={(map) => (mapRef.current = map)}
        >
          {currentLocation && <MarkerF position={currentLocation} />}
          {serviceStations.map((station, index) => (
            <MarkerF
              key={index}
              position={station}
              // icon={{
              //   url: abcImage,
              //   scaledSize: new window.google.maps.Size(50, 50), // Adjust size as needed
              // }}
            />
          ))}
          {directionsResponses.map((directions, index) => (
            <DirectionsRenderer
              key={index}
              directions={directions}
              options={{
                polylineOptions: {
                  strokeColor: index === shortestIndex ? "blue" : "#4285F4",
                  strokeOpacity: 0.8,
                  strokeWeight: 6,
                },
              }}
            />
          ))}
          {error && (
            <div
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                background: "white",
                padding: "10px",
                zIndex: 1,
              }}
            >
              Error loading directions or distances: {error.message}
            </div>
          )}
        </GoogleMap>
      </LoadScript>
    </>
  );
};

export default Map;
