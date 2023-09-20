import "@/styles/globals.scss";

import React, { createContext, useContext, useState } from "react";

const GlobalStateContext = createContext();

export function useGlobalState() {
  return useContext(GlobalStateContext);
}

export function GlobalStateProvider({ children }) {
  const [selectedCourseIndex, setSelectedCourseIndex] = useState(0);
  const [firstGpsPoint, setFirstGpsPoint] = useState();
  const [rotationAngle, setRotationAngle] = useState(0);

  return (
    <GlobalStateContext.Provider
      value={{
        selectedCourseIndex,
        setSelectedCourseIndex,
        firstGpsPoint,
        setFirstGpsPoint,
        rotationAngle,
        setRotationAngle,
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
