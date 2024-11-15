import { LuSunset, LuSunrise, LuWind, LuHeading1 } from "react-icons/lu";
import { WiHumidity } from "react-icons/wi";
import { IoMdSpeedometer } from "react-icons/io";
import { LiaCloudSolid } from "react-icons/lia";
import { useEffect, useState } from "react";
function WeatherInfo({ report }) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (report.temp!== "N/A") {
      setLoaded(true);
    } else {
      setLoaded(false);
    }
  }, [report]);

  return (
    <div className="scale-100 sm:scale-[1.2] sm:mt-[4rem] ">
      {loaded && (
        <div>
          <p className=" mx-auto bg-white/30 backdrop-blur-sm w-fit shadow-lg rounded-lg translate-y-[-0.01rem] p-2 pt-1 font-bold text-xl rounded-bl-none rounded-br-none  ">
            <img
              className="h-7"
              src={report?.country || "default_flag_url.png"}
              alt="Country Flag"
            />
          </p>
          <div className=" mx-auto bg-white/30 backdrop-blur-sm shadow-lg rounded-2xl  z-10 shadow-slate-700 h-fit w-fit p-2 ">
            <div className="p-4 flex flex-col items-center sm:item-start w-72 ">
              <div className="flex flex-col items-center">
                <h1 className="text-4xl font-bold mb-2">
                  {report.temp || "N/A"}
                </h1>
                <p className="text-xl text-gray-700 mb-2">
                  {report.name || "City"}
                </p>
                <p className="text-gray-700 text-base">
                  {report.desc || "Weather"}
                </p>
                {report.icon && (
                  <img
                    className="weather-icon h-10 w-10"
                    src={report.icon}
                    alt="Weather Icon"
                  />
                )}
              </div>
              <div className="mt-4 gap-6 border p-1 rounded-lg bg-white/40 shadow-lg overflow-hidden w-fit sm:w-full ">
                <div className="sm:flex justify-between">
                  <span className=" flex gap-2 items-center">
                    <LuSunrise />
                    <p className="text-sm text-gray-600">
                      Sunrise: {report.sunrise}
                    </p>
                  </span>
                  <span className="flex gap-2 items-center">
                    <LuSunset />
                    <p className="text-sm text-gray-600">
                      Sunset: {report.sunset}
                    </p>
                  </span>
                </div>
              </div>
              <div className="mt-4 sm:flex gap-6 border p-1 rounded-lg bg-white/40 shadow-lg overflow-hidden">
                <div>
                  <span className="flex gap-2 items-center">
                    <WiHumidity />
                    <p className="text-sm text-gray-600">
                      Humidity: {report.humidity || "N/A"}
                    </p>
                  </span>
                  <span className="flex gap-2 items-center">
                    <IoMdSpeedometer />
                    <p className="text-sm text-gray-600">
                      Pressure:{" "}
                      {report.pressure ? `${report.pressure} hPa` : "N/A"}
                    </p>
                  </span>
                </div>
                <div>
                  <span className="flex items-center gap-2">
                    <LuWind />
                    <p className="text-sm text-gray-600">
                      Wind Speed: {report.windspeed || "N/A"}
                    </p>
                  </span>
                  <span className="flex gap-2 items-center">
                    <LiaCloudSolid />
                    <p className="text-sm text-gray-600">
                      Clouds: {report.clouds || "N/A"}
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WeatherInfo;
