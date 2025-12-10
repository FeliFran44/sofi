'use client'

import { ArrowRight, Download } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-beige-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-gray-900 leading-tight">
                Habitar tu cuerpo desde el{' '}
                <span className="text-sage-600">amor de Dios</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                Acompaño tu proceso hacia una vida más libre, sana y consciente, desde la fe, el movimiento y hábitos simples.
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-lg text-gray-700">
                <span className="font-semibold">Sofía Tarela</span> · Prof. de Educación Física y entrenadora
              </p>
              <p className="text-base text-gray-600">
                Lifestyle & fitness de la mano de Él
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#programas"
                className="inline-flex items-center justify-center px-8 py-4 bg-sage-600 text-white rounded-full hover:bg-sage-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                Ver programas y planes
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a
                href="#bienestar"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-sage-600 border-2 border-sage-600 rounded-full hover:bg-sage-50 transition-all duration-300"
              >
                <Download className="mr-2" size={20} />
                Descargar guía gratuita
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/fotosofi1.jpg"
                alt="Sofía Tarela"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -z-10 top-8 right-8 w-full h-full bg-sage-200/30 rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
