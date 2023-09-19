import { useRef, useEffect, useState } from "react";
import styles from "@/styles/Home.module.scss";

const mapId = process.env.NEXT_PUBLIC_MAP_ID;

export default function MyMap() {
  const [map, setMap] = useState();
  const ref = useRef();

  const mapOptions = {
    mapId: mapId,
    center: { lat: -23.963214, lng: -46.28054 },
    zoom: 13,
    disableDefaultUI: true,
  };

  useEffect(() => {
    setMap(new window.google.maps.Map(ref.current, mapOptions));
  }, []);

  return (
    <>
      <div ref={ref} id="map" className={styles.map} />
    </>
  );
}
