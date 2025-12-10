# Landing Page - Sofía Tarela

Landing page profesional, cálida y femenina para Sofía Tarela, enfocada en bienestar integral, fe y fitness.

## 🌿 Características

- **Diseño minimalista y cálido**: Estética femenina con paleta beige, blanco y verde suave
- **Totalmente responsive**: Optimizada para todos los dispositivos
- **Navegación fluida**: Scroll suave entre secciones con anclas
- **Formulario de contacto**: Integración lista para servicios de email
- **WhatsApp directo**: Botones de contacto inmediato
- **SEO optimizado**: Meta tags y estructura semántica

## 📌 Secciones

1. **Hero / Inicio**: Presentación impactante con CTA principal
2. **Sobre Sofi**: Historia personal y credenciales
3. **Bienestar & Fe**: Guías y recursos espirituales
4. **Programas & Planes**: ÍNTEGRO (destacado) + otros planes
5. **Testimonios**: Historias reales de clientes
6. **Preguntas Frecuentes**: FAQ con acordeón interactivo
7. **Contacto & Redes**: Formulario + links a redes sociales

## 🚀 Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Iniciar servidor de desarrollo:
```bash
npm run dev
```

3. Abrir [http://localhost:3000](http://localhost:3000) en el navegador

## 📦 Estructura del Proyecto

```
sofi/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx             # Página home
│   └── globals.css          # Estilos globales
├── components/
│   ├── Navigation.tsx       # Navegación responsive
│   ├── Hero.tsx             # Sección Hero
│   ├── SobreSofi.tsx        # Sobre Sofía
│   ├── BienestarFe.tsx      # Bienestar & Fe
│   ├── Programas.tsx        # Programas (ÍNTEGRO + otros)
│   ├── Testimonios.tsx      # Testimonios
│   ├── FAQ.tsx              # Preguntas frecuentes
│   └── Contacto.tsx         # Contacto y footer
├── assets/
│   ├── fotosofi1.jpg        # Foto Hero
│   ├── fotosofi2.jpg        # Foto Sobre Sofi
│   └── fotosofi3.jpg        # Foto Testimonios
├── tailwind.config.js       # Configuración Tailwind
├── tsconfig.json            # Configuración TypeScript
└── package.json             # Dependencias

```

## 🎨 Paleta de Colores

- **Blanco**: #FFFFFF
- **Beige 50**: #FAF8F5
- **Beige 100**: #F5F1EB
- **Sage 50**: #F5F8F5
- **Sage 600**: #8BB48B (verde suave)

## ✏️ Personalización

### Cambiar número de WhatsApp

Buscar y reemplazar `5491112345678` con tu número real en:
- `components/Programas.tsx`
- `components/Contacto.tsx`

Formato: código de país + número sin espacios ni caracteres especiales.

### Actualizar redes sociales

En `components/Contacto.tsx`:
- Instagram: `@sofitarela`
- Email: `sofi@sofitarela.com`

### Agregar nuevas guías o planes

Editar los arrays en:
- `components/BienestarFe.tsx` (guías)
- `components/Programas.tsx` (planes)

## 🖼️ Imágenes

Las imágenes se encuentran en `/assets/`:
- `fotosofi1.jpg`: Hero principal
- `fotosofi2.jpg`: Sección "Sobre Sofi"
- `fotosofi3.jpg`: Sección Testimonios

Para agregar más imágenes, colócalas en la carpeta `assets/` y referéncialas como `/assets/nombre.jpg`

## 🛠️ Tecnologías

- **Next.js 14**: Framework React
- **TypeScript**: Tipado estático
- **TailwindCSS**: Estilos utility-first
- **Lucide React**: Iconos modernos
- **Google Fonts**: Playfair Display + Inter

## 📱 Deploy

### Vercel (Recomendado)

1. Push a GitHub
2. Conectar repositorio en [Vercel](https://vercel.com)
3. Deploy automático

### Netlify

1. Build command: `npm run build`
2. Publish directory: `.next`

## 📄 Licencia

© 2024 Sofía Tarela. Todos los derechos reservados.
