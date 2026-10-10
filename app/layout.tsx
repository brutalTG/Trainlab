import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const baseUrl = new URL(`${protocol}://${host}`);

  const shareText = "El mundo cambió. ¿Tu equipo está listo?";
  const shareImage = new URL("/og.png?v=el-mundo-cambio", baseUrl).toString();

  return {
    metadataBase: baseUrl,
    title: "TrainLab — Capacidades para un mundo en transformación",
    description:
      "Formación, capacitación y entrenamiento a medida para organizaciones, equipos y personas.",
    openGraph: {
      title: shareText,
      description: shareText,
      type: "website",
      locale: "es_AR",
      url: baseUrl,
      siteName: "TrainLab",
      images: [{ url: shareImage, width: 1659, height: 948, alt: shareText }],
    },
    twitter: {
      card: "summary_large_image",
      title: shareText,
      description: shareText,
      images: [{ url: shareImage, alt: shareText }],
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
