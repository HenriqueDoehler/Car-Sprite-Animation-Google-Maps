import { useRef, useEffect, useState } from "react";
import styles from "@/styles/Home.module.scss";
import gpsData from "@/DataGps/frontend_data_gps.json";
import { useGlobalState } from "@/pages/_app";
import Marker from "../marker/marker";

const mapId = process.env.NEXT_PUBLIC_MAP_ID;

export default function MyMap() {
  const ref = useRef();
  const { firstGpsPoint, selectedCourseIndex, setRotationAngle } =
    useGlobalState();
  const [currentCoords, setCurrentCoords] = useState(firstGpsPoint);
  const [currentCoordsIndex, setCurrentCoordsIndex] = useState(0);
  const [polylineCoordinates, setPolylineCoordinates] = useState([]);
  const [map, setMap] = useState();

  const mapOptions = {
    mapId: mapId,
    center: firstGpsPoint
      ? { lat: firstGpsPoint.latitude, lng: firstGpsPoint.longitude }
      : { lat: -23.963214, lng: -46.28054 },
    zoom: 13,
    disableDefaultUI: true,
  };

  useEffect(() => {
    setCurrentCoordsIndex(0);
  }, [selectedCourseIndex]);

  useEffect(() => {
    if (!map) {
      setMap(new window.google.maps.Map(ref.current, mapOptions));
    } else {
      const Path = new window.google.maps.Polyline({
        path: polylineCoordinates,
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });

      Path.setMap(map);
    }
  }, [map, polylineCoordinates]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (
        map &&
        gpsData.courses[selectedCourseIndex].gps.length > currentCoordsIndex
      ) {
        const coords =
          gpsData.courses[selectedCourseIndex].gps[currentCoordsIndex];
        setCurrentCoords({
          lat: coords.latitude,
          lng: coords.longitude,
        });
        map.setCenter({ lat: coords.latitude, lng: coords.longitude });
        setCurrentCoordsIndex((prevIndex) => prevIndex + 1);
        setPolylineCoordinates((prevCoords) => [
          ...prevCoords,
          { lat: coords.latitude, lng: coords.longitude },
        ]);
        setRotationAngle(coords.direction);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [map, selectedCourseIndex, currentCoordsIndex, setRotationAngle]);

  return (
    <>
      <div ref={ref} id="map" className={styles.map} />
      {map && currentCoords && <Marker map={map} position={currentCoords} />}
    </>
  );
}
