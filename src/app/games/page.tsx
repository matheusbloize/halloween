import dragandropImage from "@/assets/images/games/dragandrop.webp";
import guessthecharacterImage from "@/assets/images/games/guessthecharacter.webp";
import tictactoeImage from "@/assets/images/games/tictactoe.webp";
import GameLink from "@/components/GameLink";
import Navbar from "@/components/Navbar";

const Games = () => {
  return (
    <main>
      <header className="flex flex-col items-center">
        <Navbar
          customHome="origin-right animate-navHome"
          customTrivia="origin-center animate-navTrivia"
          customGames="origin-top animate-navGames"
        />
      </header>
      <section className="flex flex-col items-center mt-[5em]">
        <h1 className="text-[2.5em]">Halloween Games</h1>
        <div className="grid grid-cols-1 gap-[1em] my-[2em] transition-all md:grid-cols-2 lg:grid-cols-3">
          <GameLink
            link="games/1"
            title="Tic Tac Toe"
            description="One of the two players, on alternate turns, must complete a row, a column or a diagonal with three symbols."
            image={tictactoeImage}
          />
          <GameLink
            link="games/2"
            title="Drag And Drop"
            description="Drag and drop the brighter figures onto their more yellowish representations, watch out for the time."
            image={dragandropImage}
          />
          <GameLink
            link="games/3"
            title="Guess The Character"
            description="See if you can remember the names of famous characters from movies or Halloween culture in general."
            image={guessthecharacterImage}
          />
        </div>
      </section>
    </main>
  );
};

export default Games;
