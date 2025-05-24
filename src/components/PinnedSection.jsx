import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PinnedSection = () => {
  const sectionRef = useRef(null);
  const nextSectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const nextSection = nextSectionRef.current;

    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      endTrigger: nextSection,
      end: "top top", // when the top of nextSection hits the top of viewport
      pin: true,
      pinSpacing: false, // optionally disable extra space after pin
      markers: true, // for debugging
    });
  }, []);

  return (
    <div>
      <section
        ref={sectionRef}
        style={{
          height: "100vh",
          background: "#1e1e1e",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Pinned Section</h1>
      </section>

      <section
        ref={nextSectionRef}
        style={{
          height: "200vh",
          background: "#f3f3f3",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Next Section</h1>
      </section>
    </div>
  );
};

export default PinnedSection;
