import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const baseUrl = new URL(`${protocol}://${host}`);

  return {
    metadataBase: baseUrl,
    title: "TrainLab — Capacidades para un mundo en transformación",
    description:
      "Formación, capacitación y entrenamiento a medida para organizaciones, equipos y personas.",
    openGraph: {
      title: "TrainLab — La IA cambió el mundo. Tu equipo, ¿está listo?",
      description:
        "Desarrollamos las capacidades que las organizaciones necesitan para competir en entornos de transformación acelerada.",
      type: "website",
      locale: "es_AR",
      url: baseUrl,
      siteName: "TrainLab",
      images: [{ url: new URL("/og.png", baseUrl).toString(), width: 1659, height: 948, alt: "TrainLab" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "TrainLab — Capacidades para el cambio",
      description: "Formación para un mundo en transformación.",
      images: [new URL("/og.png", baseUrl).toString()],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
