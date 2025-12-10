'use client'

import Hero from '@/components/Hero'
import SobreSofi from '@/components/SobreSofi'
import BienestarFe from '@/components/BienestarFe'
import Programas from '@/components/Programas'
import Testimonios from '@/components/Testimonios'
import FAQ from '@/components/FAQ'
import Contacto from '@/components/Contacto'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <SobreSofi />
      <BienestarFe />
      <Programas />
      <Testimonios />
      <FAQ />
      <Contacto />
    </main>
  )
}
