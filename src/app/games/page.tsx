import jackImage from "@/assets/images/jack.webp";
import GameLink from "@/components/GameLink";
import Navbar from "@/components/Navbar";

const Games = () => {
  return (
    <main>
      <header className="flex flex-col items-center">
        <Navbar
          customHome="origin-right animate-navHome"
          customInfo="origin-center animate-navInfo"
          customGames="origin-top animate-navGames"
        />
      </header>
      <section className="flex flex-col items-center mt-[5em]">
        <h1 className="text-[2.5em]">Halloween Games</h1>
        <div className="grid grid-cols-1 gap-[1em] my-[2em] transition-all md:grid-cols-2 lg:grid-cols-3">
          <GameLink
            link="games/1"
            title="game 1"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, illo esse nihil quaerat recusandae veritatis necessitatibus obcaecati minima nisi ullam cum iusto unde magnam repellendus doloremque dolore reprehenderit hic sed?"
            image={jackImage}
          />
          <GameLink
            link="games/2"
            title="game 2"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, illo esse nihil quaerat recusandae veritatis necessitatibus obcaecati minima nisi ullam cum iusto unde magnam repellendus doloremque dolore reprehenderit hic sed?"
            image={jackImage}
          />
          <GameLink
            link="games/3"
            title="game 3"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, illo esse nihil quaerat recusandae veritatis necessitatibus obcaecati minima nisi ullam cum iusto unde magnam repellendus doloremque dolore reprehenderit hic sed?"
            image={jackImage}
          />
        </div>
      </section>
    </main>
  );
};

export default Games;
