import type { Metadata } from "next";
import { Rubik, Cairo } from "next/font/google";
import "../globals.css";
import { ReferenceContextProvider } from "@/contexts/ReferenceContext";
import { getDictionary } from "@/dictionaries/dictionaries";

const rubik = Rubik({ subsets: ["latin"] });
const cairo = Cairo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Careio",
  description: "Careio",
  icons:{
    icon: '/icons/careio.svg'
  }
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: { locale: 'ar' | 'en' };
}>) {
  const dict = await getDictionary(params.locale)

  return (
    <html lang={params.locale} className='scroll-smooth' dir={params.locale == 'ar' ? "rtl": "ltr"}>
      <body className={params.locale == 'en' ? rubik.className : cairo.className }>
        <ReferenceContextProvider dict={dict}>
          {children}
        </ReferenceContextProvider>
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  return [{ locale: 'ar' }, { locale: 'en' }]
}