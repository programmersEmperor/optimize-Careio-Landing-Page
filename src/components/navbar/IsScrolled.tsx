'use client';
import { useState } from "react";
import Glassy from "../shared/Glassy";

interface Props {
    children: any;
}

export default function IsScrollable({children}: Props){
    const [scrolled, setScrolled] = useState(false);

    return <Glassy
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
}