'use client'
import { useRef } from "react";
import dynamic from 'next/dynamic';
import im from "../../public/images/medicalservice-home-doctor.webp";
import Glassy from './Glassy';
import Banner from './sections/Banner';

const NavBar = dynamic(() => import('./NavBar'))
const Services = dynamic(() => import('./sections/Services'),{ssr:false})
const Clients = dynamic(() => import('./sections/Clients'),{ ssr: false })
const WhyUs = dynamic(() => import('./sections/WhyUs'),{ ssr: false })
const DownloadApp = dynamic(() => import('./sections/DownloadApp'),{ ssr: false })
const Footer = dynamic(() => import('./sections/Footer'),{ ssr: false })



type Props = {lang:string,dict:any}

function PageContent({lang,dict}: Props) {
   const homeSectionRef = useRef(null);
  const servicesSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const contactSectionRef = useRef(null);
  const downloadSectionRef = useRef(null);

  const homeNavRef = useRef(null);
  const servicesNavRef = useRef(null);
  const aboutNavRef = useRef(null);
  const downloadNavRef = useRef(null);
  const contactNavRef = useRef(null);
  const navItems:any = [
    { title: dict.Home, sectionRef: homeSectionRef, navRef: homeNavRef },
    {
      title: dict.Services,
      sectionRef: servicesSectionRef,
      navRef: servicesNavRef,
    },
    { title: dict.About_us, sectionRef: aboutSectionRef, navRef: aboutNavRef },
    { title: dict.ourapp, sectionRef:  downloadSectionRef, navRef: downloadNavRef },
    {
      title: dict.Contact_us,
      sectionRef: contactSectionRef,
      navRef: contactNavRef,
    },
  ];
  return (
    <>
     <NavBar
          values={dict}
          locale={lang}
          navItems={navItems}
        />
        <div
          ref={homeSectionRef}
          className="bg-no-repeat bg-cover p-[12px] md:p-[22px] lg:p-[25px] "
          style={{ backgroundImage: `url(${im.src})` }}
          id="banner"
        >
          <Glassy
           height = "100%"
           width = "100%"
           blur = "50px"
           opacity = "1"
           boxShadow = " 0 8px 32px 0 rgba(0,0,0,0.37)"
           background = " linear-gradient(135deg ,rgba(255,255,255,0.1),rgba(255,255,255,0))"
           border = "1px solid  rgba(255,255,255,0.18)">
            <div className="container mx-auto  px-[20px] xl:px-[75px] 2xl:px-[20px]">
              <div className="relative ">
                <Banner value={dict} locale={lang} downloadRef={downloadSectionRef} />
              </div>
            </div>
          </Glassy>
        </div>

        <div className="container mx-auto px-[20px] xl:px-[100px] 2xl:px-[20px] ">
          <div ref={servicesSectionRef}>
            <Services value={dict} />
          </div>
          <Clients value={dict} />

          <div ref={aboutSectionRef}>
            <WhyUs value={dict} />
          </div>

          <div ref={downloadSectionRef}>
            <DownloadApp value={dict} locale={lang} />
          </div>
        </div>

        {/* Footer Section */}
        <div
          ref={contactSectionRef}
          className="bg-gradient-to-br from-startCardGrident to-endCardGrident text-white"
        >
          <div className="container mx-auto px-[20px] xl:px-[60px] 2xl:px-[20px]">
            <Footer value={dict} navItems={navItems} />
          </div>
        </div>
    </>
  )
}

export default PageContent