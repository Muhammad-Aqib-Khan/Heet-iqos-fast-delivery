import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from './(components)/footer';
import Navbar from "./(components)/Navbar/navbar";
import { CartProvider } from "./(components)/CartContext";
import { Toaster } from "react-hot-toast"; // <== toast for "product added" messages

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IQOS HEETS Dubai",
  description: "Buy authentic IQOS and HEETS products in Dubai",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="flex flex-col min-h-screen">
        <CartProvider>
          <Navbar />         {/* Navbar always on top */}
          <Toaster position="top-center" reverseOrder={false} /> {/* Toast messages */}
          <main className="flex-grow">{children}</main>         {/* Dynamic page content */}
          <Footer />         {/* Footer always at bottom */}
        </CartProvider>
      </body>
    </html>
  );
}
