'use client';

import { ReferenceContext } from "@/contexts/ReferenceContext";
import { motion } from "framer-motion";
import { useContext } from "react";

export default function NavbarUnderliner(){
    const {underlinerLeft, previousUnderlinerLeft, underlinerRef} = useContext(ReferenceContext);

    return <><motion.div
    className={`absolute p-0 bottom-[8px] left-[0px] h-1 bg-[#119A7D]  w-8`}
    initial={{ marginLeft: `${previousUnderlinerLeft}px` }}
    animate={{ marginLeft: `${underlinerLeft}px` }}
    transition={{ type: "ease out" }}
  ></motion.div>
  <div
    className={`absolute p-0 bottom-[0px] left-[0px] h-1 bg-[#119A7D]  w-8 invisible`}
    ref={underlinerRef}
  ></div></>
}