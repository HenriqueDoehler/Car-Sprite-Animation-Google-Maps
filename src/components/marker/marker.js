import { useState } from "react";
import gpsData from "@/DataGps/frontend_data_gps.json";
import MarkerAdvanced from "@/components/marker/markerAdvanced";
import { Sprite } from "../carSpriteAnimation/threeSpriteAnimator";
import styles from "@/styles/Marker.module.scss";

export default function Marker({ map, position }) {
  const [data, setData] = useState(gpsData);

  return (
    <>
      {Object.entries(data).map(([key, gpsData]) => (
        <MarkerAdvanced
          className="markerAdv"
          key={key}
          map={map}
          position={position}
        >
          <div className={styles.containerSprite}>
            <Sprite />
          </div>
        </MarkerAdvanced>
      ))}
    </>
  );
}
