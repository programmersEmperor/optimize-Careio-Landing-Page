import type { Metadata } from "next";
import { Rubik, Cairo } from "next/font/google";
import "../globals.css";

const rubik = Rubik({ subsets: ["latin"] });
const cairo = Cairo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Careio",
  description: "Careio",
};

export default function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: { locale: 'ar' | 'en' };
}>) {
  return (
    <html lang={params.locale}>
      <body className={params.locale == 'en' ? rubik.className : cairo.className }>{children}</body>
    </html>
  );
}

export async function generateStaticParams() {
  return [{ locale: 'ar' }, { locale: 'en' }]
}