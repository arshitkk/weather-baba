import React from 'react'
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/instagram";
import "react-social-icons/linkedin";
import "react-social-icons/github";
import "react-social-icons/twitter";
import '../../app.css';

function Footer() {
  return (
    <footer className="bg-black  w-full flex justify-center">
      <div className="scale-[0.8]  flex flex-col items-center text-white font-thin  w-full max-w-screen-md">
        <div className="text-2xl my-3 text-center">
          Thanks For Visiting This Website ❤️
        </div>
        <div className="text-xl font-normal text-center">Contact Me</div>
        <div className="flex gap-10 p-2 scale-75">
          <SocialIcon
            className="icon"
            href="https://www.instagram.com/arshitkk/#"
            url="instagram"
          />
          <SocialIcon
            className="icon"
            href="https://www.linkedin.com/in/arshitkk/#"
            url="linkedin"
          />
          <SocialIcon
            className="icon"
            href="https://www.github.com/arshitkk/#"
            url="github"
          />
          <SocialIcon
            className="icon"
            href="https://www.x.com/arshitkk/#"
            url="twitter"
          />
        </div>
        <div className="text-center">
          © 2024 WeatherBaba | Data provided by{" "}
          <a
            className="underline font-semibold"
            href="https://openweathermap.org/"
          >
            OpenWeather API
          </a>{" "}
          | All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer