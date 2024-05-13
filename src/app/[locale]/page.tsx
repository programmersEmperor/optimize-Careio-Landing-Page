import Image from "next/image";
import { getDictionary } from '@/dictionaries/dictionaries'

export default async function Home({ params, searchParams }: any) {
  const dict = await getDictionary(params.locale)
  
  return <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <p>
      {dict.products.cart}
    </p>
  </main>
}

