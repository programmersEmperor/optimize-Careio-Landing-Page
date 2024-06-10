"use client";

import { useContext } from "react";
import Glassy from "../shared/Glassy";
import { ReferenceContext } from "@/contexts/ReferenceContext";
import Banner from "./Banner";

interface Props {
  dict: any
}

export default function BannerSection({dict}: Props){
    const {homeSectionRef, downloadSectionRef} = useContext(ReferenceContext);

    return <>
        <div
          ref={homeSectionRef}
          className="bg-no-repeat bg-cover p-[12px] md:p-[22px] lg:p-[25px] "
          style={{ backgroundImage: `url(/images/background.webp)` }}
          id="banner"
        >
          <Glassy height = "100%"
                width = "100%"
                blur = "50px"
                opacity = "1"
                boxShadow = " 0 8px 32px 0 rgba(0,0,0,0.37)"
                background = " linear-gradient(135deg ,rgba(255,255,255,0.1),rgba(255,255,255,0))"
                border = "1px solid  rgba(255,255,255,0.18)">
            <div className="container mx-auto  px-[20px] xl:px-[75px] 2xl:px-[20px]">
              <div className="relative ">
                <Banner dict={dict} />
              </div>
            </div>
          </Glassy>
        </div>
    </>
}