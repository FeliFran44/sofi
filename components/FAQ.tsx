'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      pregunta: '¿Necesito experiencia previa para entrenar?',
      respuesta: 'No, los programas están diseñados para adaptarse a tu nivel actual. Ya sea que estés comenzando o tengas experiencia, cada rutina se personaliza según donde te encuentres.',
    },
    {
      pregunta: '¿Los programas son solo para mujeres?',
      respuesta: 'Aunque mi enfoque y mi comunidad están orientados principalmente a mujeres, cualquier persona que busque un acompañamiento integral con perspectiva de fe es bienvenida.',
    },
    {
      pregunta: '¿Qué pasa si tengo una lesión o condición de salud?',
      respuesta: 'Siempre recomiendo consultar con tu médico antes de comenzar. Una vez que tengas el visto bueno, podemos adaptar el programa según tus necesidades específicas.',
    },
    {
      pregunta: '¿Incluye videollamadas?',
      respuesta: 'El programa ÍNTEGRO incluye 1 videollamada de bienvenida y contacto directo conmigo durante todo el mes. Los otros planes tienen opciones de acompañamiento según el formato elegido.',
    },
    {
      pregunta: '¿Qué medios de pago aceptan?',
      respuesta: 'Acepto transferencia bancaria, Mercado Pago y otros medios de pago digitales. Una vez que te pongas en contacto conmigo, te comparto todos los detalles.',
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">
            Preguntas frecuentes
          </h2>
          <p className="text-xl text-gray-600">
            Respuestas a las dudas más comunes
          </p>
        </div>

        {/* FAQs */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-beige-50 rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-beige-100 transition-colors"
              >
                <span className="font-semibold text-lg text-gray-900 pr-8">
                  {faq.pregunta}
                </span>
                <div className="flex-shrink-0 w-8 h-8 bg-sage-600 rounded-full flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus className="text-white" size={20} />
                  ) : (
                    <Plus className="text-white" size={20} />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.respuesta}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
