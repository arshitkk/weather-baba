import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { TiWeatherCloudy } from "react-icons/ti";
import { FaSearch, FaInfoCircle } from "react-icons/fa";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { useWeatherDescContext } from "../../context/WeatherDescContext";
import "../../app.css";
import Music from "../main-section/mini-components/Music";

function Header() {
  const { setCurrentPage } = useWeatherDescContext();
  const location = useLocation(); // Get the currentPage from the URL params

  const selected =
    "text-black flex items-center justify-center w-full h-full bg-white/80 backdrop-blur-sm p-2 px-2 rounded-full transition-all ease duration-600";

  const notSelected =
    "flex items-center justify-center w-full h-full p-2 px-2 rounded-full ";

  // Update the current page in context based on the URL parameter
  React.useEffect(() => {
    if (location) {
      setCurrentPage(location.pathname); // Set currentPage based on the URL parameter
    }
    console.log("Current page from URL:", location.pathname); // For debugging
  }, [location, setCurrentPage]);

  return (
    <div>
      <nav
        id="anim"
        className="scale-[0.80] text-white text-[0rem] sm:text-sm font-bold translate-y-6 h-fit w-full flex items-center justify-center anim  "
      >
        <ul className="rounded-full flex gap-7 justify-between items-center p-1 backdrop-blur-sm bg-white/30 m  w-[23rem] sm:w-[600px] h-fit ">
          <li className="w-[40%]">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? selected : notSelected)}
            >
              <span className="flex items-center gap-1">
                <FaLocationCrosshairs className="text-2xl" />
                <p>Your Weather</p>
              </span>
            </NavLink>
          </li>
          <li className="w-[40%]">
            <NavLink
              to="/search-weather"
              className={({ isActive }) => (isActive ? selected : notSelected)}
            >
              <span className="flex items-center gap-1">
                <FaSearch className="text-2xl" />
                <p>Search Weather</p>
              </span>
            </NavLink>
          </li>
          <li className="w-[40%]">
            <NavLink
              to="/about-website"
              className={({ isActive }) => (isActive ? selected : notSelected)}
            >
              <span className="flex items-center gap-1">
                <FaInfoCircle className="text-xl" />
                <p>About Website</p>
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <Music />
    </div>
  );
}

export default Header;
