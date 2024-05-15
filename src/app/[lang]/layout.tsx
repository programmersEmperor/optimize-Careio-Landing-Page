import type { Metadata } from "next";
import { Cairo, Rubik } from "next/font/google";
import "./globals.css";
const cairo = Cairo({ subsets: ["arabic"] });
const rubik = Rubik({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Careio",
  description: "Generated by hakeem",
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  return (
    <html lang={params.lang}>
      <body
        className={
          (params.lang === "ar" ? cairo.className : rubik.className) +
          " bg-[#ECFAFF]"
        }
      >
        {children}
      </body>
    </html>
  );
}
