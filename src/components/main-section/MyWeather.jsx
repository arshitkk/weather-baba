import React, { useEffect, useState } from "react";
import useYourWeatherInfo from "../../hooks/useYourWeatherInfo";
import WeatherInfo from "./mini-components/WeatherInfo";
import { useWeatherDescContext } from "../../context/WeatherDescContext";
function MyWeather() {
  const { setMyWeatherDesc } = useWeatherDescContext();
  const [loaded, setLoaded] = useState(false);

  const [coords, setCoords] = useState({
    lat: null,
    lon: null,
  });
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

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCoords({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  let weatherData = useYourWeatherInfo({ lat: coords.lat, lon: coords.lon });

    useEffect(() => {
      if (report.temp) {
        setMyWeatherDesc(report.desc);
        // setMyWeatherDesc(weatherData?.weather?.[0]?.main);
        setLoaded(true);
      }
      getLocation();
    }, [report]);
  
  useEffect(() => {
    if (weatherData && weatherData.sys && weatherData.weather) {
      const sunriseTime = new Date(
        weatherData.sys.sunrise * 1000
      ).toLocaleTimeString();
      const sunsetTime = new Date(
        weatherData.sys.sunset * 1000
      ).toLocaleTimeString();
      
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
    }
  }, [weatherData]);
  


  return <div>{loaded ? <WeatherInfo report={report} /> : null}</div>;
}

export default MyWeather;
