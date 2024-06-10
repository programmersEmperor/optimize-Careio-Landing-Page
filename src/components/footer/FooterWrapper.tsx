"use client";

import { ReferenceContext } from "@/contexts/ReferenceContext";
import { useContext } from "react";
import Footer from "./Footer";

interface Props{
    dict: any;
}

export default function FooterWrapper({dict}: Props){
    const {contactSectionRef, navItems} = useContext(ReferenceContext)
    return <div ref={contactSectionRef} className="bg-gradient-to-br from-startCardGrident to-endCardGrident text-white">
        <div className="container mx-auto px-[20px] xl:px-[60px] 2xl:px-[20px]">
            <Footer dict={dict} navItems={navItems}/>
        </div>
    </div>
}