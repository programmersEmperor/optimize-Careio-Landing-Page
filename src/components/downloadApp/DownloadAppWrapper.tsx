"use client";

import { ReferenceContext } from "@/contexts/ReferenceContext";
import { useContext } from "react";
import DownloadApp from "./DownloadApp";

interface Props{
    dict: any;
}

export default function DownloadAppWrapper({dict}: Props){
    const {downloadSectionRef} = useContext(ReferenceContext)
    return <div ref={downloadSectionRef}>
        <DownloadApp dict={dict}/>
    </div>
}