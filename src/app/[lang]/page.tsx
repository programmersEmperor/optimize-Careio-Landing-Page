import { getDictionary } from './dictionaries'
import PageContent from "@/components/PageContent";
type Props ={
  params: { [lang: string]: string };
}
export default async function Home({ params: { lang } }: Props) {
  const dict = await getDictionary(lang);  
  return (
    < >
    <PageContent lang={lang} dict={dict}/>
    </>
  );
}
