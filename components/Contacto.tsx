'use client'

import { useState } from 'react'
import { Instagram, MessageCircle, Mail, Send, Heart } from 'lucide-react'

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí se puede integrar con un servicio de email
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contacto" className="py-24 bg-gradient-to-br from-beige-50 via-white to-sage-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
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
              href="https://wa.me/5491112345678?text=Hola%20Sofi!%20Me%20gustaría%20conocer%20más%20sobre%20tus%20programas"
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
              <div className="flex flex-col gap-3">
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
              <p className="text-lg text-gray-700 italic leading-relaxed flex items-start gap-3">
                <Heart className="text-sage-600 flex-shrink-0 mt-1" size={24} />
                <span>
                  "Que cada hábito te recuerde cuánto te ama Dios y cuánto vale tu vida."
                </span>
              </p>
            </div>
          </div>

          {/* Right Content - Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="font-serif text-3xl text-gray-900 mb-6">
              Enviame un mensaje
            </h3>

            {submitted && (
              <div className="mb-6 p-4 bg-sage-100 text-sage-800 rounded-lg">
                ¡Gracias por tu mensaje! Te responderé pronto. 💚
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-600 focus:border-transparent transition-all"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-600 focus:border-transparent transition-all"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-600 focus:border-transparent transition-all resize-none"
                  placeholder="Contame qué te gustaría saber..."
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-sage-600 text-white rounded-full hover:bg-sage-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
              >
                Enviar mensaje
                <Send size={20} />
              </button>
            </form>
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
