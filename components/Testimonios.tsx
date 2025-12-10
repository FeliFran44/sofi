'use client'

import { Quote } from 'lucide-react'
import Image from 'next/image'

export default function Testimonios() {
  const testimonios = [
    {
      text: 'Antes sentía que vivía peleada con mi cuerpo. Hoy puedo mirarme con más amor, entrenar sin castigarme y disfrutar de moverme.',
      nombre: 'María',
      rol: 'Programa ÍNTEGRO',
    },
    {
      text: 'Sofi no solo me ayudó con el entrenamiento, también me acompañó a sanar mi relación con la comida. Fue un proceso transformador desde adentro.',
      nombre: 'Laura',
      rol: 'Plan personalizado',
    },
    {
      text: 'Encontré en este espacio algo más que fitness: encontré paz, propósito y una forma de cuidarme que honra quién soy realmente.',
      nombre: 'Camila',
      rol: 'Programa ÍNTEGRO',
    },
    {
      text: 'Me encanta cómo Sofi integra la fe en todo. Es lo que necesitaba: un acompañamiento que respeta mis valores y mi cuerpo.',
      nombre: 'Ana',
      rol: 'Plan Full body',
    },
    {
      text: 'Aprendí que el fitness puede ser amable. Ya no me exijo hasta el cansancio, ahora me muevo con intención y amor.',
      nombre: 'Sofía',
      rol: 'Programa ÍNTEGRO',
    },
  ]

  return (
    <section id="testimonios" className="py-24 bg-beige-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">
            Historias reales
          </h2>
          <p className="text-xl text-gray-600">
            Personas que eligieron habitarse desde el amor
          </p>
        </div>

        {/* Testimonios Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonios.map((testimonio, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote size={48} className="text-sage-600" />
              </div>

              {/* Content */}
              <div className="relative space-y-4">
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonio.text}"
                </p>

                <div className="pt-4 border-t border-gray-100">
                  <p className="font-semibold text-gray-900">
                    {testimonio.nombre}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonio.rol}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Image */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/assets/fotosofi3.jpg"
              alt="Sofía Tarela"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
