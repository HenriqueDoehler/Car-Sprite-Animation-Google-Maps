import { useState } from "react";
import gpsData from "@/DataGps/frontend_data_gps.json";
import MarkerAdvanced from "@/components/marker/markerAdvanced";
import SpriteAnimation from "@/components/carSpriteAnimation/spriteAnimation";

export default function Marker({ map, position }) {
  const [data, setData] = useState(gpsData);
  console.log("Updating marker position to: ", position);

  return (
    <>
      {Object.entries(data).map(([key, gpsData]) => (
        <MarkerAdvanced
          className="markerAdv"
          key={key}
          map={map}
          position={position}
        >
          <SpriteAnimation />
        </MarkerAdvanced>
      ))}
    </>
  );
}
