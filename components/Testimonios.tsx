'use client'

import { Quote } from 'lucide-react'
import Image from 'next/image'

export default function Testimonios() {
  const testimonios = [
    {
      text: 'La verdad me encantó el acompañamiento que se tuvo y lo que me mostró este plan es que se puede comer bien, quedar satisfecha sin abusar de los alimentos ni comer en excesos. Me ayudó a controlar los antojos, aunque a veces cuesta, y en el tema del ejercicio que no es necesario hacer 2 horas ni 5 días a la semana. Me ayudó a disfrutar de ambas cosas.',
      nombre: 'Participante 1',
      rol: 'Programa ÍNTEGRO',
    },
    {
      text: 'Este mes al cual pertenecí al plan de Integro, puedo decir que en honor el nombre, he integrado cierto hábitos a mis días que no los tenía. Si bien soy sincera que no logré cumplirlos al pie de la letra; he brindado mi tiempo disponible a cumplir mi compromiso con íntegro. De todas formas, todo lo que nos han brindado fue de un excelente nivel, no solo por la comunicación 24/7; sino por el alentarnos a seguir y superarnos.',
      nombre: 'Participante 2',
      rol: 'Programa ÍNTEGRO',
    },
    {
      text: 'Me gusto mucho el desafío, comi mas saludable y me sentí acompañada ya que compartíamos nuestras comidas/días de ejercicio. Me costo bastante la parte de ejercicio pero trate al menos de hacer algo dos veces por semana. Gracias!!!',
      nombre: 'Participante 3',
      rol: 'Programa ÍNTEGRO',
    },
    {
      text: 'Me encantoo! Me re sirvio para estar todo el mes motivada con ir al gimnasio y con las comidas. Las rutinas de gimnasio me re coparon y pude cumplir re bien con todo. Con la comida, que es lo que mas me estaba costando, la verdad que estoy re contenta porque mejore pila con eso. Me recontra sirvio para tener muchiisima menos ansiedad por comer. Y en todo el mes no me dieron atracones asi que la verdad que recontra contenta!',
      nombre: 'Participante 4',
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
