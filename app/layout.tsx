
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cocktail Menu - Gerardo's Bar",
  description:
    "A collection of cocktail recipies.From classic cocktails to unique creations, find your perfect drink here.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  keywords:
    "cocktail recipes, mixed drinks, alcoholic beverages, cocktails, drink ideas",
  authors: {
    name: "Raul Ramirez",
    url: "https://us-central1-drinkapi-9006c.cloudfunctions.net/drinkAPI",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
         {children}
        </main>
      </body>
    </html>
  );
}
