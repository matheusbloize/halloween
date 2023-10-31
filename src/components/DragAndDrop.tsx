"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

import eyesImage from "@/assets/images/drag/eyes.png";
import jackImage from "@/assets/images/drag/jack.jpg";

const DragAndDrop = () => {
  const timerRef = useRef<HTMLDivElement | null>(null);
  const [actualDiv, setActualDiv] = useState("");
  const [isReady, setIsReady] = useState(false);
  const areaLength = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const [usedDivs, setUsedDivs] = useState<unknown[]>([]);
  const [timerSeconds, setTimerSeconds] = useState<number>(15);
  const [win, setWin] = useState(false);
  const [lost, setLost] = useState(false);

  const shuffleNumbers = () => {
    const arr = areaLength;
    const newArr: number[] = [];
    let number = 0;
    while (number < arr.length) {
      const randomNumber = arr[Math.floor(Math.random() * arr.length)];
      if (!newArr.includes(randomNumber)) {
        newArr.push(randomNumber);
        number++;
      }
    }
    return newArr;
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const mixedNumbersDrop = useMemo(() => shuffleNumbers(), []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const mixedNumbersDrag = useMemo(() => shuffleNumbers(), []);

  useEffect(() => {
    if (usedDivs.length === 10) {
      setWin(true);
      const section = document.querySelector("#section") as HTMLDivElement;
      section.style.display = "none";
    }
  }, [usedDivs]);

  const handleDragStart = (e: React.DragEvent) => {
    setActualDiv((e.target as HTMLDivElement).id);
  };

  const jackLaugh = () => {
    if (document.querySelector("#jack-audio")) {
      const audio = document.querySelector("#jack-audio") as HTMLAudioElement;
      audio.play();
    }
  };

  const witchLaugh = () => {
    if (document.querySelector("#witch-audio")) {
      const audio = document.querySelector("#witch-audio") as HTMLAudioElement;
      audio.play();
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    if (
      (e.currentTarget as HTMLDivElement).getAttribute("area-used") === "false"
    ) {
      if (
        (e.currentTarget as HTMLDivElement).id[
          (e.currentTarget as HTMLDivElement).id.length - 1
        ] === actualDiv[actualDiv.length - 1]
      ) {
        (e.currentTarget as HTMLDivElement).style.filter = "none";
        (e.currentTarget as HTMLDivElement).setAttribute("area-used", "true");
        setUsedDivs([...usedDivs, e.currentTarget]);
        document.getElementById(actualDiv)!.style.filter = "blur(5px)";
        document.getElementById(actualDiv)!.style.pointerEvents = "none";
      } else {
        witchLaugh();
      }
    } else {
      witchLaugh();
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (timerSeconds <= 0 && isReady) {
      if (win) return;
      setLost(true);
      jackLaugh();
      if (timerRef.current) timerRef.current.style.opacity = "0";
      const section = document.querySelector("#section") as HTMLDivElement;
      section.style.display = "none";
      return;
    }

    if (isReady) {
      const timeout = setTimeout(() => {
        setTimerSeconds(timerSeconds - 1);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [timerSeconds, isReady, win]);

  const startGame = () => {
    setIsReady(true);
    if (timerRef.current) timerRef.current.style.opacity = "1";
  };

  const resetGame = () => {
    setIsReady(false);
    setWin(false);
    setLost(false);
    setTimerSeconds(10);
    setUsedDivs([]);
    const section = document.querySelector("#section") as HTMLDivElement;
    section.style.display = "grid";
  };

  return (
    <article className="relative max-w-[75%] mx-auto flex flex-col items-center gap-[2em]">
      {!isReady && (
        <>
          <h1 className="text-center text-[2em]">Drag And Drop</h1>
          <div
            className="absolute z-10 bg-[#ffffff] text-[#010101] top-[5em] py-[1em] px-[2em] rounded-full transition-all cursor-pointer hover:bg-[#ff6400]"
            onClick={() => startGame()}
          >
            Start Game
          </div>
        </>
      )}
      {!win && (
        <div
          ref={timerRef}
          className={`${
            isReady ? "opacity-100" : "opacity-0"
          } absolute z-20 text-[1.5em] text-[#ffffff] tracking-[.25em]`}
        >
          {timerSeconds}
        </div>
      )}
      <div className={`${isReady ? "opacity-100" : "opacity-0"} md:mt-[-20em]`}>
        <Image
          className={`${lost && "animate-lost"} mix-blend-hard-light`}
          src={jackImage}
          alt="jack o'lantern"
        />
        <Image
          className={`${
            lost && "hidden"
          } mix-blend-hard-light absolute z-10 top-[-20em] animate-bright`}
          src={eyesImage}
          alt="eyes"
        />
      </div>
      <section
        id="section"
        className="mt-[-8em] grid grid-cols-4 gap-x-[2.5em] w-fit min-w-[15em]"
      >
        {isReady &&
          mixedNumbersDrop &&
          mixedNumbersDrop.map((drop) => (
            <div
              key={drop}
              id={`droppable-${drop}`}
              area-used="false"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              className={`relative sepia transition-all w-[3em] h-[3em] md:w-[5em] md:h-[5em] flex items-center justify-center z-10`}
              style={{ margin: `${Math.floor(Math.random() * 2)}em` }}
            >
              <Image
                src={`/static/images/drag/drag_${drop}.webp`}
                alt={`droppable-${drop}`}
                width={80}
                height={80}
              />
            </div>
          ))}
        {isReady &&
          mixedNumbersDrag &&
          mixedNumbersDrag.map((drag) => (
            <div
              key={drag}
              id={`draggable-${drag}`}
              draggable
              onDragStart={handleDragStart}
              className={`brightness-150 select-none transition-all cursor-pointer w-[3em] h-[3em] md:w-[5em] md:h-[5em] flex items-center justify-center z-10`}
              style={{ margin: `${Math.floor(Math.random() * 2)}em` }}
            >
              <Image
                src={`/static/images/drag/drag_${drag}.webp`}
                alt={`draggable-${drag}`}
                width={80}
                height={80}
              />
            </div>
          ))}
      </section>
      {win && (
        <div className="flex flex-col text-[2em]">
          <span>You beat the game!</span>
          <span>Congrats!</span>
          <button
            className="transition-all hover:text-[#ff660080]"
            onClick={resetGame}
          >
            Play again!
          </button>
        </div>
      )}
      {lost && (
        <div className="relative z-10 flex flex-col text-[2em]">
          <span>You lost the game!</span>
          <span>Be faster next time!</span>
          <button
            className="transition-all hover:text-[#ff660080]"
            onClick={resetGame}
          >
            Play again!
          </button>
        </div>
      )}
      <audio id="jack-audio" src="/static/audio/jack.MP3"></audio>
      <audio id="witch-audio" src="/static/audio/witch.MP3"></audio>
    </article>
  );
};

export default DragAndDrop;
