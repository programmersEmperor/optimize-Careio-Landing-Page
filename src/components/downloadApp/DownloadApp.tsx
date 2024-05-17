"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface Props{
    dict: any
}

export default function DownloadApp({dict}: Props) {
    const t = dict;
    const locale = t.locale;
  
    const squareVariants = {
      visible: { x: 0, opacity: 1 },
      hidden: { x: -20, opacity: 0 },
    };
    const imageVariants = {
      visible: { x: 0, opacity: 1 },
      hidden: { x: 20, opacity: 0 },
    };
    const image2Variants = {
      visible: { x: 0, opacity: 1 },
      hidden: { x: -20, opacity: 0 },
    };
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
    let scale =
      locale === "en" ? { transform: "scaleX(1)" } : { transform: "scaleX(-1)" };
    return (
      <>
        <div
          id="App"
          className="flex justify-between mt-[67px] md:mt-[96px] lg:mt-[100px]"
        >
          <div className="text-center flex flex-col items-center  lg:text-start lg:items-start">
            <div className="relative flex justify-center mx-auto mb-[24px] md:mb-[64px]">
              <motion.div
                ref={ref}
                variants={squareVariants}
                initial="hidden"
                animate={controls}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h1 className="text-[24px] text-[#032D2B] sm:text-[36px] md:text-[48px] lg:text-[50px] xl:text-[40px] 2xl:text-[55px] font-bold ">
                  {t.title_dowenlod}
                  <br />
                  {t.title_dowenlod2}
                </h1>
                <div className="absolute ms-[82px] sm:ms-[125px] md:ms-[165px] lg:ms-0 bottom-[0] w-[103px] sm:w-[150px] md:w-[200px] lg:w-[250px] xl:w-[200px] 2xl:w-[250px] h-[3px] md:h-[5px] lg:h-[7px] bg-primary"></div>
              </motion.div>
            </div>
            <motion.div
              ref={ref}
              variants={imageVariants}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Image
                src="/images/app-mock.png"
                className={`w-[426px] mb-[14px] lg:hidden`}
                alt="careio mock image"
                width={426}
                height={284}
              />
            </motion.div>
  
            <div>
              <motion.div
                ref={ref}
                variants={squareVariants}
                initial="hidden"
                animate={controls}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <p className="text-[16px] text-[#032D2B] md:text-[17px] xl:text-[15px] 2xl:text-[17px] max-w-[800px] font-bold mb-[33px] md:mb-[64px] ">
                  {t.subtitle_dowenload}
                  <br />
                  {t.subtitle_dowenload2}
                </p>
              </motion.div>
              <motion.div
                ref={ref}
                variants={squareVariants}
                initial="hidden"
                animate={controls}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex items-center justify-center lg:justify-start"
              >
                <Link href="https://api.careio.app/storage/app/careio.apk">
                <button className="w-[180px] h-[45px] sm:h-[50px] md:w-[250px] lg:h-[55px] xl:h-[40px]  xl:w-[200px] 2xl:w-[220px] 2xl:h-[55px]  bg-gradient-to-l from-[#046762] to-[#06988E] rounded-[12px]  px-[23px] py-[7px] md:px-[40px] md:py-[13px] flex justify-between items-center font-bold text-white text-[15px] md:text-[18px] 2xl:text-[17px] xl:text-[15px]">
                  <Image
                    className="h-[20px] w-[20px] md:h-[25px] md:w-[25px] xl:h-[20px] xl:w-[20px] 2xl:h-[25px] 2xl:w-[25px]"
                    src='/icons/google-play.png'
                    alt="google play image"
                    width={20}
                    height={20}
                  />
                  <p>{t.buton_dowenload}</p>
                </button>
                </Link>
              </motion.div>
            </div>
          </div>
  
          <motion.div
            ref={ref}
            variants={imageVariants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Image
              src='/images/app-mock.png'
              style={scale}
              className={`hidden object-cover  flip lg:block w-[455px] h-[593px] 2xl:w-[500px] 2xl:h-[600px] xl:w-[350px] xl:h-[450px]`}
              alt="careio mock image"
              width={455}
              height={593}
            />
          </motion.div>
        </div>
      </>
    );
  }