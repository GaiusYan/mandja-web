import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/mandja-web/_components/navbar";


export const metadata: Metadata = {
  title: "Mandja Web",
  description: "Application culturelle de Mandja",
  icons: {
    icon: "/mandja-web.png",
    shortcut: "/mandja-web.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <Navbar />
        <main className="pt-19">
          {children}
        </main>
      </body>
    </html>
  );
}
