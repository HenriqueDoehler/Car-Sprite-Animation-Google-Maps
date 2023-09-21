import { useState } from "react";
import gpsData from "@/DataGps/frontend_data_gps.json";
import MarkerAdvanced from "@/components/marker/markerAdvanced";
import { Sprite } from "../carSpriteAnimation/threeSpriteAnimator";
import styles from "@/styles/Marker.module.scss";
import { useGlobalState } from "../../pages/_app";
import ThreeD from "../3DTruckModel";

export default function Marker({ map, position, clickThreeDModel }) {
  const [data, setData] = useState(gpsData);
  const { rotationAngle, showThreeDModel, set } = useGlobalState();

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
            {showThreeDModel ? (
              <ThreeD rotationAngle={rotationAngle} />
            ) : (
              <Sprite rotationAngle={rotationAngle} />
            )}
          </div>
        </MarkerAdvanced>
      ))}
    </>
  );
}
