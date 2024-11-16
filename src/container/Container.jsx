import React, { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import {
  rainy,
  cloudy,
  sunny,
  clear,
  thunderstorm,
  drizzle,
} from "../assets/background"; // Import your arrays
import { useWeatherDescContext } from "../context/WeatherDescContext";
import "../app.css";
import Logo from "../components/main-section/mini-components/Logo";
function Container({ children }) {
  const { myWeatherDesc, searchWeatherDesc, currentPage } =
    useWeatherDescContext();
  const [currentDesc, setCurrentDesc] = useState("");
  const [currWeather, setCurrWeather] = useState(""); // Default to an empty string to prevent errors

  useEffect(() => {
    // Set current description based on the current page
    if (currentPage === "/") {
      setCurrentDesc(myWeatherDesc ? myWeatherDesc : "sunny");
    } else if (currentPage === "/search-weather") {
      setCurrentDesc(searchWeatherDesc ? searchWeatherDesc : "sunny");
    } else if (currentPage === "/about-website") {
      setCurrentDesc("sunny");
    }
  }, [myWeatherDesc, searchWeatherDesc, currentPage]);
  useEffect(() => {
    // Set the background video based on the current description
    if (currentDesc) {
      let randomNum;
      switch (
        typeof currentDesc === "string" ? currentDesc.toLowerCase() : null
      ) {
        case "clear":
          randomNum = Math.floor(Math.random() * clear.length); // Use array.length for dynamic random number
          setCurrWeather(clear[randomNum]);
          break;
        case "rain":
          randomNum = Math.floor(Math.random() * rainy.length); // Use array.length for dynamic random number
          setCurrWeather(rainy[randomNum]);
          break;
        case "clouds":
          randomNum = Math.floor(Math.random() * cloudy.length); // Use array.length for dynamic random number
          setCurrWeather(cloudy[randomNum]);
          break;
        case "sunny":
          randomNum = Math.floor(Math.random() * sunny.length); // Use array.length for dynamic random number
          setCurrWeather(sunny[randomNum]);
          break;
        case "thunderstorm":
          randomNum = Math.floor(Math.random() * thunderstorm.length); // Use array.length for dynamic random number
          setCurrWeather(thunderstorm[randomNum]);
          break;
        case "drizzle":
          randomNum = Math.floor(Math.random() * drizzle.length); // Use array.length for dynamic random number
          setCurrWeather(drizzle[randomNum]);
          break;
        default:
          setCurrWeather(sunny[0]);
      }
    }
  }, [currentDesc, currentPage, myWeatherDesc]); // Re-run when `currentDesc` changes

  // Log the currentDesc and currWeather to verify values
  console.log("Current Description:", currentDesc);
  console.log("Current page:", currentPage);

  return (
    <div className="h-screen w-screen">
      <div className=" relative h-screen w-screen flex justify-center">
        {currWeather ? (
          <video
            autoPlay
            loop
            src={currWeather}
            className=" pointer-events-none absolute blur-sm inset-0 w-full h-full object-cover"
          />
        ) : (
          <p></p>
        )}
        <div className="transition linear duration-1000  relative flex flex-col ">
          <Logo />

          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Container;
