import React, { useState, useEffect, useCallback } from "react";
import { FaSearch } from "react-icons/fa";
import WeatherInfo from "./mini-components/WeatherInfo";
import useWeatherInfo from "../../hooks/useWeatherInfo";
import { useWeatherDescContext } from "../../context/WeatherDescContext";
function Search() {
  const { setSearchWeatherDesc } = useWeatherDescContext();
  const [value, setValue] = useState("");
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [report, setReport] = useState({
    name: "",
    country: "",
    desc: "",
    icon: "",
    temp: "",
    windspeed: "",
    humidity: "",
    clouds: "",
    sunrise: "",
    sunset: "",
    pressure: "",
  });
  let weatherData;

  function inputHandler(e) {
    setValue(e.target.value);
  }
  const fetchInfo = (e) => {
    e.preventDefault();
    if (value === "") {
      alert("Write Something");
    } else {
      setCity(value);
    }
  };
  weatherData = useWeatherInfo(city);

  useEffect(() => {
    if (weatherData) {
      if (weatherData.cod == "200") {
        const sunriseTime = weatherData.sys?.sunrise
          ? new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()
          : "N/A";
        const sunsetTime = weatherData.sys?.sunset
          ? new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()
          : "N/A";
          setLoaded(true);
        setReport({
          name: weatherData?.name,
          country: `https://flagcdn.com/144x108/${weatherData?.sys?.country.toLowerCase()}.png`,
          desc: weatherData?.weather?.[0]?.main,
          icon: `http://openweathermap.org/img/w/${weatherData?.weather?.[0]?.icon}.png`,
          temp: `${weatherData?.main?.temp} °C`,
          windspeed: `${weatherData?.wind?.speed} m/s`,
          humidity: `${weatherData?.main?.humidity}%`,
          clouds: `${weatherData?.clouds?.all}%`,
          sunrise: sunriseTime,
          sunset: sunsetTime,
          pressure: `${weatherData?.main?.pressure} hPa`,
        });
      } else {
        setLoaded(false);
        alert("Couldnt find the Location, Please try again");
      }
      if (report.temp ) {
        setLoaded(true);
      }
    }
    setSearchWeatherDesc(weatherData?.weather?.[0]?.main);
  }, [weatherData]);

  return (
    <div className="">
      <form
        onSubmit={fetchInfo}
        className="flex justify-center items-center scale-90 my-2 "
      >
        <div className=" med-q flex item-center justify-center w-screen gap-6  ">
          <input
            value={value}
            onChange={inputHandler}
            placeholder="Enter City Name"
            className="outline-white rounded-full text-white bg-white/30 backdrop-blur-sm text-xl py-3 px-6 h-12 placeholder:text-white/65 sm:w-[35%] "
            type="text"
          />
          <button
            type="submit"
            className="text-white hover:bg-white hover:text-black transition-all duration-600 ease-linear bg-white/50 backdrop-blur-sm scale-100 active:scale-95 rounded-full p-3 h-12 w-12 flex items-center justify-center"
          >
            <FaSearch />
          </button>
        </div>
      </form>

      {!loaded ? (
        <div className="w-screen h-[23rem] flex items-center justify-center text-center text-4xl sm:text-5xl font-bold text-black/30 sm:black-white/60">
          <h1 className="">Type the city in search to get weather edetails</h1>
        </div>
      ) : null}
      {loaded ? <WeatherInfo report={report} /> : null}
    </div>
  );
}

export default Search;
