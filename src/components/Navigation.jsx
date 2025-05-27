import React from "react";

const Navigation = () => {
  return (
    <nav className="w-full fixed top-0 left-0 z-30 flex items-center justify-start py-7 px-10 mix-blend-difference text-white">
      <div className="w-1/3">
        <a className="flex items-center justify-start gap-4 w-fit" href="#">
          <span className="font-[un-sans-light] text-2xl leading-none cursor-pointer">
            Doze — Studio
          </span>
          <video
            className="h-5 mix-blend-difference"
            loop
            autoPlay
            muted
            src="../public/assets/videos/logoanim.mp4"
          ></video>
        </a>
      </div>
      <div className="w-2/3 flex items-center justify-between">
        <div className="flex items-center justify-center gap-3">
          {["Projects,", "About,", "Labs"].map((item, index) => (
            <a
              key={index}
              className="text-xl font-[un-sans-regular] leading-none"
              href="#"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center justify-center gap-4">
          <span className="font-[un-sans-medium] text-sm leading-none">
            FR: 15:53
          </span>
          <span className="font-[un-sans-medium] text-xl leading-none">
            Let's Talk
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
