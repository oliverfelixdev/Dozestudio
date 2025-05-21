import React from "react";

const Landing = () => {
  return (
    <div className="h-screen w-full ">
      <video
        className="h-full w-full object-cover absolute top-0 left-0 z-10"
        loop
        autoPlay
        muted
        src="./assets/videos/showreel.mp4"
      />
    </div>
  );
};

export default Landing;
