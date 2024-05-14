'use client';

import { MutableRefObject, createContext, useRef, useState } from "react";

interface Props {
    children: any;
    dict: any;
}

export interface NavItemInterface {
    title: string;
    sectionRef?: MutableRefObject<undefined>;
    navRef?: MutableRefObject<undefined>;
}

export interface ReferenceContextProviderInterface{
  navItems: NavItemInterface[];
  activeNavItem: number;
  setActiveNavItem: any;
  underlinerLeft: number;
  setUnderlinerLeft: any;
  previousUnderlinerLeft: number;
  setPreviousUnderlinerLeft: any;
}

const defaultValue : ReferenceContextProviderInterface = {
  navItems: [],
  activeNavItem: 0,
  setActiveNavItem: undefined,
  underlinerLeft: 0,
  setUnderlinerLeft: undefined,
  previousUnderlinerLeft: 0,
  setPreviousUnderlinerLeft: undefined,
}

export const ReferenceContext = createContext(defaultValue);

export function ReferenceContextProvider({children, dict}: Props){

  const t = dict;
  const underlinerRef = useRef();
  const [activeNavItem, setActiveNavItem] = useState(0);
  const [underlinerLeft, setUnderlinerLeft] = useState(0);
  const [previousUnderlinerLeft, setPreviousUnderlinerLeft] = useState(0);

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


    return <ReferenceContext.Provider value={{
      navItems: navItems,
      activeNavItem: activeNavItem,
      previousUnderlinerLeft: previousUnderlinerLeft,
      setActiveNavItem: setActiveNavItem,
      setPreviousUnderlinerLeft: setPreviousUnderlinerLeft,
      setUnderlinerLeft: setUnderlinerLeft,
      underlinerLeft: underlinerLeft,
    }}>
        {children}
    </ReferenceContext.Provider>
}