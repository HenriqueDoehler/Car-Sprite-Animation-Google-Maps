import "@/styles/globals.scss";

import React, { createContext, useContext, useState } from "react";

const GlobalStateContext = createContext();

export function useGlobalState() {
  return useContext(GlobalStateContext);
}

export function GlobalStateProvider({ children }) {
  const [selectedCourseIndex, setSelectedCourseIndex] = useState(0);
  const [markerPosition, setMarkerPosition] = useState(null);
  const [iconRotation, setIconRotation] = useState(0);
  const [currentRoute, setCurrentRoute] = useState([]);
  const [mapCenter, setMapCenter] = useState(null);
  const [firstGpsPoint, setFirstGpsPoint] = useState();

  return (
    <GlobalStateContext.Provider
      value={{
        selectedCourseIndex,
        setSelectedCourseIndex,
        markerPosition,
        setMarkerPosition,
        iconRotation,
        setIconRotation,
        currentRoute,
        setCurrentRoute,
        mapCenter,
        setMapCenter,
        firstGpsPoint,
        setFirstGpsPoint,
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
    </GlobalStateProvider>
  );
}

export default MyApp;
