"use client";
import { ReferenceContext } from "@/contexts/ReferenceContext";
import { useContext } from "react";
import WhyUs from "./WhyUs";

interface Props{
    dict: any;
}
export default function WhyUsWarpper({dict}: Props){
    const {aboutSectionRef} = useContext(ReferenceContext)
    return <div ref={aboutSectionRef}>
        <WhyUs dict={dict}/>
    </div>
}