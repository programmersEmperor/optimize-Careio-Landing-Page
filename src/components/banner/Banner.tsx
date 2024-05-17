"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Glassy from "../shared/Glassy";
import Image from 'next/image';
import DownloadButton from "./DownloadButton";
import ParticlesBackground from "./ParticlesBackground";

interface Props {
    dict: any
}

export default function Banner({dict}: Props)  {
    const t = dict;
      
    return (
      <>
        <div className="fixed z-[-100]">
          <ParticlesBackground></ParticlesBackground>
        </div>
        <div className="relative pt-[103px] sm:pt-[120px]  md:pt-[140px] lg:pt-[100px] xl:pt-[70px] 2xl:pt-[100px] pb-[46px] md:pb-[96px] lg:pb-[140px]">
          <div className="grid grid-cols-2 ">
            <motion.div
              className="col-span-2 order-1 md:order-2 md:col-span-1 lg:row-span-2 "
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0 }}
            >
              <Image
                className={`mx-auto h-[362px] w-[300px] lg:h-[350px] xl:h-[350px] 2xl:h-[500px]  object-contain `}
                src='/images/female-doctor.png'
                alt="female doctor"
                priority={true}
                width={150}
                height={181}
              />
            </motion.div>
            <div className=" col-span-2 order-2 md:order-1 md:col-span-1  text-center md:text-start flex flex-col justify-center mt-[39px]">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`text-[35px] sm:text-[48px] lg:text-[50px] xl:text-[40px] 2xl:text-[55px] font-bold text-titleHome `}
              >
                {t.locale === "en" ? (
                  <p>
                    {t.titlebuner1}
                    <br />
                    {t.in} <span className="text-primary me-2">{t.digital}</span>{" "}
                    {t.hands}
                  </p>
                ) : (
                  ""
                )}
                {t.locale === "ar" ? (
                  <p>
                    {t.titlebuner1}
                    <br />
                    {t.in} {t.hands}{" "}
                    <span className="text-primary me-2">{t.digital}</span>{" "}
                  </p>
                ) : (
                  ""
                )}
              </motion.div>
              <div className="h-[20px]"></div>
  
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className={`text-[14px] sm:text-[16px] md:text-[13px] xl:text-[12px] 2xl:text-[15px] font-semibold lg:max-w-[500px] xl:max-w-[400px] 2xl:max-w-[500px]`}
              >
                {t.subtitleBuner}
              </motion.div>
            </div>
            <div className="col-span-2 order-3 lg:col-span-1 xl:mt-[40px] 2xl:mt-[20px] mt-[20px] mb-[48px]  ">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className={`grid grid-cols-2 gap-[13px] md:gap-[18px] md:w-[518px]  lg:w-full xl:w-[350px] 2xl:w-full max-w-[500px] `}
              >
                <DownloadButton dict={dict}/>
                <Link
                  href={"https://dashboard.careio.app"}
                  className="lg:h-[50px] xl:h-[40px] 2xl:h-[55px] justify-center flex items-center bg-[white] text-[#12515E] h-[45px] sm:h-[50px] rounded-lg text-[15px] sm:text-[18px] 2xl:text-[18px] xl:text-[13px] font-bold"
                >
                  {t.Go_To_Dashboard}
                </Link>
              </motion.div>
            </div>
          </div>
          <div className="h-0 lg:h-[80px] xl:h-0"></div>
  
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className={`mt-[20px] lg:absolute lg:bottom-[25px] z-[50] left-0 right-0 `}
          >
            <Glassy 
                height = "100%"
                width = "100%"
                boxShadow = " 0 8px 32px 0 rgba(0,0,0,0.37)"
                border = "1px solid  rgba(255,255,255,0.18)" 
                background="#129A7F" 
                blur="0" 
                opacity="0.64">
              <div className=" py-[20px]  lg:h-[135px] xl:h-[120px] 2xl:h-[155px]  rounded-[10px] md:rounded-[20px] flex justify-around  font-bold text-center text-white">
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="flex flex-col justify-center items-center"
                >
                  <div className="text-[25px] font-bold  sm:text-[28px] md:text-[36px] lg:text-[35px]  xl:text-[30px] 2xl:text-[35px]">
                    100K+
                  </div>
                  <div className="text-[12px] sm:text-[16px] md:text-[20px] lg:text-[18px] 2xl:text-[18px] xl:text-[15px]">
                    {t.Certified_Doctors}
                  </div>
                </motion.div>
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                  className="flex flex-col justify-center items-center"
                >
                  <div className="text-[25px] font-bold  sm:text-[28px] md:text-[36px] lg:text-[35px]  xl:text-[30px] 2xl:text-[35px]">
                    100K+
                  </div>
                  <div className="text-[12px] sm:text-[16px] md:text-[20px] lg:text-[18px] 2xl:text-[18px] xl:text-[15px]">
                    {t.Happy_Patients}
                  </div>
                </motion.div>
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.6 }}
                  className="flex flex-col justify-center items-center"
                >
                  <div className="text-[25px] font-bold  sm:text-[28px] md:text-[36px] lg:text-[35px] xl:text-[30px] 2xl:text-[35px]">
                    95%
                  </div>
                  <div className="text-[12px] sm:text-[16px] md:text-[20px] lg:text-[18px] 2xl:text-[18px] xl:text-[15px]">
                    {t.Satisfaction_Rate}
                  </div>
                </motion.div>
              </div>
            </Glassy>
          </motion.div>
        </div>
      </>
    );
  };