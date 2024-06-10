'use client';
import { useContext, useState } from "react";
import Glassy from "../shared/Glassy";
import { ReferenceContext } from "@/contexts/ReferenceContext";
import { motion } from "framer-motion";

interface Props {
    children: any;
}

export default function IsScrollable({children}: Props){
    const {scrolled, setScrolled} = useContext(ReferenceContext)

    return <motion.nav
    className={`fixed z-50 flex items-center justify-center pt-[25px] px-6 w-full  `}
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.2 }}>
        <Glassy
            blur={scrolled ? "500px" : "0"}
            background={scrolled ? "#c4cfdd" : "transparent"}
            opacity="1"
            boxShadow={scrolled ? "" : "none"}
            border="0" 
            height={"100%"} 
            width={"100%"}
            >
            {children}
        </Glassy>
    </motion.nav>
}