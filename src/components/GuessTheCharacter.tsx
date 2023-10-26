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
  tip: string;
}

const characters: Character[] = [
  {
    name: "chucky",
    image: chuckyImage,
    found: false,
    tip: "a famous puppet with a killer mind",
  },
  {
    name: "dracula",
    image: draculaImage,
    found: false,
    tip: "the most famous vampire",
  },
  {
    name: "frankenstein",
    image: frankensteinImage,
    found: false,
    tip: "a sad monster created by several human dead body parts",
  },
  {
    name: "freddy krueger",
    image: freddyImage,
    found: false,
    tip: "an ugly killer who attacks teenagers in their dreams",
  },
  {
    name: "ghostface",
    image: ghostfaceImage,
    found: false,
    tip: "a serial killer who likes to talk on the phone",
  },
  {
    name: "jack o'lantern",
    image: jackImage,
    found: false,
    tip: "the symbol of Halloween, the face on the pumpkins",
  },
  {
    name: "jason voorhees",
    image: jasonImage,
    found: false,
    tip: "the famous Camp Crystal Lake serial killer",
  },
  {
    name: "jigsaw",
    image: jigsawImage,
    found: false,
    tip: "he likes to play games",
  },
  {
    name: "mummy",
    image: mummyImage,
    found: false,
    tip: "an undead creature wrapped in bandage",
  },
  {
    name: "pennywise",
    image: pennywiseImage,
    found: false,
    tip: "an evil entity that feeds on fear",
  },
  {
    name: "witch",
    image: witchImage,
    found: false,
    tip: "a practitioner of witchcraft",
  },
  {
    name: "zombie",
    image: zombieImage,
    found: false,
    tip: "an undead revenant created by reanimating a corpse",
  },
];

const GuessTheCharacter = () => {
  const [character, setCharacter] = useState<Character | null>(null);
  const [gameBeaten, setGameBeaten] = useState(false);
  const [tries, setTries] = useState(1);

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

  useEffect(() => {
    if (character?.name) {
      for (let i = 0; i < character!.name.length; i++) {
        if (document.getElementById(`tip-${i + 1}`) as HTMLDivElement) {
          (document.getElementById(
            `tip-${i + 1}`,
          ) as HTMLDivElement)!.innerText = "";
        }
      }
      (
        document.getElementById("character-tip") as HTMLSpanElement
      ).style.display = "none";
      (
        document
          .getElementById("character-tip")!
          .parentElement!.querySelector("img") as HTMLImageElement
      ).alt = "light-off";
      (
        document
          .getElementById("character-tip")!
          .parentElement!.querySelector("img") as HTMLImageElement
      ).srcset = "/static/images/guess/light-off.webp";
      (document.getElementById("giveup") as HTMLDivElement).style.display =
        "none";
    }
  }, [character]);

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
          setTries(1);
        } else if (
          mixedCharacters.every(
            (char) => char.found === mixedCharacters[i].found,
          )
        ) {
          setGameBeaten(true);
        }
      }
    } else {
      for (let i = 0; i < character!.name.length; i++) {
        for (let j = 0; j < character!.name.length; j++) {
          if (
            Array.from(character!.name)[i] === Array.from(inputText.value)[j]
          ) {
            (document.getElementById(
              `tip-${i + 1}`,
            ) as HTMLDivElement)!.innerText = character!.name[i];
          }
        }
      }
      setTries((prev) => prev + 1);
      if (tries === 3) {
        (document.getElementById("giveup") as HTMLDivElement).style.display =
          "block";
      }
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

  const handleTip = (e: React.MouseEvent<HTMLDivElement>) => {
    (e.currentTarget.children[0] as HTMLImageElement).alt === "light-off"
      ? (((e.currentTarget.children[0] as HTMLImageElement).alt = "light-on"),
        ((e.currentTarget.children[0] as HTMLImageElement).srcset =
          "/static/images/guess/light-on.webp"))
      : (((e.currentTarget.children[0] as HTMLImageElement).alt = "light-off"),
        ((e.currentTarget.children[0] as HTMLImageElement).srcset =
          "/static/images/guess/light-off.webp"));

    const characterTip = document.getElementById(
      "character-tip",
    ) as HTMLSpanElement;

    characterTip.style.display === "none"
      ? (characterTip.style.display = "block")
      : (characterTip.style.display = "none");
  };

  const showCharacterName = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = e.currentTarget.children[0] as HTMLAudioElement;
    for (let i = 0; i < character!.name.length; i++) {
      (document.getElementById(`tip-${i + 1}`) as HTMLDivElement)!.innerText =
        character!.name[i];
    }
    audio.play();
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
        <div
          className={`${
            gameBeaten ? "hidden" : "flex"
          } flex-col items-center gap-[1em]`}
        >
          <div onClick={handleTip}>
            <Image
              className="transition-all cursor-pointer"
              src="/static/images/guess/light-off.webp"
              alt="light-off"
              width={50}
              height={50}
            />
          </div>
          {character && (
            <>
              <span
                id="character-tip"
                className="text-[#ffffff] tracking-[.1em]"
                style={{ display: "none" }}
              >
                {character.tip}
              </span>
              <div className="flex gap-[.2em] md:gap-[.5em]">
                {Array.from(character.name).map((letter, index) => (
                  <div
                    id={`tip-${index + 1}`}
                    key={index}
                    className="w-[1em] h-[2em] border-solid border-[#ffffff] border-[.2em] border-t-0 border-l-0 border-r-0 uppercase md:w-[1.2em]"
                  ></div>
                ))}
              </div>
            </>
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
      <div
        id="giveup"
        className={`${
          !gameBeaten && "hidden"
        } bg-[#ffffff] text-[1.2em] py-[.5em] px-[2em] mb-[2em] rounded-full transition-all cursor-pointer hover:text-[#ffffff] hover:bg-[#ff6400]`}
        onClick={showCharacterName}
      >
        Want to give up?
        <audio src="/static/audio/witch.MP3" />
      </div>
    </article>
  );
};

export default GuessTheCharacter;
