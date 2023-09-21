import "@/styles/globals.scss";
import "@/i18n/";
import { Analytics } from "@vercel/analytics/react";

import React, { createContext, useContext, useState } from "react";

const GlobalStateContext = createContext();

export function useGlobalState() {
  return useContext(GlobalStateContext);
}

export function GlobalStateProvider({ children }) {
  const [selectedCourseIndex, setSelectedCourseIndex] = useState(0);
  const [firstGpsPoint, setFirstGpsPoint] = useState();
  const [rotationAngle, setRotationAngle] = useState(0);
  const [showThreeDModel, setShowThreeDModel] = useState(false);

  return (
    <GlobalStateContext.Provider
      value={{
        selectedCourseIndex,
        setSelectedCourseIndex,
        firstGpsPoint,
        setFirstGpsPoint,
        rotationAngle,
        setRotationAngle,
        showThreeDModel,
        setShowThreeDModel,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
}

function MyApp({ Component, pageProps }) {
  return (
    <GlobalStateProvider>
      <Component {...pageProps} />
      <Analytics />
    </GlobalStateProvider>
  );
}

export default MyApp;
