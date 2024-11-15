import React from "react";

function About() {
  return (
    <div className=" flex justify-center w-screen ">
      <div className=" bg-white/20 text-black backdrop-blur-md shadow-2xl rounded-xl my-0 sm:my-7 scale-[0.9] sm:scale-10 sm:translate-0  flex flex-col  px-4 py-3 w-fit sm:w-[600px] sm:translate-y-[-2rem]">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Welcome to <i>WeatherBABA</i> ☀️🌧️
          </h2>
          <p className="text-md font-light">
            Your friendly digital weather guru.Here’s why
            WeatherBABA is the forecast app you didn’t know you needed:
          </p>

          <ul className="list-disc space-y-4 ml-5 text-base font-medium">
            <li>
              🌍 <strong>Knows Your Location:</strong> WeatherBABA uses
              geolocation to pinpoint where you are (don’t worry, it’s not
              nosy), giving you a forecast right from your desktop!
            </li>

            <li>
              🔍 <strong>Search-Friendly Forecasts:</strong> Curious about the
              weather somewhere else? Just type it in, and WeatherBABA will deliver the forcast in a blink of an eye”
            </li>

            <li>
              🎶 <strong>Soothing BGM:</strong> Added a little extra touch—a
              relaxing and soothing background tune for ambience!
            </li>

            <li>
              📺 <strong>Dynamic Backgrounds:</strong> Every forecast includes a video
              background that brings the weather to life, making your
              weather-checking experience immersive and fun.
            </li>
          </ul>
        </div>
      </div>
  );
}

export default About;

// Welcome to Weather BABA, your friendly digital weather guru with a twist of humor! Here’s why Weather BABA is the forecast app you didn’t know you needed: w-fit sm:w-[800px]

// 🌍 Knows Your Location: Weather BABA uses geolocation to pinpoint where you are (don’t worry, it’s not nosy), giving you a forecast right from your doorstep!

// ☀️ Weather Mood Swings: From sunshine to thunderstorms, Weather BABA sets the mood with unique backgrounds for each weather type. It’s like checking the weather with a bit of drama!

// 🔍 Search-Friendly Forecasts: Curious about the weather somewhere else? Just type it in, and Weather BABA delivers a forecast faster than you can say “sunglasses or umbrella?”

// 🎶 Soothing BGM: Added a little extra touch—a relaxing background tune to match the skies. Rainy day? Chill vibes. Sunny skies? Positive energy. You get the drift!

// 📺 Weather TV: Every forecast includes a video background that brings the weather to life, making your weather-checking experience immersive and fun.
