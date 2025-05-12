import type { Metadata } from "next";
import "./globals.css";

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
      <body>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
