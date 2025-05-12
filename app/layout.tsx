import type { Metadata } from "next";
import "./globals.css";
import { Geist } from 'next/font/google'
 
const geist = Geist({
  subsets: ['latin'],
})
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
    <html lang="en" className={geist.className}>
      <body>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
