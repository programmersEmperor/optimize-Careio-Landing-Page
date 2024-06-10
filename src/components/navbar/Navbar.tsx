import Link from "next/link";
import Center from "../shared/Center";
import IsScrollable from "./IsScrolled";
import Image from "next/image";
import LanguageMenu from "./LanguageMenu";
import MobileNavMenu from "./MobileNavMenu";
import { FaBars, FaXmark } from "react-icons/fa6";
import Glassy from "../shared/Glassy";
import { motion } from "framer-motion";
import NavbarUnderliner from "./NavbarUnderliner";
import NavbarBigNavigation from "./NavbarBigNavigation";

interface Props {
  dict: any;
}

export default function Navbar({ dict }: Props) {
  return (
    <>
      <IsScrollable>
        <div
          className={`h-[60px] md:h-[100px] 2xl:h-[100px]  xl:h-[80px]  sm:h-[80px]  max-w-[2000px`}
        >
          <div className="relative container mx-auto md:px-[20px] h-full flex justify-between">
            <Center>
              <div className="w-screen 2xl:w-screen xl:w-[1050px] flex items-center justify-between mx-1 sm:mx-auto  ">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/images/careio-black-logo.png"
                    alt="careio logo"
                    className="md:h-7 me-2 md:w-8 h-[22px] w-[22px] sm-h-[32px] sm:w-[32px] xl:w-[25px] xl:h-[25px] 2xl:h-[32px] 2xl:w-[32px]"
                    width={22}
                    height={22}
                  />

                  <span className="self-center md:text-[30px] xl:text-[25px] 2xl:text-[30px]  text-[22px] sm:text-[30px]  font-bold whitespace-nowrap text-black ">
                    Care<span className="text-primary">io</span>
                  </span>
                </Link>
                <div className="flex md:order-2">
                  <LanguageMenu
                    dict={dict}
                    buttonContent={
                      <>
                        <Image
                          src="/icons/global-icon.svg"
                          alt="language button"
                          width={20}
                          height={20}
                          className="w-[20px] h-[20px] xl:w-[24px] xl:h-[24px] xl:pr-2"
                        />
                        <div className="w-3"></div>
                        <div className="text-center">{dict.language}</div>
                        <div className="w-3"></div>
                      </>
                    }
                    menuContent={
                      <>
                        <Link
                          href={"/en"}
                          className="block  py-2 px-5 text-base xl:text-[13px] font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary"
                        >
                          {dict.English}
                        </Link>
                        <Link
                          href={"/ar"}
                          className="block py-2 px-5 text-base xl:text-[13px] font-semibold  text-body-color hover:bg-primary hover:bg-opacity-5  hover:text-primary"
                        >
                          {dict.Arabic}
                        </Link>
                      </>
                    }
                  />

                  {/* menu form mobile devices */}
                  <MobileNavMenu 
                    closeComponent={<FaXmark className="h-7 w-7 " />} 
                    openComponent={<FaBars className="h-7 w-7" />} />
                </div>

                <div
                  className="items-center 2xl:h-[58px] xl:h-[47px] justify-between hidden w-full lg:flex  md:w-1/2 md:order-1"
                  id="navbar-sticky"
                >
                  <Glassy
                    height="100%"
                    boxShadow="0"
                    blur="20px"
                    background="#B0C0CC"
                    border = "1px solid  rgba(255,255,255,0.18)"
                    opacity="1"
                    width="100%"
                  >
                    <nav className="h-full w-full">
                        <ul className="flex items-center justify-evenly p-4 h-full w-full md:p-0 mt-4 font-medium border  rounded-lg   md:mt-0 md:border-0  ">
                          <NavbarBigNavigation/>
                        </ul>
                    </nav>
                    <NavbarUnderliner/>
                  </Glassy>
                </div>
              </div>
            </Center>
          </div>
        </div>
      </IsScrollable>
    </>
  );
}
