"use client";

import { NavItemInterface, ReferenceContext } from "@/contexts/ReferenceContext";
import { useState, ReactNode, useContext } from "react";

interface Props {
  openComponent: ReactNode;
  closeComponent: ReactNode;
}

export default function MobileNavMenu({
  openComponent,
  closeComponent
}: Props) {
  const [IsMenuOpen, setIsMenuOpen] = useState(false);
  const {navItems, activeNavItem} = useContext(ReferenceContext);

  return (
    <>
      <div className="lg:hidden px-2 flex">
        <button
          onClick={() => setIsMenuOpen((previous) => !previous)}
          onBlur={() => setIsMenuOpen(false)}
          className="text-neutralDGrey focus:outline-none text-[black]"
        >
          {IsMenuOpen ? (
            closeComponent
          ) : (
            openComponent
          )}
        </button>
      </div>

      {/* nav items for mobile device */}

      <div
        className={`${
          IsMenuOpen
            ? `top-full opacity-100 visible `
            : "top-[110%] opacity-0 invisible "
        } absolute right-8 left-8 flex flex-col justify-center z-40 mt-2 rounded-3xl border-[.5px] border-light bg-[#C4CFD5]  py-5 shadow-card transition-all`}>
        {/* {menuContent} */}
        <div>
          {navItems.map((navItem, index) => (
            <h1
              // offset={-1000}
              key={index}
              className={`block text-[21px] my-5 hover:bg-primary hover:bg-opacity-5 hover:text-primary  text-[#08392F] hover:text-brandprimary ${
                index === activeNavItem ? "font-bold" : ""
              }`}
              onClick={() => {
                if(navItem.sectionRef && navItem.sectionRef.current){
                  window.scrollTo(0, (navItem.sectionRef.current as any).offsetTop);
                }
              }}
            >
              {navItem.title}
            </h1>
          ))}
        </div>
      </div>
    </>
  );
}
