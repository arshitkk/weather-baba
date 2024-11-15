import { createContext, useContext, useState } from "react";

const WeatherDescContext = createContext();

export const WeatherDescProvider = ({ children }) =>{
    const [myWeatherDesc, setMyWeatherDesc] = useState('');
    const [searchWeatherDesc, setSearchWeatherDesc] = useState('');
    const [currentPage, setCurrentPage ] = useState('your');
    return (
        <WeatherDescContext.Provider
        value={{
            searchWeatherDesc,
            setSearchWeatherDesc,
            myWeatherDesc,
                setMyWeatherDesc,
                currentPage,
            setCurrentPage
        }}
      >
        {children}
      </WeatherDescContext.Provider>
    );
}

        export const useWeatherDescContext = () => useContext(WeatherDescContext);