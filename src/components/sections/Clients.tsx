import hospital from "@/../public/images/hospital.png";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";

type Props = { value: any };

function Clients({ value }: Props) {
  const t = value;
  const squareVariants = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: 50, opacity: 0 },
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
      <div className="mt-[67px] md:mt-[96px] lg:mt-[60px]">
        <motion.div
          ref={ref}
          variants={squareVariants}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative flex justify-center mx-auto mb-[24px] md:mb-[38px]"
        >
          <div>
            <h1 className="text-[24px] sm:text-[36px] md:text-[48px] text-[#032D2B] lg:text-[50px] xl:text-[40px]  2xl:text-[55px] font-bold text-center ">
              {t.Our_Clients}
            </h1>
            <div className="absolute bottom-[0] w-[43px] sm:w-[65px] md:w-[85px] lg:w-[105px] h-[3px] md:h-[5px] lg:h-[7px] bg-primary"></div>
          </div>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-8 ">
          <motion.div
            ref={ref}
            variants={squareVariants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Image
              src={hospital}
              className="h-[94px] w-[94px] md:h-[160px] md:w-[160px] 2xl:h-[170px] 2xl:w-[170px] xl:h-[140px] xl:w-[140px]"
              alt="image"
            />
          </motion.div>
          <motion.div
            ref={ref}
            variants={squareVariants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Image
              src={hospital}
              className="h-[94px] w-[94px] md:h-[160px] md:w-[160px] 2xl:h-[170px] 2xl:w-[170px] xl:h-[140px] xl:w-[140px]"
              alt="image"
            />
          </motion.div>
          <motion.div
            ref={ref}
            variants={squareVariants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Image
              src={hospital}
              className="h-[94px] w-[94px] md:h-[160px] md:w-[160px] 2xl:h-[170px] 2xl:w-[170px] xl:h-[140px] xl:w-[140px]"
              alt="image"
            />
          </motion.div>
          <motion.div
            ref={ref}
            variants={squareVariants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <Image
              src={hospital}
              className="h-[94px] w-[94px] md:h-[160px] md:w-[160px] 2xl:h-[170px] 2xl:w-[170px] xl:h-[140px] xl:w-[140px]"
              alt="image"
            />
          </motion.div>
          <motion.div
            ref={ref}
            variants={squareVariants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <Image
              src={hospital}
              className="h-[94px] w-[94px] md:h-[160px] md:w-[160px] 2xl:h-[170px] 2xl:w-[170px] xl:h-[140px] xl:w-[140px]"
              alt="image"
            />
          </motion.div>
          <motion.div
            ref={ref}
            variants={squareVariants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <Image
              src={hospital}
              className="h-[94px] w-[94px] md:h-[160px] md:w-[160px] 2xl:h-[170px] 2xl:w-[170px] xl:h-[140px] xl:w-[140px]"
              alt="image"
            />
          </motion.div>
          <motion.div
            ref={ref}
            variants={squareVariants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 1.6 }}
          >
            <Image
              src={hospital}
              className="h-[94px] w-[94px] md:h-[160px] md:w-[160px] 2xl:h-[170px] 2xl:w-[170px] xl:h-[140px] xl:w-[140px]"
              alt="image"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Clients;
