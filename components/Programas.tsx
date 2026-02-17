'use client'

import { Check, Sparkles, Dumbbell, MessageCircle } from 'lucide-react'

export default function Programas() {
  const integroIdealPara = [
    'Querés entrenar sin culpa ni exigencia extrema',
    'Buscás orden, constancia y equilibrio',
    'Querés mejorar tu relación con tu cuerpo y con la comida',
  ]

  const integroFeatures = [
    'Rutina de entrenamiento personalizada',
    'Plan nutricional personalizado',
    'Recetario + menús simples',
    '2 consultas nutricionales',
    'Contacto directo con Sofi todo el mes',
    '1 videollamada de bienvenida',
    'Desafíos semanales',
  ]

  const fullBodyIdealPara = [
    'Entrenás en gimnasio o en tu casa',
    'Querés fuerza, tono y funcionalidad',
    'Buscás una rutina clara y bien estructurada',
  ]

  const fullBodyIncluye = [
    'Rutina full body',
    'Ejercicios explicados',
    'Organización simple y efectiva',
  ]

  const piernasIdealPara = [
    'Querés fortalecer tren inferior',
    'Buscás mejorar fuerza y estabilidad',
    'Querés llevar tus piernas al siguiente nivel',
  ]

  const piernasIncluye = [
    'Rutina enfocada en piernas y glúteos',
    '3 días de entrenamiento',
  ]

  return (
    <section id="programas" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">
            Programas
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              No creo en planes extremos ni en cuerpos perfectos.
            </p>
            <p>
              Creo en procesos reales, hábitos sostenibles y en volver a habitarte con amor.
            </p>
            <p className="font-semibold text-sage-600">
              ÍNTEGRO es el corazón de mi forma de acompañar
            </p>
          </div>
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
                  <p className="text-xl text-sage-100 font-light">
                    Programa de entrenamiento, hábitos y nutrición consciente
                  </p>
                </div>

                {/* Ideal para vos si */}
                <div>
                  <h4 className="text-xl font-semibold mb-3">Ideal para vos si:</h4>
                  <div className="space-y-2">
                    {integroIdealPara.map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <span className="text-sage-200">•</span>
                        <span className="text-white/90">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Content - Incluye */}
              <div className="space-y-4">
                <h4 className="text-2xl font-semibold text-white mb-6">
                  Incluye:
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

            {/* Mensaje final ÍNTEGRO */}
            <div className="mt-8 text-center space-y-6">
              <div className="space-y-2">
                <p className="text-white text-lg">
                  ÍNTEGRO no busca cambiar tu cuerpo rápido.
                </p>
                <p className="text-white text-lg font-semibold">
                  Busca que aprendas a cuidarlo para siempre.
                </p>
              </div>
              
              <a
                href="https://wa.me/5491112345678?text=Hola%20Sofi!%20Quiero%20sumarme%20a%20ÍNTEGRO"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-4 bg-white text-sage-600 rounded-full hover:bg-beige-50 transition-all duration-300 font-semibold shadow-xl text-lg"
              >
                Quiero sumarme a ÍNTEGRO
              </a>
            </div>
          </div>
        </div>

        {/* Otras Opciones */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="font-serif text-3xl md:text-4xl text-gray-900 mb-4">
              OTRAS OPCIONES
            </h3>
            <p className="text-lg text-gray-600">
              Si hoy solo necesitás una rutina puntual,<br />
              también tengo estas opciones 👇
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {/* Full Body */}
            <div className="bg-beige-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-sage-100 rounded-full flex items-center justify-center">
                  <Dumbbell className="text-sage-600" size={28} />
                </div>
                <h4 className="font-serif text-3xl text-gray-900">
                  Full body
                </h4>
              </div>

              <div className="space-y-6">
                <div>
                  <h5 className="font-semibold text-gray-900 mb-3">Ideal para vos si:</h5>
                  <div className="space-y-2">
                    {fullBodyIdealPara.map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <span className="text-sage-600">•</span>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-900 mb-3">Incluye:</h5>
                  <div className="space-y-2">
                    {fullBodyIncluye.map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="text-sage-600 flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="https://wa.me/5491112345678?text=Hola%20Sofi!%20Quiero%20el%20plan%20Full%20Body"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-sage-600 text-white rounded-full hover:bg-sage-700 transition-all duration-300 font-medium"
                >
                  🔘 Quiero este plan
                </a>
              </div>
            </div>

            {/* Piernas & Glúteos */}
            <div className="bg-beige-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-sage-100 rounded-full flex items-center justify-center">
                  <Dumbbell className="text-sage-600" size={28} />
                </div>
                <h4 className="font-serif text-3xl text-gray-900">
                  Piernas & Glúteos
                </h4>
              </div>

              <div className="space-y-6">
                <div>
                  <h5 className="font-semibold text-gray-900 mb-3">Ideal para vos si:</h5>
                  <div className="space-y-2">
                    {piernasIdealPara.map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <span className="text-sage-600">•</span>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-900 mb-3">Incluye:</h5>
                  <div className="space-y-2">
                    {piernasIncluye.map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="text-sage-600 flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="https://wa.me/5491112345678?text=Hola%20Sofi!%20Quiero%20el%20plan%20Piernas%20y%20Glúteos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-sage-600 text-white rounded-full hover:bg-sage-700 transition-all duration-300 font-medium"
                >
                  Elegir este plan
                </a>
              </div>
            </div>
          </div>

          {/* CTA Final */}
          <div className="bg-gradient-to-br from-beige-50 to-sage-50 rounded-3xl p-8 md:p-12 text-center max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-xl text-gray-900">
                  Si no sabés qué programa elegir,
                </p>
                <p className="text-xl font-semibold text-sage-700">
                  escribime y lo vemos juntas
                </p>
              </div>
              <p className="text-lg text-gray-700">
                No estás sola en este proceso.
              </p>
              <a
                href="https://wa.me/5491112345678?text=Hola%20Sofi!%20Necesito%20ayuda%20para%20elegir%20un%20programa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
              >
                <MessageCircle size={24} />
                Consultar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
