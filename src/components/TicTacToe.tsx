"use client";

import { useState } from "react";

interface Player {
  name: string;
  symbol: string;
}

const player1: Player = {
  name: "player1",
  symbol: "X",
};

const player2: Player = {
  name: "player2",
  symbol: "O",
};

const TicTacToe = () => {
  const [actualTurn, setActualTurn] = useState<Player>(player1);
  const [winner, setWinner] = useState("");

  const resetGame = () => {
    const section = document.getElementById("section")!;
    for (let i = 0; i < section.children.length; i++) {
      (section.children[i].children[0] as HTMLSpanElement).innerText = "";
      (section.children[i] as HTMLDivElement).setAttribute(
        "selected-area",
        "false",
      );
      (section.children[i] as HTMLDivElement).style.cursor = "pointer";
      (section.children[i] as HTMLDivElement).style.pointerEvents = "auto";
    }
    setWinner("");
  };

  const checkWin = (currentTarget: HTMLElement) => {
    for (let i = 0; i < currentTarget.children.length; i++) {
      if (
        ((currentTarget.children[0].children[0] as HTMLSpanElement)
          .innerText === "X" &&
          (currentTarget.children[1].children[0] as HTMLSpanElement)
            .innerText === "X" &&
          (currentTarget.children[2].children[0] as HTMLSpanElement)
            .innerText === "X") ||
        ((currentTarget.children[0].children[0] as HTMLSpanElement)
          .innerText === "X" &&
          (currentTarget.children[3].children[0] as HTMLSpanElement)
            .innerText === "X" &&
          (currentTarget.children[6].children[0] as HTMLSpanElement)
            .innerText === "X") ||
        ((currentTarget.children[0].children[0] as HTMLSpanElement)
          .innerText === "X" &&
          (currentTarget.children[4].children[0] as HTMLSpanElement)
            .innerText === "X" &&
          (currentTarget.children[8].children[0] as HTMLSpanElement)
            .innerText === "X") ||
        ((currentTarget.children[1].children[0] as HTMLSpanElement)
          .innerText === "X" &&
          (currentTarget.children[4].children[0] as HTMLSpanElement)
            .innerText === "X" &&
          (currentTarget.children[7].children[0] as HTMLSpanElement)
            .innerText === "X") ||
        ((currentTarget.children[2].children[0] as HTMLSpanElement)
          .innerText === "X" &&
          (currentTarget.children[4].children[0] as HTMLSpanElement)
            .innerText === "X" &&
          (currentTarget.children[6].children[0] as HTMLSpanElement)
            .innerText === "X") ||
        ((currentTarget.children[2].children[0] as HTMLSpanElement)
          .innerText === "X" &&
          (currentTarget.children[5].children[0] as HTMLSpanElement)
            .innerText === "X" &&
          (currentTarget.children[8].children[0] as HTMLSpanElement)
            .innerText === "X") ||
        ((currentTarget.children[3].children[0] as HTMLSpanElement)
          .innerText === "X" &&
          (currentTarget.children[4].children[0] as HTMLSpanElement)
            .innerText === "X" &&
          (currentTarget.children[5].children[0] as HTMLSpanElement)
            .innerText === "X") ||
        ((currentTarget.children[6].children[0] as HTMLSpanElement)
          .innerText === "X" &&
          (currentTarget.children[7].children[0] as HTMLSpanElement)
            .innerText === "X" &&
          (currentTarget.children[8].children[0] as HTMLSpanElement)
            .innerText === "X")
      ) {
        setWinner(player1.name);
        setActualTurn(player1);
        (currentTarget.children[i] as HTMLDivElement).style.pointerEvents =
          "none";
      } else if (
        ((currentTarget.children[0].children[0] as HTMLSpanElement)
          .innerText === "O" &&
          (currentTarget.children[1].children[0] as HTMLSpanElement)
            .innerText === "O" &&
          (currentTarget.children[2].children[0] as HTMLSpanElement)
            .innerText === "O") ||
        ((currentTarget.children[0].children[0] as HTMLSpanElement)
          .innerText === "O" &&
          (currentTarget.children[3].children[0] as HTMLSpanElement)
            .innerText === "O" &&
          (currentTarget.children[6].children[0] as HTMLSpanElement)
            .innerText === "O") ||
        ((currentTarget.children[0].children[0] as HTMLSpanElement)
          .innerText === "O" &&
          (currentTarget.children[4].children[0] as HTMLSpanElement)
            .innerText === "O" &&
          (currentTarget.children[8].children[0] as HTMLSpanElement)
            .innerText === "O") ||
        ((currentTarget.children[1].children[0] as HTMLSpanElement)
          .innerText === "O" &&
          (currentTarget.children[4].children[0] as HTMLSpanElement)
            .innerText === "O" &&
          (currentTarget.children[7].children[0] as HTMLSpanElement)
            .innerText === "O") ||
        ((currentTarget.children[2].children[0] as HTMLSpanElement)
          .innerText === "O" &&
          (currentTarget.children[4].children[0] as HTMLSpanElement)
            .innerText === "O" &&
          (currentTarget.children[6].children[0] as HTMLSpanElement)
            .innerText === "O") ||
        ((currentTarget.children[2].children[0] as HTMLSpanElement)
          .innerText === "O" &&
          (currentTarget.children[5].children[0] as HTMLSpanElement)
            .innerText === "O" &&
          (currentTarget.children[8].children[0] as HTMLSpanElement)
            .innerText === "O") ||
        ((currentTarget.children[3].children[0] as HTMLSpanElement)
          .innerText === "O" &&
          (currentTarget.children[4].children[0] as HTMLSpanElement)
            .innerText === "O" &&
          (currentTarget.children[5].children[0] as HTMLSpanElement)
            .innerText === "O") ||
        ((currentTarget.children[6].children[0] as HTMLSpanElement)
          .innerText === "O" &&
          (currentTarget.children[7].children[0] as HTMLSpanElement)
            .innerText === "O" &&
          (currentTarget.children[8].children[0] as HTMLSpanElement)
            .innerText === "O")
      ) {
        setWinner(player2.name);
        setActualTurn(player1);
        (currentTarget.children[i] as HTMLDivElement).style.pointerEvents =
          "none";
      } else if (
        (currentTarget.children[0].children[0] as HTMLSpanElement).innerText !==
          "" &&
        (currentTarget.children[1].children[0] as HTMLSpanElement).innerText !==
          "" &&
        (currentTarget.children[2].children[0] as HTMLSpanElement).innerText !==
          "" &&
        (currentTarget.children[3].children[0] as HTMLSpanElement).innerText !==
          "" &&
        (currentTarget.children[4].children[0] as HTMLSpanElement).innerText !==
          "" &&
        (currentTarget.children[5].children[0] as HTMLSpanElement).innerText !==
          "" &&
        (currentTarget.children[6].children[0] as HTMLSpanElement).innerText !==
          "" &&
        (currentTarget.children[7].children[0] as HTMLSpanElement).innerText !==
          "" &&
        (currentTarget.children[8].children[0] as HTMLSpanElement).innerText !==
          ""
      ) {
        setWinner("tie");
      }
    }
  };

  const handlePlay = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).tagName === "DIV") {
      if ((e.target as HTMLElement).getAttribute("selected-area") === "false") {
        const span = (e.target as HTMLElement).children[0] as HTMLSpanElement;
        span.innerText = actualTurn.symbol;
        (e.target as HTMLElement).setAttribute("selected-area", "true");
        (e.target as HTMLElement).style.cursor = "not-allowed";
        checkWin(e.currentTarget);
        actualTurn.name === "player1"
          ? setActualTurn(player2)
          : setActualTurn(player1);
      } else {
        alert("boo");
      }
    } else {
      alert("boo");
    }
  };

  return (
    <article className="max-w-[75%] mx-auto flex flex-col items-center gap-[2em]">
      <h1 className="text-center text-[2em]">TicTacToe</h1>
      <section
        id="section"
        onClick={handlePlay}
        className="grid grid-cols-3 gap-0 w-fit min-w-[15em] mb-[4em]"
      >
        <div
          selected-area="false"
          area-number="1"
          className="bg-[#FF6400] cursor-pointer transition-all hover:bg-[#ff660080] w-[5em] h-[5em] border-solid border-[#010101] border-[.2em] border-l-0 border-t-0 flex items-center justify-center"
        >
          <span className="text-[#010101] text-[3em]"></span>
        </div>
        <div
          selected-area="false"
          area-number="2"
          className="bg-[#FF6400] cursor-pointer transition-all hover:bg-[#ff660080] w-[5em] h-[5em] border-solid border-[#010101] border-[.2em] border-t-0 border-r-0 border-l-0 flex items-center justify-center"
        >
          <span className="text-[#010101] text-[3em]"></span>
        </div>
        <div
          selected-area="false"
          area-number="3"
          className="bg-[#FF6400] cursor-pointer transition-all hover:bg-[#ff660080] w-[5em] h-[5em] border-solid border-[#010101] border-[.2em] border-t-0 border-r-0 flex items-center justify-center"
        >
          <span className="text-[#010101] text-[3em]"></span>
        </div>
        <div
          selected-area="false"
          area-number="4"
          className="bg-[#FF6400] cursor-pointer transition-all hover:bg-[#ff660080] w-[5em] h-[5em] border-solid border-[#010101] border-[.2em] border-l-0 border-t-0 border-b-0 flex items-center justify-center"
        >
          <span className="text-[#010101] text-[3em]"></span>
        </div>
        <div
          selected-area="false"
          area-number="5"
          className="bg-[#FF6400] cursor-pointer transition-all hover:bg-[#ff660080] w-[5em] h-[5em] flex items-center justify-center"
        >
          <span className="text-[#010101] text-[3em]"></span>
        </div>
        <div
          selected-area="false"
          area-number="6"
          className="bg-[#FF6400] cursor-pointer transition-all hover:bg-[#ff660080] w-[5em] h-[5em] border-solid border-[#010101] border-[.2em] border-t-0 border-r-0 border-b-0 flex items-center justify-center"
        >
          <span className="text-[#010101] text-[3em]"></span>
        </div>
        <div
          selected-area="false"
          area-number="7"
          className="bg-[#FF6400] cursor-pointer transition-all hover:bg-[#ff660080] w-[5em] h-[5em] border-solid border-[#010101] border-[.2em] border-l-0 border-b-0 flex items-center justify-center"
        >
          <span className="text-[#010101] text-[3em]"></span>
        </div>
        <div
          selected-area="false"
          area-number="8"
          className="bg-[#FF6400] cursor-pointer transition-all hover:bg-[#ff660080] w-[5em] h-[5em] border-solid border-[#010101] border-[.2em] border-l-0 border-b-0 border-r-0 flex items-center justify-center"
        >
          <span className="text-[#010101] text-[3em]"></span>
        </div>
        <div
          selected-area="false"
          area-number="9"
          className="bg-[#FF6400] cursor-pointer transition-all hover:bg-[#ff660080] w-[5em] h-[5em] border-solid border-[#010101] border-[.2em] border-r-0 border-b-0 flex items-center justify-center"
        >
          <span className="text-[#010101] text-[3em]"></span>
        </div>
      </section>
      <div
        className={`${
          winner !== "" ? "block" : "hidden"
        } text-[2em] text-center flex flex-col`}
      >
        {winner === "tie" && <span>Tie game!</span>}
        {winner !== "" && winner !== "tie" && (
          <span>
            {" "}
            Congrats! <br /> the Winner is: {winner}
          </span>
        )}
        <button
          className="transition-all hover:text-[#ff660080]"
          onClick={resetGame}
        >
          Play again!
        </button>
      </div>
    </article>
  );
};

export default TicTacToe;
