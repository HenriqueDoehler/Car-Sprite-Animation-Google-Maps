import { Wrapper } from "@googlemaps/react-wrapper";
import styles from "@/styles/Home.module.scss";
import gpsData from "../DataGps/frontend_data_gps.json";
import { useGlobalState } from "./_app";
import MyMap from "@/components/map/map";

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

export default function App() {
  const { setSelectedCourseIndex } = useGlobalState();

  const handleCourseChange = (e) => {
    setSelectedCourseIndex(e.target.value);
  };

  return (
    <>
      <div>selecione</div>
      <select onChange={handleCourseChange}>
        {gpsData.courses.map((course, index) => (
          <option key={index} value={index}>
            {index + 1}
          </option>
        ))}
      </select>
      <Wrapper apiKey={apiKey} version="beta" libraries={["marker"]}>
        <div className={styles.map}>
          <MyMap className={styles.map} />
        </div>
      </Wrapper>
    </>
  );
}
