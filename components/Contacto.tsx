'use client'

import { Instagram, MessageCircle, Mail, Heart } from 'lucide-react'

export default function Contacto() {
  return (
    <section id="contacto" className="py-24 bg-gradient-to-br from-beige-50 via-white to-sage-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">
                Conectemos
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Si tenés dudas, querés colaborar o sentís que este puede ser tu próximo paso, escribíme. Me encanta acompañar procesos.
              </p>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/598092333305?text=Hola%20Sofi!%20Me%20gustaría%20conocer%20más%20sobre%20tus%20programas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-5 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl group font-semibold text-lg"
            >
              <MessageCircle className="group-hover:scale-110 transition-transform" size={24} />
              Escribirme por WhatsApp
            </a>

            {/* Redes Sociales */}
            <div className="space-y-4 pt-8">
              <h3 className="font-serif text-2xl text-gray-900">
                Seguime en redes
              </h3>
              <div className="flex flex-col items-center gap-3">
                <a
                  href="https://instagram.com/sofitarela"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-gray-700 hover:text-sage-600 transition-colors group"
                >
                  <Instagram size={24} />
                  <span className="font-medium">@sofitarela</span>
                </a>
                <a
                  href="mailto:sofi@sofitarela.com"
                  className="inline-flex items-center gap-3 text-gray-700 hover:text-sage-600 transition-colors group"
                >
                  <Mail size={24} />
                  <span className="font-medium">sofi@sofitarela.com</span>
                </a>
              </div>
            </div>

            {/* Frase final */}
            <div className="pt-8 border-t border-gray-200">
              <p className="text-lg text-gray-700 italic leading-relaxed flex items-center justify-center gap-3">
                <Heart className="text-sage-600 flex-shrink-0 mt-1" size={24} />
                <span>
                  "Que cada hábito te recuerde cuánto te ama Dios y cuánto vale tu vida."
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">
            © 2024 Sofía Tarela. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </section>
  )
}
