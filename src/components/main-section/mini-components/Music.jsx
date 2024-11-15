import React, { useState, useRef } from "react";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import musicFile from "../../../assets/weather/music.mp3";


function Music() {
    const audioRef = useRef(); // Reference to the audio element
    const [isPlaying, setIsPlaying] = useState(false); // Track if audio is playing

    const handlePlayPause = () => {
      if (isPlaying) {
        audioRef.current.pause(); // Pause audio if it's currently playing
      } else {
        audioRef.current.play(); // Play audio if it's currently paused
      }
      setIsPlaying(!isPlaying); // Toggle play/pause state
    };
  return (
    <div className="translate-y-8 scale-75 sm:translate-x-0 translate-x-[-3rem] sm:scale-100 z-50">
      {" "}
      <audio className="" src={musicFile} ref={audioRef} loop></audio>
      <div className=" flex items-center  w-fit  translate-x-[0.5rem] rounded-lg items-cente ">
        <button
          onClick={handlePlayPause}
          className=" shadow-2xl z-30 scale-100 rounded-full p-3 bg-green-500"
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        {/* <IoVolumeMute /> */}
        <span
          className={` play-panel translate-x-[0.5rem] font-bold font-sans  bg-white/30 backdrop-blur-sm flex items-center px-2 py-1 rounded-lg transition-all linear duration-600";

                ${isPlaying ? "opacity-0" : "opacity-100"}
                `}
        >
          <p>Ambience</p>
        </span>
      </div>
    </div>
  );
}

export default Music;
