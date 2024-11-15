import { useEffect, useState } from "react";

function useWeatherInfo(city) {
  let API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const [data, setData] = useState();
  useEffect(() => {
    if (city !== "") {
      async function fetching() {
        let response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        let info = await response.json();
        setData(info);
      }
      fetching();
    }
  }, [city]);
  // data ? console.log('data: ', data ) : null;

  return data;
}
export default useWeatherInfo;

// https://api.openweathermap.org/data/2.5/weather?q=jammu&appid=0bb053195ba3bbf768ea5a1be35c176e
