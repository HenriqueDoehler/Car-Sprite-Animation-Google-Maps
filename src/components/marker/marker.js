import { useState } from "react";
import gpsData from "@/DataGps/frontend_data_gps.json";
import MarkerAdvanced from "@/components/marker/markerAdvanced";
import { Sprite } from "../carSpriteAnimation/threeSpriteAnimator";
import styles from "@/styles/Marker.module.scss";
import { useGlobalState } from "../../pages/_app";

export default function Marker({ map, position }) {
  const [data, setData] = useState(gpsData);
  const { rotationAngle } = useGlobalState();
  console.log(rotationAngle);

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
            <Sprite rotationAngle={rotationAngle} />
          </div>
        </MarkerAdvanced>
      ))}
    </>
  );
}
