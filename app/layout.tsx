import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DESTROY - Créateur Alternatif",
  description: "Portfolio artistique de DESTROY - Tattoo, couture et créations alternatives",
  keywords: ["destroy", "tattoo", "couture", "art alternatif", "galerie"],
  authors: [{ name: "DESTROY" }],
  openGraph: {
    title: "DESTROY - Créateur Alternatif",
    description: "Portfolio artistique de DESTROY - Tattoo, couture et créations alternatives",
    type: "website",
  },
  // Optimisations mobile
  applicationName: "DESTROY",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "DESTROY",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover", // Pour iPhone X et plus récents
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        {/* Préconnexion aux domaines externes pour améliorer les performances */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body className="font-sans antialiased bg-white text-black">
        {children}
      </body>
    </html>
  );
}
