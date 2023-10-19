"use client";

import Image, { StaticImageData } from "next/image";
import { FormEvent, useEffect, useState } from "react";

import chuckyImage from "@/assets/images/guess/chucky.webp";
import draculaImage from "@/assets/images/guess/dracula.webp";
import frankensteinImage from "@/assets/images/guess/frankenstein.webp";
import freddyImage from "@/assets/images/guess/freddy.webp";
import ghostfaceImage from "@/assets/images/guess/ghostface.webp";
import jackImage from "@/assets/images/guess/jack.webp";
import jasonImage from "@/assets/images/guess/jason.webp";
import jigsawImage from "@/assets/images/guess/jigsaw.webp";
import mummyImage from "@/assets/images/guess/mummy.webp";
import pennywiseImage from "@/assets/images/guess/pennywise.webp";
import witchImage from "@/assets/images/guess/witch.webp";
import zombieImage from "@/assets/images/guess/zombie.webp";

interface Character {
  name: string;
  image: StaticImageData;
  found: boolean;
}

const characters: Character[] = [
  { name: "chucky", image: chuckyImage, found: false },
  { name: "dracula", image: draculaImage, found: false },
  { name: "frankenstein", image: frankensteinImage, found: false },
  { name: "freddy kruger", image: freddyImage, found: false },
  { name: "ghostface", image: ghostfaceImage, found: false },
  { name: "jack o'lantern", image: jackImage, found: false },
  { name: "jason voorhess", image: jasonImage, found: false },
  { name: "jigsaw", image: jigsawImage, found: false },
  { name: "mummy", image: mummyImage, found: false },
  { name: "pennywise", image: pennywiseImage, found: false },
  { name: "witch", image: witchImage, found: false },
  { name: "zombie", image: zombieImage, found: false },
];

const GuessTheCharacter = () => {
  const [character, setCharacter] = useState<Character | null>(null);
  const [gameBeaten, setGameBeaten] = useState(false);

  const shuffleCharacters = (characters: Character[]) => {
    const shuffledCharacters: Character[] = [];
    let number = 0;
    while (number < characters.length) {
      const actualCharacter: Character =
        characters[Math.floor(Math.random() * characters.length)];
      if (!shuffledCharacters.includes(actualCharacter)) {
        shuffledCharacters.push(actualCharacter);
        number++;
      }
    }
    return shuffledCharacters;
  };

  const mixedCharacters: Character[] = shuffleCharacters(characters);

  useEffect(() => {
    setCharacter(mixedCharacters[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e?: FormEvent) => {
    e?.preventDefault();
    const inputText = document.querySelectorAll("input")[0];
    if (inputText.value === "") return;
    if (inputText.value.length >= 20) {
      alert("boo 2");
    }
    if (inputText.value === character!.name) {
      character!.found = true;

      for (let i = 0; i < mixedCharacters.length; i++) {
        if (!mixedCharacters[i].found) {
          setCharacter(mixedCharacters[i]);
        } else if (
          mixedCharacters.every(
            (char) => char.found === mixedCharacters[i].found,
          )
        ) {
          setGameBeaten(true);
        }
      }
    } else {
      console.log("boo");
    }
    inputText.value = "";
  };

  const resetGame = () => {
    for (let i = 0; i < characters.length; i++) {
      characters[i].found = false;
    }
    const newMixedCharacters: Character[] = shuffleCharacters(characters);
    setCharacter(newMixedCharacters[0]);
    setGameBeaten(false);
  };

  return (
    <article className="max-w-[75%] mx-auto flex flex-col items-center gap-[2em]">
      <h1 className="text-center text-[2em]">Guess The Character</h1>
      <section className="flex flex-col justify-center items-center gap-[2em]">
        <div className="border-solid border-[#FF6400] border-[.2em] flex justify-center max-w-[80%]">
          {character && (
            <Image
              src={character!.image}
              alt={character!.name}
              fetchPriority="high"
              priority
            />
          )}
        </div>
        <form
          onSubmit={handleSubmit}
          className="relative flex items-center justify-center w-[-webkit-fill-available] md:p-[2em]"
        >
          {gameBeaten ? (
            <input
              className="pl-[1em] pr-[3em] py-[.5em] border-solid border-[#FF6400] border-[.2em] w-full text-transparent"
              type="text"
              disabled
            />
          ) : (
            <input
              className="pl-[1em] pr-[3em] py-[.5em] border-solid border-[#FF6400] border-[.2em] w-full outline-none transition-all focus:border-[#ffa500]"
              type="text"
            />
          )}
        </form>
      </section>
      <div
        className={`${
          gameBeaten ? "block" : "hidden"
        } text-[2em] text-center flex flex-col`}
      >
        {gameBeaten && (
          <span>
            {" "}
            Congrats! <br /> You won the game!
          </span>
        )}
        <button
          className="transition-all hover:text-[#ffa500]"
          onClick={resetGame}
        >
          Play again!
        </button>
      </div>
    </article>
  );
};

export default GuessTheCharacter;
