import { Wrapper } from "@googlemaps/react-wrapper";
import styles from "@/styles/Home.module.scss";
import gpsData from "../DataGps/frontend_data_gps.json";
import { useGlobalState } from "./_app";
import MyMap from "@/components/map/map";
import { formatDate } from "@/utils/utils";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

export default function App() {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();

  const { setSelectedCourseIndex } = useGlobalState();
  const [currentLanguage, setCurrentLanguage] = useState(language);
  const handleCourseChange = (e) => {
    setSelectedCourseIndex(e.target.value);
  };
  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "pt" : "en";
    changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

  return (
    <>
      <div>{t("selecione")}</div>
      <button type="button" onClick={handleChangeLanguage}>
        change Language
      </button>
      <select onChange={handleCourseChange}>
        {gpsData.courses.map((course, index) => {
          const formattedDate = formatDate(course.start_at);
          return (
            <option key={index} value={index}>
              {`Rota ${index + 1} - ${formattedDate}`}
            </option>
          );
        })}
      </select>
      <Wrapper apiKey={apiKey} version="beta" libraries={["marker"]}>
        <div className={styles.map}>
          <MyMap className={styles.map} />
        </div>
      </Wrapper>
    </>
  );
}
