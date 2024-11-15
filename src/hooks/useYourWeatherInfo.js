import { useEffect, useState } from "react";

function useYourWeatherInfo({ lat, lon }) {
  let API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const [data, setData] = useState();

  useEffect(() => {
    if (lat && lon) {
      async function fetching() {
        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
          );
          const info = await response.json();
          setData(info);
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      }
      fetching();
    }
  }, [lat, lon]);

  return data;
}

export default useYourWeatherInfo;
