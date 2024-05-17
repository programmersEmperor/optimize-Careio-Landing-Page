'use client';

import { ReferenceContext } from "@/contexts/ReferenceContext";
import { useContext } from "react";

export default function NavbarBigNavigation() {
    const {navItems, activeNavItem} = useContext(ReferenceContext);

  return (
    <>
      {navItems.map((navItem, index) => {
        return (
          <li key={navItem.title}>
            <h1 
              className={`block py-2 pl-3 pr-4 text-black rounded 2xl:text-[18px] lg:text-[14px] xl:text-[13px] cursor-pointer md:p-0 ${
                index === activeNavItem ? "font-bold" : ""
              }`}
              ref={navItem.navRef}
              onClick={() => {
                window.scrollTo(0, navItem.sectionRef.current.offsetTop - 200);
              }}
            >
              {navItem.title}
            </h1>
          </li>
        );
      })}
    </>
  );
}
