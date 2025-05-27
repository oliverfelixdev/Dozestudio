import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white h-[60vh] px-6 py-16 md:px-10 md:py-12 text-[15px] fixed bottom-0 z-[1]">
      <div className="flex flex-col md:flex-col justify-between gap-10">
        {/* TOP Section */}
        <div className="w-full flex flex-row items-start justify-between">
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

          <a
            className="crdt-btn text-xl"
            href="https://github.com/oliverfelixdev"
          >
            <span className="crdt-btn-span crdt-btn-span-1">OLIVER FELIX ↗</span>
            <span className="crdt-btn-span crdt-btn-span-2">OLIVER FELIX ↗</span>
          </a>
        </div>

        {/* BOTTOM Section */}
        <div className="w-full flex flex-row items-start justify-between">
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

            <div className="w-[5.5rem] h-[2px] bg-white mb-3  ml-auto"></div>
            {["Instagram", "LinkedIn", "Giphy"].map((link, index) => (
              <a
                key={index}
                className="font-[un-sans-regular] text-sm leading-tight block"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
