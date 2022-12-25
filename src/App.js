import "./App.css";
import React, { useEffect, useState } from "react";

import Weather from "./companents/Weather";

function App() {
  const [dataAll, setAllData] = useState({});
  const [city, setCity] = useState("London");

  useEffect(() => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=27d0dcc40fc94464b4d101455222212&q=${
        city || "London"
      }&aqi=no`
    )
      .then((res) => res.json())
      .then((data) => {
        setAllData(data);
      });
  }, [city]);

  return (
    <>
      <Weather dataAll={dataAll} city={city} setCity={setCity} />
    </>
  );
}

export default App;
