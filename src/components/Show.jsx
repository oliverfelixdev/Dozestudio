import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Show = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const pinRef = useRef(null);
  const scrollRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: pinRef.current,
        start: "top 20%",
        endTrigger: scrollRef.current,
        end: "bottom bottom",
        pin: true,
        pinSpacing: false,
      });
    }, scrollRef);

    return () => ctx.revert();
  }, []);

  const cardData = [
    {
      title: "Mustela",
      media: "./assets/videos/mustela.mp4",
      heading: "Brand Identity",
      description:
        "A soothing skincare brand for babies and mothers, Mustela offers gentle, natural products for delicate skin.",
    },
    {
      title: "A24 - WYFSTW",
      media: "./assets/videos/30finalscene.mp4",
      heading: "Advertising",
      description:
        "A24's 'We Yearn For Something They Won't' – a surreal and thought-provoking short film exploring modern existentialism.",
    },
    {
      title: "CM | Equity",
      media: "./assets/videos/equity.mp4",
      heading: "Motion Design",
      description:
        "CM Equity presents a bold financial strategy, blending innovation with secure investment opportunities.",
    },
    {
      title: "Citroën ë - C3",
      media: "./assets/videos/citroen.mp4",
      heading: "Advertising",
      description:
        "The Citroën ë-C3 – an electric vehicle combining futuristic design, efficiency, and cutting-edge automotive technology.",
    },
    {
      title: "Dampa",
      media: "./assets/videos/thunder.mp4",
      heading: "Scenography & Music Videos",
      description:
        "Dampa – a high-energy, immersive experience blending music, visuals, and raw emotion in a thunderous spectacle.",
    },
    {
      title: "Torticolia",
      media: "./assets/videos/torticolia.mp4",
      heading: "Personal Project",
      description:
        "Torticolia – an avant-garde art project exploring movement, tension, and the human form through captivating visuals.",
    },
    {
      title: "Farcry 6",
      media: "./assets/videos/farcry.mp4",
      heading: "Motion Design",
      description:
        "Far Cry 6 – an explosive open-world adventure set in a tropical paradise torn by revolution and chaos.",
    },
    {
      title: "Perspective Fund",
      media: "./assets/videos/long.mp4",
      heading: "Branding & Identity",
      description:
        "Perspective Fund – redefining investment approaches with forward-thinking strategies and sustainable growth.",
    },
    {
      title: "Martin Solveig",
      media: "./assets/videos/master.mp4",
      heading: "Music Video",
      description:
        "Martin Solveig – a world-renowned DJ and producer delivering electrifying beats and unforgettable performances.",
    },
    {
      title: "Nope Collectif",
      media: "./assets/videos/nope.mp4",
      heading: "Branding & Identity",
      description:
        "Nope Collectif – a rebellious creative collective pushing boundaries in art, film, and digital expression.",
    },
    {
      title: "Heiwa",
      media: "./assets/videos/heiwa.mp4",
      heading: "Advertising",
      description:
        "Heiwa – a serene journey into tranquility, blending minimalist aesthetics with deep emotional resonance.",
    },
    {
      title: "Alltta Curio",
      media: "./assets/img/allttacurio.png",
      heading: "Illustration",
      description:
        "Alltta Curio – a unique fusion of music and art, crafting immersive experiences that defy convention.",
    },
    {
      title: "Mobile M",
      media: "./assets/videos/mobile.mp4",
      heading: "Advertising",
      description:
        "Mobile M – revolutionizing connectivity with sleek design and next-gen mobile technology.",
    },
    {
      title: "Nothing Ear",
      media: "./assets/videos/nothing.mp4",
      heading: "Advertising",
      description:
        "Nothing Ear – transparent design meets premium sound for a truly unique audio experience.",
    },
  ];

  return (
    <div className="showpage">
      <div className="showpage-wrapper">
        {/* Hover Content */}
        <motion.div
          ref={pinRef}
          className="card-main h-[28rem] w-[20rem]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: [0.83, 0, 0.17, 1] }}
        >
          {hoveredIndex !== null && (
            <div className="h-full w-full">
              <div className="h-80 w-full overflow-hidden bg-stone-100">
                {cardData[hoveredIndex].media.endsWith(".mp4") ? (
                  <video
                    className="h-full w-full object-cover"
                    src={cardData[hoveredIndex].media}
                    loop
                    autoPlay
                    muted
                  />
                ) : (
                  <img
                    className="h-full w-full object-cover"
                    src={cardData[hoveredIndex].media}
                    alt={cardData[hoveredIndex].title}
                  />
                )}
              </div>
              <div className="flex items-start justify-start flex-col gap-2">
                <h4 className="text-xl font-[un-sans-regular] mt-2.5">
                  {cardData[hoveredIndex].heading}
                </h4>
                <p className="text-md leading-none font-[un-sans-regular]">
                  {cardData[hoveredIndex].description}
                </p>
              </div>
            </div>
          )}
        </motion.div>

        {/* Headings */}
        <div
          ref={scrollRef}
          className="showpage-titles-container flex items-start justify-start flex-col gap-5 pb-2"
        >
          {cardData.map((card, index) => (
            <h1
              key={index}
              className="text-[4.3rem] leading-none font-[un-sans-regular] cursor-pointer w-fit"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {card.title}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Show;
