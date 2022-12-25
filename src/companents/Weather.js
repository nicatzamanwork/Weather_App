import React from "react";

function Weather({ dataAll, city, setCity, loading }) {
  const handleClick = (city) => {
    setCity(city);
    console.log(city);
  };
  return (
    <>
      <div className="weather">
        <input
          placeholder="Spain"
          type={"text"}
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div className="weather_body">
        {loading ? (
          <div class="loader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        ) : (
          dataAll && (
            <div className="weather_menu">
              <h1> {dataAll?.location?.name}</h1>
              <img src={dataAll?.current?.condition?.icon} />
              <span>{dataAll?.current?.condition?.text}</span>
              <h1>{dataAll?.location?.lon}</h1>
              <h2>{dataAll?.current?.is_day}</h2>
            </div>
          )
        )}
      </div>
    </>
  );
}

export default Weather;
