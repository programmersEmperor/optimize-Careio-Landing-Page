

import Image from "next/image";
import { getDictionary } from './dictionaries'
import PageContent from "@/components/PageContent";
// import NavBar from "@/components/NavBar";


type Props ={
  params: { [lang: string]: string };
}

export default async function Home({ params: { lang } }: Props) {
  // const homeSectionRef = useRef(null);
  // const servicesSectionRef = useRef(null);
  // const aboutSectionRef = useRef(null);
  // const contactSectionRef = useRef(null);
  // const downloadSectionRef = useRef(null);

  // const homeNavRef = useRef(null);
  // const servicesNavRef = useRef(null);
  // const aboutNavRef = useRef(null);
  // const downloadNavRef = useRef(null);
  // const contactNavRef = useRef(null);
  const dict = await getDictionary(lang);

  
  return (
    < >
    <PageContent lang={lang} dict={dict}/>
    </>
  );
}
