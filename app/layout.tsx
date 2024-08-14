import type { Metadata } from "next";
import { Great_Vibes, Inter, Roboto, Sacramento } from "next/font/google";
import "./globals.css";

const vibes = Great_Vibes({
  weight: "400",
  variable: "--font-vibes",
  subsets: ["latin-ext", "latin", "vietnamese"],
});
const roboto = Roboto({
  subsets: ["cyrillic"],
  weight: "400",
  variable: "--font-roboto",
  style: ["normal", "italic"],
});
const sacramento = Sacramento({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sacramento",
});

const baseUrl = process.env.MY_URL;

export const metadata: Metadata = {
  metadataBase: new URL(`${baseUrl}`),
  title: "Dev Notes",
  description: "My notes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${vibes.variable} ${sacramento.variable} ${roboto.variable}`}
      >
        <main className="font-roboto">{children}</main>
      </body>
    </html>
  );
}
