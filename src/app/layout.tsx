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
        className={`${Star_Wisher.className} bg-[#010101] text-[#FF6400] max-w-[90%] mx-auto overflow-x-hidden`}
      >
        {children}
        <audio id="spook-audio" loop src="/static/audio/Spook - PeriTune.MP3" />
        <audio
          id="skeleton-audio"
          loop
          src="/static/audio/Skeleton Dance - Myuu.MP3"
        />
        <audio
          id="lullaby-audio"
          loop
          src="/static/audio/Sweet Little Lullaby - Darren Curtis.MP3"
        />
        <audio
          id="nightmare-audio"
          loop
          src="/static/audio/Reflex Nightmare - Naoya Sakamata.MP3"
        />
      </body>
    </html>
  );
}
