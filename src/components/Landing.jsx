import React from "react";

const Landing = () => {
  return (
    <div className="h-screen w-full relative z-20">
      <video
        className="h-full w-full object-cover absolute top-0 left-0 z-[1]"
        preload="auto"
        loop
        // autoPlay
        muted
        src="./assets/videos/showreel.mp4"
      />
      <div className="absolute bottom-0 left-0 z-[2] text-white pb-9 px-10">
        <h1 className="font-[un-sans-light] text-2xl leading-none">
          © 2025 DOZE.STD
        </h1>
        <h2 className="font-[un-sans-medium] text-2xl">
          SHAPING BRANDS → CRAFTING MOTION →
        </h2>
      </div>
    </div>
  );
};

export default Landing;
