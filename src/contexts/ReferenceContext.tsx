'use client';

import { createContext, useEffect, useLayoutEffect, useRef, useState } from "react";

interface Props {
    children: any;
    dict: any;
}

export interface NavItemInterface {
    title: string;
    sectionRef?: any;
    navRef?: any;
}

export interface ReferenceContextProviderInterface{
  navItems: NavItemInterface[];
  activeNavItem: number;
  setActiveNavItem: any;
  underlinerLeft: number;
  setUnderlinerLeft: any;
  previousUnderlinerLeft: number;
  setPreviousUnderlinerLeft: any;
  underlinerRef: any;
  homeSectionRef: any;
  servicesSectionRef: any;
  aboutSectionRef: any;
  contactSectionRef: any;
  downloadSectionRef: any;
  homeNavRef: any;
  servicesNavRef: any;
  aboutNavRef: any;
  downloadNavRef: any;
  contactNavRef: any;
  scrolled: boolean;
  setScrolled: any;
}

const defaultValue : ReferenceContextProviderInterface = {
  navItems: [],
  activeNavItem: 0,
  setActiveNavItem: undefined,
  underlinerLeft: 0,
  setUnderlinerLeft: undefined,
  previousUnderlinerLeft: 0,
  setPreviousUnderlinerLeft: undefined,
  underlinerRef: undefined,
  homeSectionRef: undefined,
  servicesSectionRef: undefined,
  aboutSectionRef: undefined,
  contactSectionRef: undefined,
  downloadSectionRef: undefined,
  homeNavRef: undefined,
  servicesNavRef: undefined,
  aboutNavRef: undefined,
  downloadNavRef: undefined,
  contactNavRef: undefined,
  scrolled: false,
  setScrolled: undefined
}

const ReferenceContext = createContext(defaultValue);

const ReferenceContextProvider = ({children, dict}: Props)=>{

  const t = dict;
  const underlinerRef = useRef();
  const [activeNavItem, setActiveNavItem] = useState(0);
  const [underlinerLeft, setUnderlinerLeft] = useState(0);
  const [previousUnderlinerLeft, setPreviousUnderlinerLeft] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const homeSectionRef = useRef();
  const servicesSectionRef = useRef();
  const aboutSectionRef = useRef();
  const contactSectionRef = useRef();
  const downloadSectionRef = useRef();

  const homeNavRef = useRef();
  const servicesNavRef = useRef();
  const aboutNavRef = useRef();
  const downloadNavRef = useRef();
  const contactNavRef = useRef();


  const navItems : NavItemInterface[] = [
    { title: t.Home, sectionRef: homeSectionRef, navRef: homeNavRef },
    {
      title: t.Services,
      sectionRef: servicesSectionRef,
      navRef: servicesNavRef,
    },
    { title: t.About_us, sectionRef: aboutSectionRef, navRef: aboutNavRef },
    { title: t.ourapp, sectionRef:  downloadSectionRef, navRef: downloadNavRef },
    {
      title: t.Contact_us,
      sectionRef: contactSectionRef,
      navRef: contactNavRef,
    },
  ];

  if (typeof window !== "undefined") {
    (window as any).activeNavItem = activeNavItem;
  }

  const moveUnderline = () => {
    const activeNavItem = (window as any).activeNavItem;
    console.log("activeNavItem: " + activeNavItem);
    if(navItems[activeNavItem] && navItems[activeNavItem].navRef && navItems[activeNavItem].navRef!.current && underlinerRef && underlinerRef.current){
      let newUnderlinerLeft = (navItems[activeNavItem].navRef!.current! as any).getBoundingClientRect().x - (underlinerRef!.current! as any).getBoundingClientRect().x;
      if (dict.locale == "ar") {
        newUnderlinerLeft += (navItems[activeNavItem].navRef!.current! as any).getBoundingClientRect().width / 2;
      }
      newUnderlinerLeft = Math.round(newUnderlinerLeft);
      setUnderlinerLeft((previous) => {
        setPreviousUnderlinerLeft(previous);
        return newUnderlinerLeft;
      });
    }
  };

  useEffect(() => {
    moveUnderline();
  }, [activeNavItem]);

  // useLayoutEffect(() => {
  //   const dir = locale === "ar" ? "rtl" : "ltr";
  //   document.querySelector("body").setAttribute("dir", dir);
  //   moveUnderline();
  // }, [locale]);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      let screenCenter = window.screen.height / 2 + window.scrollY;
      navItems.forEach((element, index) => {
        if(element.sectionRef && element.sectionRef.current){
          let startPosition = (element.sectionRef.current as any).offsetTop;
          let endPosition = startPosition + (element.sectionRef.current as any).getBoundingClientRect().height;
          if (screenCenter >= startPosition && screenCenter <= endPosition) {
            setActiveNavItem(index);
          }
        }
      });
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setActiveNavItem(navItems.length - 1);
      }
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", moveUnderline);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", moveUnderline);
    };
  }, []);

    return <ReferenceContext.Provider value={{
      navItems: navItems,
      activeNavItem: activeNavItem,
      previousUnderlinerLeft: previousUnderlinerLeft,
      setActiveNavItem: setActiveNavItem,
      setPreviousUnderlinerLeft: setPreviousUnderlinerLeft,
      setUnderlinerLeft: setUnderlinerLeft,
      underlinerLeft: underlinerLeft,
      underlinerRef: underlinerRef,
      aboutNavRef: aboutNavRef,
      aboutSectionRef: aboutSectionRef,
      contactNavRef: contactNavRef,
      contactSectionRef: contactSectionRef,
      downloadNavRef: downloadNavRef,
      downloadSectionRef: downloadSectionRef,
      homeNavRef: homeNavRef,
      homeSectionRef: homeSectionRef,
      servicesNavRef: servicesNavRef,
      servicesSectionRef: servicesSectionRef,
      scrolled: scrolled,
      setScrolled: setScrolled,
    }}>
        {children}
    </ReferenceContext.Provider>
}

export {ReferenceContext, ReferenceContextProvider}