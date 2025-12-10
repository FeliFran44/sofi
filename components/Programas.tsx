'use client'

import { Check, Sparkles, Dumbbell, Target, Activity, Zap } from 'lucide-react'

export default function Programas() {
  const integroFeatures = [
    'Rutina de entrenamiento personalizada',
    'Plan nutricional personalizado',
    'Recetario + menús simples',
    '2 consultas nutricionales',
    'Contacto directo con Sofi todo el mes',
    '1 videollamada de bienvenida',
    'Desafíos semanales',
  ]

  const otrosPlanes = [
    {
      icon: Dumbbell,
      title: 'Piernas & glúteos',
      description: 'Entrenamiento focalizado para tonificar y fortalecer la parte inferior del cuerpo.',
    },
    {
      icon: Target,
      title: 'Zona media consciente',
      description: 'Trabaja tu core desde la conexión y la consciencia corporal.',
    },
    {
      icon: Activity,
      title: 'Full body en casa',
      description: 'Rutinas completas sin equipamiento especial, donde estés.',
    },
    {
      icon: Zap,
      title: 'Movilidad & fuerza',
      description: 'Combina flexibilidad y potencia para un cuerpo funcional.',
    },
  ]

  return (
    <section id="programas" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">
            Programas & planes para habitar tu cuerpo
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Entrená con propósito, escuchando tu cuerpo y construyendo hábitos que puedas sostener. Tu cuerpo es un lugar donde Dios habita.
          </p>
        </div>

        {/* ÍNTEGRO - Featured Program */}
        <div className="mb-16">
          <div className="relative bg-gradient-to-br from-sage-600 to-sage-700 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-48 -translate-x-48" />
            
            <div className="relative grid md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6 text-white">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                  <Sparkles size={16} />
                  Programa principal
                </div>

                <div>
                  <h3 className="font-serif text-5xl md:text-6xl mb-3">
                    ÍNTEGRO
                  </h3>
                  <p className="text-2xl text-sage-100 font-light">
                    Un plan para ordenar tu vida desde adentro hacia afuera
                  </p>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-xl">Duración:</span>
                  <span className="text-3xl font-semibold">4 semanas</span>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <p className="text-lg italic leading-relaxed">
                    "Tu cuerpo no es tu enemigo. Es un lugar que Dios eligió habitar."
                  </p>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a
                    href="https://wa.me/5491112345678?text=Hola%20Sofi!%20Quiero%20sumarme%20a%20ÍNTEGRO"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-sage-600 rounded-full hover:bg-beige-50 transition-all duration-300 font-semibold shadow-xl"
                  >
                    Quiero sumarme a ÍNTEGRO
                  </a>
                  <a
                    href="https://wa.me/5491112345678?text=Hola%20Sofi!%20Quiero%20consultar%20sobre%20ÍNTEGRO"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white border-2 border-white rounded-full hover:bg-white/10 transition-all duration-300"
                  >
                    Consultar disponibilidad
                  </a>
                </div>
              </div>

              {/* Right Content - Features */}
              <div className="space-y-4">
                <h4 className="text-2xl font-serif text-white mb-6">
                  Qué incluye:
                </h4>
                <div className="space-y-3">
                  {integroFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-white rounded-full flex items-center justify-center mt-1">
                        <Check className="text-sage-600" size={16} />
                      </div>
                      <span className="text-white text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Otros Planes */}
        <div>
          <h3 className="font-serif text-3xl text-gray-900 mb-8 text-center">
            Otros planes disponibles
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {otrosPlanes.map((plan, index) => {
              const Icon = plan.icon
              return (
                <div
                  key={index}
                  className="bg-beige-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-sage-200 transition-colors">
                    <Icon className="text-sage-600" size={24} />
                  </div>
                  <h4 className="font-serif text-xl text-gray-900 mb-2">
                    {plan.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {plan.description}
                  </p>
                </div>
              )
            })}
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="https://wa.me/5491112345678?text=Hola%20Sofi!%20Quiero%20conocer%20más%20sobre%20los%20planes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-sage-600 text-white rounded-full hover:bg-sage-700 transition-all duration-300 font-medium"
            >
              Ver todos los planes disponibles
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
