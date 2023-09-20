import { Wrapper } from "@googlemaps/react-wrapper";
import styles from "@/styles/Home.module.scss";
import gpsData from "../DataGps/frontend_data_gps.json";
import { useGlobalState } from "./_app";
import MyMap from "@/components/map/map";
import { formatDate } from "@/utils/utils";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import ThreeD from "@/components/3DTruckModel";

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
      <div className={styles.header}>
        <div className={styles.title}>{t("selecione")}</div>
        <ThreeD />
        <button
          className={styles.languageButton}
          type="button"
          onClick={handleChangeLanguage}
        >
          {t("btnLan")}
          <img src={t("flag")} />
        </button>
      </div>
      <div className={styles.dropdownContainer}>
        <select className={styles.dropdown} onChange={handleCourseChange}>
          {gpsData.courses.map((course, index) => {
            const formattedDate = formatDate(course.start_at);
            return (
              <option key={index} value={index}>
                {`${t("rota")} ${index + 1} - ${formattedDate}`}
              </option>
            );
          })}
        </select>
      </div>
      <div className={styles.mapContainer}>
        <Wrapper apiKey={apiKey} version="beta" libraries={["marker"]}>
          <div className={styles.map}>
            <MyMap className={styles.map} />
          </div>
        </Wrapper>
      </div>
    </>
  );
}
