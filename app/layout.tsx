import type { Metadata } from "next";
import { Courgette, Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const courgette = Courgette({
  variable: "--font-courgette",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kevin Solar — Frontend & Full Stack Developer",
  description:
    "Developer focused on building solid, intuitive web experiences — from frontend to backend.",
  openGraph: {
    title: "Kevin Solar · Dev Portfolio",
    description:
      "Developer focused on building solid, intuitive web experiences — from frontend to backend.",
    type: "website",
    url: "https://present.bigfishco.com.br/jobs/",
    siteName: "Kevin Solar",
  },
};

const languageDetectionScript = `
(function () {
  try {
    var storageKey = "kevin-solar-portfolio-language";
    var savedLocale = window.localStorage.getItem(storageKey);
    var locale = savedLocale === "pt" || savedLocale === "en" ? savedLocale : null;

    if (!locale) {
      var browserLanguages = navigator.languages && navigator.languages.length > 0
        ? navigator.languages
        : [navigator.language || ""];

      locale = browserLanguages.some(function (language) {
        return String(language).toLowerCase().indexOf("pt") === 0;
      }) ? "pt" : "en";
    }

    document.documentElement.dataset.lang = locale;
    document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
  } catch (error) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetBrainsMono.variable} ${courgette.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        {children}
        <Script
          id="language-detection"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: languageDetectionScript }}
        />
      </body>
    </html>
  );
}
