'use client'

import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function SobreSofi() {
  return (
    <section id="sobre-sofi" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/assets/fotosofi2.jpg"
                alt="Sofía Tarela - Sobre mi"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900">
              Quién soy y cómo llegué hasta acá
            </h2>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Soy <strong>Sofi Tarela</strong>, profe de Educación Física y entrenadora. Vengo de una etapa donde el fitness era exigencia, control y apariencia. Durante dos años competí en fisicoculturismo, creyendo que estar saludable era cumplir con un estándar físico: cierto cuerpo, cierto porcentaje de grasa, cierta disciplina.
              </p>

              <p>
                Con el tiempo entendí algo que cambió mi vida: <strong className="text-sage-600">la verdadera transformación no empieza en el cuerpo, empieza en el corazón</strong>. Volver a Dios fue lo que me habitó de otra manera. Él sanó mi identidad, me dio paz y propósito, y me mostró que cuidar el cuerpo es honrarlo — porque es un lugar donde Él habita.
              </p>

              <p>
                Soy Profesora de Educación Física con formación en entrenamiento y hábitos, y cuento con una <strong>Diplomatura en Psiconutrición</strong>, que me permite abordar la relación con la comida desde lo emocional, mental y conductual.
              </p>

              <p>
                Hoy acompaño a personas que quieren moverse, nutrirse y vivir mejor sin culpa ni obsesión, entendiendo al cuerpo como una casa que se habita con amor, propósito y fe.
              </p>
            </div>

            <a
              href="#programas"
              className="inline-flex items-center text-sage-600 hover:text-sage-700 font-medium group"
            >
              Conocé mis programas
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
