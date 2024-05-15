import React, { useEffect } from "react";
import Card from "@/components/Card";
import tpy from "@/../public/icons/tby.png";
import city from "@/../public/icons/cita.png";
import medicine from "@/../public/icons/medicine.png";
import pay from "@/../public/icons/pay.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Props = { value: any };

function Services({ value }: Props) {
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
      {/* Services */}

      <div className="mt-[67px] md:mt-[96px] lg:mt-[50px]" id="Services">
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
              {t.Services_For_Your_Health}
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
              <Card
                icon={tpy}
                title={t.title_service1}
                description={t.subtitle_service1}
                isFilled
              />
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
              <Card
                icon={city}
                title={t.title_service2}
                description={t.subtitle_service2}
                isFilled
              />
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
              <Card
                icon={medicine}
                title={t.title_service3}
                description={t.subtitle_service3}
                isFilled
              />
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
              <Card
                icon={pay}
                title={t.title_service4}
                description={t.subtitle_service4}
                isFilled
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Services;
