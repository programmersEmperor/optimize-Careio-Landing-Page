'use client';

import { ReferenceContext } from "@/contexts/ReferenceContext";
import { useContext } from "react";

interface Props{
    dict: any;
}

export default function DownloadButton({dict}: Props){

    const {downloadSectionRef} = useContext(ReferenceContext)
    return <button
    onClick={() => {
      window.scrollTo(0, downloadSectionRef.current.offsetTop - 100);
    }}
    className="  lg:h-[50px] xl:h-[40px] 2xl:h-[55px] bg-gradient-to-l from-[#046762] to-[#06988E] text-[white] h-[45px] sm:h-[50px]  rounded-lg text-[15px] sm:text-[18px] 2xl:text-[18px] xl:text-[13px] font-bold"
  >
    {dict.Download_App}
  </button>
}