import Card from "@/components/Card";
import robot2 from "@/../public/images/robot2.jpg";
import privacy from "@/../public/icons/privacy2.gif";
import worker from "@/../public/icons/protection.gif";
import operation from "@/../public/icons/artificial-intelligence.gif";
import efficiency from "@/../public/icons/review.gif";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

type Props = { value: any };

function WhyUs({ value }: Props) {
  const t = value;
  const squareVariants = {
    visible: { x: 0, opacity: 1 },
    hidden: { x: -20, opacity: 0 },
  };
  const cardsVariants = {
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
      <div className="mt-[67px] md:mt-[96px] lg:mt-[100px]" id="About us">
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-[53px] md:gap-[64px] xl:gap-[40px]">
          <motion.div
            className="xl:col-span-2"
            ref={ref}
            variants={squareVariants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div
              className={`h-[388px] md:h-[530px] xl:h-[490px] 2xl:h-[600px] rounded-[12px] `}
              style={{
                backgroundImage: "url(" + robot2.src + ")",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="h-full w-full  bg-gradient-to-br from-startCardGrident to-endCardGrident text-white text-center opacity-[.70] rounded-[12px] flex flex-col justify-center px-[60px]">
                <div className="text-[36px] md:text-[40px]  2xl:text-[50px] font-bold">
                  <h1>{t.Why}</h1>
                  <div className="h-[8px]"></div>
                  <h1>{t.Choose_Us}</h1>
                </div>
                <div className="h-[32px]"></div>
                <p className="text-[20px] md:text-[20px] xl:text-[20px] 2xl:text-[25px] font-light">
                  {t.answer_why}
                </p>
              </div>
            </div>
          </motion.div>
          <div className="xl:col-span-3">
            <div
              className={`gap-[23px] lg:gap-[30px] md:gap[48px] h-full grid grid-cols-2`}
            >
              <motion.div
                ref={ref}
                variants={cardsVariants}
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
                    isFilled={false}
                    icon={privacy}
                    title={t.title_card_why1}
                    description={t.subtitle_card_why1}
                  />
                </motion.div>
              </motion.div>
              <motion.div
                ref={ref}
                variants={cardsVariants}
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
                    isFilled={false}
                    icon={worker}
                    title={t.title_card_why2}
                    description={t.subtitle_card_why2}
                  />
                </motion.div>
              </motion.div>
              <motion.div
                ref={ref}
                variants={cardsVariants}
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
                    isFilled={false}
                    icon={operation}
                    title={t.title_card_why3}
                    description={t.subtitle_card_why3}
                  />
                </motion.div>
              </motion.div>
              <motion.div
                ref={ref}
                variants={cardsVariants}
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
                    isFilled={false}
                    icon={efficiency}
                    title={t.title_card_why4}
                    description={t.subtitle_card_why4}
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyUs;
