# TrainLab — One page institucional

Sitio independiente de WordPress, construido con Next.js y preparado para Vercel.

## Publicar en Vercel

1. Subir este proyecto a un repositorio de GitHub.
2. Importar el repositorio desde Vercel.
3. Vercel detectará la configuración incluida y ejecutará el build de Next.js.
4. Conectar el dominio definitivo desde la configuración del proyecto.

No requiere base de datos ni variables de entorno.

## Desarrollo local

Requiere Node.js 22 o posterior.

```bash
npm install
npm run dev
```

Abrir `http://localhost:3000`.

## Verificación

```bash
npm run build:vercel
```

## Contenido principal

- `app/page.tsx`: estructura y textos.
- `app/globals.css`: diseño y responsive.
- `public/media`: videos e imágenes optimizados.
- `public/fonts`: tipografías locales.
- `public/og.png`: imagen al compartir el enlace.

Antes de publicar, conviene confirmar el canal de contacto definitivo y los cargos institucionales de cada integrante del Consejo.
