"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  buttonContent: any;
  menuContent: any;
  dict: any;
}

export default function LanguageMenu({
  buttonContent,
  menuContent,
  dict,
}: Props) {
  const [dropdownOpen, setdropdownOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setdropdownOpen((previous) => !previous)}
        onBlur={() => setdropdownOpen(false)}
        className="hover:cursor-pointer hover:shadow-lg lg:text-[15px] xl:text-[13px] 2xl:text-[15px] lg:w-[180px] lg:h-[45px] xl:w-[150px] xl:h-[35px]   px-5 py-2.5 text-center inline-flex items-center justify-center w-[100px]  bg-[black] text-[white] h-[35px]  rounded-lg text-[11px] font-bold"
      >
        {buttonContent}
      </button>

      <div
        defaultValue={dict.locale}
        className={`${
          dropdownOpen
            ? `top-full opacity-100 visible `
            : "top-[110%] opacity-0 invisible "
        } absolute  ${
          dict.locale === "en"
            ? "right-0 xl:right-[70px] 2xl:right-0"
            : "left-0 xl:left-[70px] 2xl:left-0"
        }   flex flex-col  items-center justify-center z-40 mt-2 w-[210px] 2xl:w-[210px] xl:w-[160px] rounded-3xl border-[.5px] border-light bg-[#c4cfd5]  py-5 shadow-card transition-all`}
      >
        {menuContent}
      </div>
    </>
  );
}
