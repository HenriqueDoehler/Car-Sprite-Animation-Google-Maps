import { Wrapper } from "@googlemaps/react-wrapper";
import styles from "@/styles/Home.module.scss";

import MyMap from "../components/map/map";

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

export default function App() {
  return (
    <>
      <Wrapper apiKey={apiKey} version="beta" libraries={["marker"]}>
        <div className={styles.map}>
          <MyMap className={styles.map} />
        </div>
      </Wrapper>
    </>
  );
}
