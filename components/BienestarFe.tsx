'use client'

import { BookOpen, Heart, Sprout, ArrowRight } from 'lucide-react'

export default function BienestarFe() {
  const guias = [
    {
      icon: Heart,
      title: 'Guía 1 – Conocer a Dios',
      description: 'Un camino para acercarte a Él con sencillez y verdad.',
      status: 'Disponible',
      pdfUrl: '/assets/CONOCER-A-DIOS.pdf.pdf',
    },
    {
      icon: Sprout,
      title: 'Guía 2 – Habitarte desde el amor de Dios',
      description: 'Cómo reconectar con tu cuerpo desde la fe y el amor propio.',
      status: 'Próximamente',
    },
    {
      icon: BookOpen,
      title: 'Guía 3 – Hábitos conscientes',
      description: 'Construir una vida más intencional, simple y con propósito.',
      status: 'Próximamente',
    },
  ]

  return (
    <section id="bienestar" className="py-24 bg-gradient-to-br from-beige-50 to-sage-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">
            Bienestar integral & fe
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            No se trata solo de entrenar. También de cómo pensás, cómo te hablás y en quién confiás. En esta sección vas a encontrar guías sencillas para acompañar tu tiempo con Dios, tus hábitos y tu proceso de sanidad interior.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {guias.map((guia, index) => {
            const Icon = guia.icon
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              >
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                    guia.status === 'Disponible' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-beige-100 text-beige-600'
                  }`}>
                    {guia.status}
                  </span>
                </div>

                {/* Icon */}
                <div className="w-14 h-14 bg-sage-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-sage-200 transition-colors">
                  <Icon className="text-sage-600" size={28} />
                </div>

                {/* Content */}
                <h3 className="font-serif text-2xl text-gray-900 mb-3">
                  {guia.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {guia.description}
                </p>

                {/* Download Button */}
                {guia.pdfUrl && (
                  <a
                    href={guia.pdfUrl}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-sage-600 text-white rounded-full hover:bg-sage-700 transition-all duration-300 font-medium shadow-md hover:shadow-lg"
                  >
                    <ArrowRight size={18} />
                    Descargar guía
                  </a>
                )}
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#bienestar"
            className="inline-flex items-center text-sage-600 hover:text-sage-700 font-medium group"
          >
            Ver todas las guías
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}
