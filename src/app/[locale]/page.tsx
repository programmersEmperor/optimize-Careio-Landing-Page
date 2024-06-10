import BannerSection from '@/components/banner/BannerSection'
import Clients from '@/components/clients/Clients'
import DownloadAppWrapper from '@/components/downloadApp/DownloadAppWrapper'
import FooterWrapper from '@/components/footer/FooterWrapper'
import Navbar from '@/components/navbar/Navbar'
import Service from '@/components/service/Service'
import WhyUsWarpper from '@/components/whyUs/WhyUsWrapper'
import { getDictionary } from '@/dictionaries/dictionaries'

export default async function Home({ params, searchParams }: any) {
  const dict = await getDictionary(params.locale)
  
  return <>
    <header>
      <Navbar dict={dict}/>
    </header>
    <main>
      <BannerSection dict={dict}/>
      <div className="container mx-auto px-[20px] xl:px-[100px] 2xl:px-[20px] ">
        <Service dict={dict}/>
        <Clients dict={dict}/>
        <WhyUsWarpper dict={dict}/>
        <DownloadAppWrapper dict={dict}/>
      </div>
    </main>
    <footer>
      <FooterWrapper dict={dict}/>
    </footer>
  </>
}


