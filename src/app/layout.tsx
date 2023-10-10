import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const Star_Wisher = localFont({
  src: "../assets/fonts/star-wisher-star-wisher-svg-400.otf",
});

export const metadata: Metadata = {
  title: "Halloween",
  description: "Beware of scares and have fun",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${Star_Wisher.className} bg-[#010101] text-[#FF6400] max-w-[90%] mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}
