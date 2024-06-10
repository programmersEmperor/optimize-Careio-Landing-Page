'use client';

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

interface Props {
    title: string;
    card1: any;
    card2: any;
    card3: any;
    card4: any;
}

export default function ServiceMotion({title, card1, card2, card3, card4}: Props){
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
    
    return <>
        <div className="relative flex justify-center mx-auto mb-[24px] md:mb-[38px]">
          <motion.div
            ref={ref}
            variants={squareVariants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.h1
              className={`text-[24px] sm:text-[36px] md:text-[48px] lg:text-[50px] xl:text-[40px] 2xl:text-[55px] text-[#032D2B] font-bold text-center`}
            >
              {title}
            </motion.h1>

            <div className="absolute bottom-[0] w-[90px] sm:w-[140px] md:w-[190px] lg:w-[200px] h-[3px] md:h-[5px] lg:h-[7px] bg-primary"></div>
          </motion.div>
        </div>

        <div
          className={`gap-[23px] md:gap[40px] grid grid-cols-2 xl:grid-cols-4`}
        >
          <motion.div
            ref={ref}
            variants={squareVariants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.div
              className="h-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {card1}
            </motion.div>
          </motion.div>
          <motion.div
            ref={ref}
            variants={squareVariants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.div
              className="h-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {card2}
            </motion.div>
          </motion.div>
          <motion.div
            ref={ref}
            variants={squareVariants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <motion.div
              className="h-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {card3}
            </motion.div>
          </motion.div>
          <motion.div
            ref={ref}
            variants={squareVariants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <motion.div
              className="h-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {card4}
            </motion.div>
          </motion.div>
        </div>
    </>
}