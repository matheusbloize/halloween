"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect } from "react";

interface Props {
  link: string;
  title: string;
  description: string;
  image: StaticImageData;
}

const GameLink = ({ link, title, description, image }: Props) => {
  useEffect(() => {
    if (
      (document.querySelector("#spook-audio") as HTMLAudioElement).currentTime >
      0
    ) {
      (document.querySelector("#spook-audio") as HTMLAudioElement).load();
    }
    if (
      (document.querySelector("#skeleton-audio") as HTMLAudioElement)
        .currentTime > 0
    ) {
      (document.querySelector("#skeleton-audio") as HTMLAudioElement).load();
    }
    if (
      (document.querySelector("#lullaby-audio") as HTMLAudioElement)
        .currentTime > 0
    ) {
      (document.querySelector("#lullaby-audio") as HTMLAudioElement).load();
    }
    if (
      (document.querySelector("#nightmare-audio") as HTMLAudioElement)
        .currentTime > 0
    ) {
      (document.querySelector("#nightmare-audio") as HTMLAudioElement).load();
    }
  }, []);

  const playSong = () => {
    switch (title) {
      case "Tic Tac Toe":
        if (document.querySelector("#skeleton-audio")) {
          const audio = document.querySelector(
            "#skeleton-audio",
          ) as HTMLAudioElement;
          audio.play();
        }
        break;
      case "Drag And Drop":
        if (document.querySelector("#lullaby-audio")) {
          const audio = document.querySelector(
            "#lullaby-audio",
          ) as HTMLAudioElement;
          audio.play();
        }
        break;
      case "Guess The Character":
        if (document.querySelector("#nightmare-audio")) {
          const audio = document.querySelector(
            "#nightmare-audio",
          ) as HTMLAudioElement;
          audio.play();
        }
        break;
      default:
        break;
    }
  };

  return (
    <Link onClick={playSong} href={link}>
      <article className="relative bg-[#f6f6f6] border-solid border-[#FF6400] border-[.2em] h-fit transition-all">
        <div className="h-[20em] flex justify-center">
          <Image
            priority
            fetchPriority="high"
            className="w-full"
            src={image}
            alt={title}
          />
        </div>
        <div className="flex justify-end">
          <div className="max-w-[90%] mx-auto ">
            <span className="text-center block text-[1.5em]">{title}</span>
            <p className="text-justify md:text-[1.2em]">{description}</p>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default GameLink;
