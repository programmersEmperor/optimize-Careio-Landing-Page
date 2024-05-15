"use client";
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { FaXmark, FaBars } from "react-icons/fa6";
import Image from "next/image";
import BannerIcon from "../../public/images/android_4_c@2x.png";
import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import Glassy from "./Glassy";
import Center from "./Center";

type Props = { values: any; locale: any; navItems: any };

const GlobeIcon = ({ width = 24, height = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="currentColor"
    className="bi bi-globe"
    viewBox="0 0 16 16"
  >
    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
  </svg>
);

export default function NavBar({ values, locale, navItems }: Props) {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [IsMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState(0);
  const [underlinerLeft, setUnderlinerLeft] = useState(0);
  const [previousUnderlinerLeft, setPreviousUnderlinerLeft] = useState(0);
  const underlinerRef = useRef(null);

  const t = values;

  if (typeof window !== "undefined") {
    (window as any).activeNavItem = activeNavItem;
  }
  const moveUnderLine = useCallback(() => {
    const activeNavItem = (window as any).activeNavItem;
    let newUnderlinerLeft;
    if (underlinerRef.current) {
      newUnderlinerLeft =
        navItems[activeNavItem].navRef.current.getBoundingClientRect().x -
        (underlinerRef as any).current.getBoundingClientRect().x;
    }

    if (locale == "ar" && newUnderlinerLeft) {
      newUnderlinerLeft +=
        navItems[activeNavItem].navRef.current.getBoundingClientRect().width /
        4.5;
    }
    newUnderlinerLeft = Math.round(newUnderlinerLeft as any);
    setUnderlinerLeft((previous) => {
      setPreviousUnderlinerLeft(previous);
      return newUnderlinerLeft;
    });
  }, [locale, navItems]);

  useEffect(()=>{
    moveUnderLine();
  },[activeNavItem,moveUnderLine])

  useEffect(()=>{
     const dir = locale === "ar" ? "rtl" : "ltr";
    (document as any).querySelector("body").setAttribute("dir", dir);
    moveUnderLine();
  },[locale,moveUnderLine])

    useEffect(()=>{
      const onScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
        let screenCenter = window.screen.height / 2 + window.scrollY;
        navItems.forEach((element: any, index: any) => {
          let startPosition = element.sectionRef.current.offsetTop;
          let endPosition =
            startPosition +
            element.sectionRef.current.getBoundingClientRect().height;
          if (screenCenter >= startPosition && screenCenter <= endPosition) {
            setActiveNavItem(index);
          }
        });
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
          setActiveNavItem(navItems.length - 1);
        }
      };
      window.addEventListener("scroll", onScroll);
      window.addEventListener("resize", moveUnderLine);

      return () => {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", moveUnderLine);
      };

   },[navItems,moveUnderLine])


  return (
    <motion.nav
      className={`fixed z-50 flex items-center justify-center pt-[25px] px-6 w-full  `}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Glassy
        height="100%"
        width="100%"
        blur={scrolled ? "500px" : "0"}
        background={scrolled ? "#c4cfdd" : "transparent"}
        opacity="1"
        boxShadow={scrolled ? "" : "none"}
        border="0"
      >
        <div
          className={`h-[60px] md:h-[100px] 2xl:h-[100px]  xl:h-[80px]  sm:h-[80px]  max-w-[2000px`}
        >
          <div className="relative container mx-auto md:px-[20px] h-full flex justify-between">
            <Center>
              <div className="w-screen 2xl:w-screen xl:w-[1050px] flex items-center justify-between mx-1 sm:mx-auto  ">
                <a href="#" className="flex items-center">
                  <Image
                    src={BannerIcon}
                    className="md:h-7 me-2 md:w-8 h-[22px] w-[22px] sm-h-[32px] sm:w-[32px] xl:w-[25px] xl:h-[25px] 2xl:h-[32px] 2xl:w-[32px]"
                    alt="Careio Logo"
                  />

                  <span className="self-center md:text-[30px] xl:text-[25px] 2xl:text-[30px]  text-[22px] sm:text-[30px]  font-bold whitespace-nowrap text-black ">
                    Care<span className="text-primary">io</span>
                  </span>
                </a>
                <div className="flex md:order-2 items-center justify-center">
                  {/* language button */}
                  <button
                    type="button"
                    onClick={() => setDropDownOpen((previous) => !previous)}
                    onBlur={() => setDropDownOpen(false)}
                    className="hover:cursor-pointer hover:shadow-lg lg:text-[15px] xl:text-[13px] 2xl:text-[15px] lg:w-[180px] lg:h-[45px] xl:w-[150px] xl:h-[35px]   px-5 py-2.5 text-center inline-flex items-center justify-center w-[100px]  bg-[black] text-[white] h-[35px]  rounded-lg text-[11px] font-bold"
                  >
                    <div className="hidden xl:flex">
                      <GlobeIcon width={20} height={20} />
                    </div>
                    <div className=" xl:hidden visible pr-2">
                      <GlobeIcon width={24} height={24} />
                    </div>
                    <div className="w-3"></div>{" "}
                    {locale === "en" ? "English" : "عربي"}
                    <div className="w-3"></div>
                  </button>

                  {/* here is the language menu context */}
                  <div
                    defaultValue={locale}
                    className={`${
                      dropDownOpen
                        ? `top-full opacity-100 visible `
                        : "top-[110%] opacity-0 invisible "
                    } absolute  ${
                      locale === "en" ? "  " : " "
                    }   flex flex-col  items-center justify-center z-40 w-[120px] lg:w-[180px] 2xl:w-[210px] xl:w-[160px] rounded-3xl border-[.5px] border-light bg-[#c4cfd5]  py-5 shadow-card transition-all`}
                  >
                    <div role="none">
                      <Link
                        href="/en"
                        className="block  py-2 px-5 text-base xl:text-[13px] font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary"
                      >
                        {t.English}
                      </Link>
                      <Link
                        href="/ar"
                        className="block py-2 px-5 text-base xl:text-[13px] font-semibold  text-body-color hover:bg-primary hover:bg-opacity-5  hover:text-primary"
                      >
                        {t.Arabic}
                      </Link>
                    </div>
                  </div>

                  {/* menu form mobile devices */}
                  <div className="lg:hidden px-2 flex">
                    <button
                      onClick={() => setIsMenuOpen((previous) => !previous)}
                      onBlur={() => setIsMenuOpen(false)}
                      className="text-neutralDGrey focus:outline-none text-[black]"
                    >
                      {IsMenuOpen ? (
                        <FaXmark className="h-7 w-7 " />
                      ) : (
                        <FaBars className="h-7 w-7" />
                      )}
                    </button>
                  </div>

                  {/* nav items for mobile device */}

                  <div
                    defaultValue={locale}
                    className={`${
                      IsMenuOpen
                        ? `top-full opacity-100 visible `
                        : "top-[110%] opacity-0 invisible "
                    } absolute right-8 left-8 flex flex-col justify-center z-40 mt-2 rounded-3xl border-[.5px] border-light bg-[#C4CFD5]  py-5 shadow-card transition-all`}
                  >
                    <div role="none">
                      {navItems.map((navItem: any, index: any) => (
                        <h1
                          //   offset={-1000}
                          key={index}
                          className={`block text-[21px] my-5 hover:bg-primary hover:bg-opacity-5 hover:text-primary  text-[#08392F] hover:text-brandprimary ${
                            index === activeNavItem ? "font-bold" : ""
                          }`}
                          onClick={() => {
                            window.scrollTo(
                              0,
                              navItem.sectionRef.current.offsetTop
                            );
                          }}
                        >
                          {navItem.title}
                        </h1>
                      ))}
                    </div>
                  </div>
                </div>

                <div
                  className="items-center 2xl:h-[58px] xl:h-[47px] md:h-[48px] justify-between hidden w-full lg:flex  md:w-1/2 md:order-1"
                  id="navbar-sticky"
                >
                  <Glassy
                    height="100%"
                    width="100%"
                    opacity="1"
                    border="1px solid  rgba(255,255,255,0.18)"
                    boxShadow="0"
                    blur="20px"
                    background="#B0C0CC"
                  >
                    <ul className="flex items-center justify-evenly p-4 h-full w-full md:p-0 mt-4 font-medium border  rounded-lg   md:mt-0 md:border-0  ">
                      {navItems.map((navItem: any, index: any) => {
                        return (
                          <li key={navItem.title}>
                            <h1
                              className={`block py-2 pl-3 pr-4 text-black rounded 2xl:text-[18px] lg:text-[14px] xl:text-[13px] cursor-pointer md:p-0 ${
                                index === activeNavItem ? "font-bold" : ""
                              }`}
                              ref={navItem.navRef}
                              onClick={() => {
                                window.scrollTo(
                                  0,
                                  navItem.sectionRef.current.offsetTop - 200
                                );
                              }}
                            >
                              {navItem.title}
                            </h1>
                          </li>
                        );
                      })}
                    </ul>
                    <motion.div
                      className={`absolute p-0 bottom-[8px] left-[0px] h-1 bg-[#119A7D]  w-8`}
                      initial={{ marginLeft: `${previousUnderlinerLeft}px` }}
                      animate={{ marginLeft: `${underlinerLeft}px` }}
                      transition={{ type: "ease out" }}
                    ></motion.div>
                    <div
                      className={`absolute p-0 bottom-[0px] left-[0px] h-1 bg-[#119A7D]  w-8 invisible`}
                      ref={underlinerRef}
                    ></div>
                  </Glassy>
                </div>
              </div>
            </Center>
          </div>
        </div>
      </Glassy>
    </motion.nav>
  );
  ``;
}
