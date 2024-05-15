import logo from "@/../public/images/android_4_c@2x.png";
import gmailLogo from "@/../public/icons/gmail_logo.svg";
import phoneLogo from "@/../public/icons/phone.svg";
import instagram from "@/../public/icons/instagram.svg";
import whatsapp from "@/../public/icons/whatsapp.svg";
import facebook from "@/../public/icons/facebook.svg";
import copyRight from "@/../public/icons/copyright.svg";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
type Props = { value: any; navItems: any };

function Footer({ value, navItems }: Props) {
  const t = value;
  const squareVariants = {
    visible: { x: 0, opacity: 1 },
    hidden: { x: -20, opacity: 0 },
  };
  const cardsVariants = {
    visible: { x: 0, opacity: 1 },
    hidden: { x: 20, opacity: 0 },
  };
  const footVariants = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: 0, opacity: 0 },
  };
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <>
      <div
        className={`pt-[46px] md:pt-[66px] lg:pt-[50px] xl:pt-[40px] mt-[67px] md:mt-[96px] lg:mt-[100px] 2xl:mt-[100px] xl:mt-[60px]`}
        id="Footer"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[10px]">
          <motion.div
            ref={ref}
            variants={squareVariants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="pe-[20px]"
          >
            <div className=" w-[140px] h-[38px] md:w-[194px] md:h-[52px] lg:w-[240px] lg:h-[50px] 2xl:w-[240px] 2xl:h-[50px] xl:w-[190px] xl:h-[40px] bg-white text-black rounded-[12px] md:rounded-[15px] px-[22px] py-[9px] md:px-[26px] md:py-[10px] lg:px-[48px] lg:py-[16px] flex justify-between items-center font-bold text-[16px] md:text-[24px] 2xl:text-[24px] xl:text-[15px] lg:text-[23px]">
              <Image
                className="h-[18px] w-[18px] md:h-[24px] md:w-[24px] lg:h-[20px] lg:w-[20px] 2xl:h-[20px] 2xl:w-[20px] xl:h-[15px] xl:w-[15px]"
                src={logo}
                alt=""
              />
              <p>
                Care<span className="text-primary">IO</span>
              </p>
            </div>
            <p className="mt-[24px] xl:mt-[18px] 2xl:mt-[24px] text-[14px] xl:text-[14px] 2xl:text-[19px] max-w-[540px] xl:max-w-[400px] 2xl:max-w-[540px]">
              {t.fot_subtitle}
            </p>
          </motion.div>

          <motion.div
            className="md:flex justify-between"
            ref={ref}
            variants={cardsVariants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="mt-[32px] ">
              <div className="flex mb-[14px]">
                <h1 className="text-[18px] font-bold xl:text-[17px] 2xl:text-[24px]">
                  {t.fot_Services}
                </h1>
              </div>
              {navItems.map((navItem: any, index: any) => (
                <p
                  key={index}
                  className="text-[16px] xl:text-[14px] 2xl:text-[20px] font-medium mb-[8px] cursor-pointer"
                  onClick={() => {
                    window.scrollTo(
                      0,
                      navItem.sectionRef.current.offsetTop - 200
                    );
                  }}
                >
                  {navItem.title}
                </p>
              ))}
            </div>

            <div className="mt-[32px] ">
              <div className="flex mb-[14px]">
                <h1 className="text-[18px] font-bold xl:text-[17px] 2xl:text-[24px]">
                  {t.fot_Contact_us}
                </h1>
              </div>
              <div className="flex items-center text-[16px] font-medium mb-[8px]">
                <Image
                  className="h-[20px] w-[20px] 2xl:h-[20px] 2xl:w-[20px] xl:h-[15px] xl:w-[15px]"
                  src={gmailLogo}
                  alt=""
                />
                <div className="w-[8px]"></div>
                <p className="text-[16px] xl:text-[14px] 2xl:text-[20px] font-medium">
                  info@gmail.com
                </p>
              </div>
              <div className="flex items-center text-[16px] font-medium mb-[8px] ">
                <Image
                  className="h-[20px] w-[20px] 2xl:h-[20px] 2xl:w-[20px] xl:h-[15px] xl:w-[15px]"
                  src={phoneLogo}
                  alt=""
                />
                <div className="w-[8px]"></div>
                <p className="text-[16px] xl:text-[14px] 2xl:text-[20px] font-medium">
                  {t.fot_number}
                </p>
              </div>
            </div>

            <div className="mt-[32px] ">
              <div className="flex mb-[14px]">
                <h1 className="text-[18px] font-bold xl:text-[17px] 2xl:text-[24px]">
                  {t.fot_Media}
                </h1>
              </div>
              <div className="flex   ">
                <Image
                  className="h-[24px] w-[24px] 2xl:h-[24px] 2xl:w-[24px] xl:h-[20px] xl:w-[20px]"
                  src={facebook}
                  alt="mc"
                />
                <Image
                  className="h-[24px] w-[24px] mx-[10px] 2xl:h-[24px] 2xl:w-[24px] xl:h-[20px] xl:w-[20px]"
                  src={instagram}
                  alt=""
                />
                <Image
                  className="h-[24px] w-[24px] 2xl:h-[24px] 2xl:w-[24px] xl:h-[20px] xl:w-[20px]"
                  src={whatsapp}
                  alt=""
                />
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          ref={ref}
          variants={footVariants}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="h-[1px] w-full bg-white mt-[20px] xl:mt-[10px] 2xl:mt-[20px] mb-[15px] xl:mb-[10px] 2xl:mb-[15px]"></div>
          <div className="flex items-center justify-between">
            <div className="flex  items-center text-[14px] xl:text-[12px] 2xl:text-[18px] font-light pb-[20px] xl:pb-[10px] 2x:pb-[20px] ">
              <Image
                className="h-[16px] w-[16px] xl:h-[12px] xl:w-[12px] 2xl:h-[15px] 2xl:w-[15px]"
                src={copyRight}
                alt=""
              />
              <div className="w-[8px]"></div>
              <p>{t.fot_end}</p>
            </div>
            <div className=" text-[14px] xl:text-[12px] 2xl:text-[18px] font-light pb-[20px] xl:pb-[10px] 2x:pb-[20px] space-x-[14px]">
              <p>{t.fot_end2}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Footer;
