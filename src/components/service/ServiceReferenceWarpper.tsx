'use client';

import { ReferenceContext } from "@/contexts/ReferenceContext";
import { useContext } from "react";
import Service from "./Service";

interface Props {
    children: any
}

export default function ServiceRefrenceWrapper({children}: Props){
    const {servicesSectionRef} = useContext(ReferenceContext);
    return <div ref={servicesSectionRef}>{children}</div>
}