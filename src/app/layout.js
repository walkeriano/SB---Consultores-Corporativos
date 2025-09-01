import { Geist, Geist_Mono, Lato } from "next/font/google";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato", // nombre de variable CSS
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"], // los pesos que quieras usar
});

export const metadata = {
  title: "SB - Consultores Corporativos",
  description: "SB - Asesoría y Consultoría Corporativa legal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${lato.variable}`}>
        {children}
      </body>
    </html>
  );
}
