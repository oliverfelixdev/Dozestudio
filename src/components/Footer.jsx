import React from "react";

export default function Footer() {
  const linkForwards = [
    {
      linkIs: "Instagram",
      towards: "https://instagram.com/oliverfelixdev",
    },
    {
      linkIs: "LinkedIn",
      towards: "https://in.linkedin.com/in/oliverfelixdev",
    },
    {
      linkIs: "Github",
      towards: "https://github.com/oliverfelixdev",
    },
  ];
  return (
    <footer className="bg-black text-white px-6 py-16 md:px-10 md:py-12 text-[15px]">
      <div className="flex flex-col md:flex-col justify-between gap-10 bg-red-400">
        {/* TOP Section */}
        <div className="w-full flex flex-row items-start justify-between bg-lime-600">
          {/* Project Inquires */}
          <div>
            <h2 className="text-xl font-[un-sans-semibold] leading-none mb-5">
              PROJECT INQUIRES
            </h2>
            <p className="text-sm leading-none mb-1">Ready to work with us ?</p>
            <p className="text-sm leading-tight mb-4">
              Replica of Doze Studio by Oliver Felix <br /> Educational Pupose
              only.
            </p>
            <p className="italic text-white">hello@doze-studio.com</p>
          </div>
          {/* Logo */}
          <svg
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 56 56"
            fill="none"
            width="46"
            height="46"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M56 0H0V56H56V0ZM6.5 46.5V31.5H21.5L6.5 46.5ZM25 35V50.5H10L25 35ZM6 6H25V25H6V6ZM41.5 26C47.299 26 52 21.299 52 15.5C52 9.70101 47.299 5 41.5 5C35.701 5 31 9.70101 31 15.5C31 21.299 35.701 26 41.5 26ZM32 32H50V38H32V32ZM50 44H32V50H50V44Z"
              fill="#FFFFFF"
            ></path>
          </svg>
        </div>

        {/* BOTTOM Section */}
        <div className="w-full flex flex-row items-start justify-between bg-rose-600">
          {/* Our Office */}
          <div>
            <h2 className="text-xl font-[un-sans-semibold] leading-none mb-4">
              OUR OFFICE
            </h2>
            <p className="text-sm leading-tight">Doze Studio</p>
            <p className="text-sm leading-tight">1b rue Baron</p>
            <p className="text-sm leading-tight">44 000 Nantes</p>
            <p className="text-sm leading-tight">France</p>
          </div>

          {/* Networks */}
          <div className="text-right">
            <h2 className="text-xl font-[un-sans-semibold] leading-none mb-4">
              NETWORKS
            </h2>

            <button className="crdt-btn">
              <span className="crdt-btn-span crdt-btn-span-1">Credits</span>
              <span className="crdt-btn-span crdt-btn-span-2">
                <a href="https://github.com/oliverfelixdev">Oliver felix</a>
              </span>
            </button>

            <div className="w-8 h-[2px] bg-white mb-4 ml-auto"></div>

            {linkForwards.map((link, index) => (
              <a
                key={index}
                href={link.towards}
                className="font-[un-sans-regular] text-sm leading-tight block"
              >
                {link.linkIs}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
