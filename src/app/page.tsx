"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import jackImage from "@/assets/images/jack.webp";
import Navbar from "@/components/Navbar";

const Home = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [align, setAlign] = useState(false);

  useEffect(() => {
    audioRef.current = document.querySelector("audio")! as HTMLAudioElement;
    if (audioRef.current && audioRef.current.currentTime > 0) {
      const modalDiv = document.querySelectorAll("div")[0]! as HTMLDivElement;
      modalDiv.style.display = "none";
      const main = document.querySelector("main")! as HTMLDivElement;
      main.style.alignItems = "center";
      setAlign(true);
    }
  }, []);

  const removeModal = (e?: React.MouseEvent<HTMLDivElement>) => {
    (e?.target as HTMLDivElement).style.display = "none";
    const main = document.querySelector("main")! as HTMLDivElement;
    main.style.alignItems = "center";
    main.style.animation = "home 1s ease-out";
    const body = document.querySelector("body")! as HTMLBodyElement;
    body.style.overflowY = "scroll";
    const audio = document.querySelector("audio")! as HTMLAudioElement;
    audio.play();
    setAlign(true);
  };

  return (
    <main
      className={`flex ${
        align ? "flex-col" : "flex-row"
      } items-baseline justify-center group sm:flex-row`}
    >
      <div
        onClick={removeModal}
        className="bg-[#010101] absolute w-full h-[-webkit-fill-available] z-10 flex justify-center pt-[5em] text-[3em] animate-shine cursor-pointer"
      >
        Click to start
      </div>
      <div>
        <Image
          className="transition-all animate-shine"
          src={jackImage}
          alt="Jack O'Lantern"
          priority
        />
      </div>
      <div className="flex flex-col justify-center items-center relative">
        <h1 className="text-[3em] tracking-[.1em] md:text-[4em] lg:text-[5em]">
          Halloween
        </h1>
        <Navbar
          customHome="origin-right animate-navHome"
          customInfo="origin-center animate-navInfo"
          customGames="origin-top animate-navGames"
        />
      </div>
    </main>
  );
};

export default Home;
