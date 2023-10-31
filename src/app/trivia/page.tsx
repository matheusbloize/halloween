"use client";

import Image from "next/image";

import witchMouseImage from "@/assets/images/games/tictactoe/witch.webp";
import batsImage from "@/assets/images/trivia/bats.webp";
import blackCatImage from "@/assets/images/trivia/black_cat.webp";
import frankensteinImage from "@/assets/images/trivia/frankenstein.webp";
import ghostImage from "@/assets/images/trivia/ghost.webp";
import jackImage from "@/assets/images/trivia/jack_alt.webp";
import mummyImage from "@/assets/images/trivia/mummy.webp";
import scarecrowImage from "@/assets/images/trivia/scarecrow.webp";
import skeletonImage from "@/assets/images/trivia/skeleton.webp";
import vampireImage from "@/assets/images/trivia/vampire.webp";
import werewolfImage from "@/assets/images/trivia/werewolf.webp";
import witchImage from "@/assets/images/trivia/witch.webp";
import zombiesImage from "@/assets/images/trivia/zombies.webp";
import Info from "@/components/Info";
import Navbar from "@/components/Navbar";

const Trivia = () => {
  const handleMouse = (e: React.MouseEvent) => {
    const circle = document.getElementById("mouse") as HTMLDivElement;
    const height = circle.clientHeight;
    const width = circle.clientWidth;

    setTimeout(() => {
      circle.style.left = `${e.clientX - width / 2 + 20}px`;
      circle.style.top = `${e.clientY - height / 2 + 20}px`;
    }, 20);
  };

  return (
    <main onMouseMove={handleMouse}>
      <Image
        src={witchMouseImage}
        alt="witch"
        className="hidden md:block fixed pointer-events-none h-[2em] w-[2em] z-20 top-[-50em] border-solid border-[2px] border-[#000000] rounded-[50%] shadow-witch invert mix-blend-difference"
        id="mouse"
      />
      <header className="flex flex-col items-center">
        <Navbar
          customHome="origin-right animate-navHome"
          customTrivia="origin-center animate-navTrivia"
          customGames="origin-top animate-navGames"
        />
      </header>
      <section className="flex flex-col items-center mt-[5em]">
        <h1 className="text-[2.5em]">Halloween Trivia</h1>
        <div className="grid grid-cols-1 gap-[1em] my-[2em] transition-all md:grid-cols-3">
          <Info
            image={jackImage}
            title="Jack O'Lantern"
            content="According to Irish history, Stingy Jack was an old drunk. When he was on the verge of death, he managed to trick the Devil and made a deal with him so that he would never try to take Jack's soul again. When Jack died, neither God nor the Devil accepted him into their domains. So Jack was left on the loose, wandering the nights with only a burning coal to light his way. He then decided to carve a turnip, put the coal inside to create a lantern and go out to haunt the Earth."
          />
          <Info
            image={witchImage}
            title="Witch"
            content="Some women with a strange and frightening appearance were called witches. These characters held parties to pay homage to the devil. At these events, the witches took the opportunity to acquire powers and spells to do evil and use dark magic."
          />
          <Info
            image={blackCatImage}
            title="Black Cat"
            content="In Medieval France and Spain, black cats were considered bringers of bad luck and curses to any human they came near, and were associated with witchcraft. Legends say that witches used to pass themselves off as black cats in order to wander the streets unnoticed."
          />
          <Info
            image={scarecrowImage}
            title="Scarecrow"
            content="Scarecrows are used to keep birds away from crops, especially in the United States. These puppets are also symbols of Halloween because they protect places from spirits and other evil beings."
          />
          <Info
            image={werewolfImage}
            title="Werewolf"
            content="Legend has it that a man was initially bitten by a wolf and fell under its spell. So, on the nights of the full moon, he transformed into a wolf with claws and a fur-covered body, and went out howling in search of his favorite food: blood."
          />
          <Info
            image={vampireImage}
            title="Vampire"
            content="A vampire is usually a type of monster that was originally human but has been transformed, it usually sleeps in a coffin and needs to feed on the blood of living humans to stay alive and obtains that blood by biting its victims."
          />
          <Info
            image={frankensteinImage}
            title="Frankenstein's monster"
            content={`Frankenstein's monster (often incorrectly called Frankenstein) is a creature made of several different dead bodies. Victor Frankenstein creates the monster with his scientific knowledge and your obsession with the idea of creating life in inanimate matter through artificial means. The monster does not have a name, being referred to simply as "the Monster" or "the Creature".`}
          />
          <Info
            image={ghostImage}
            title="Ghosts"
            content="The Celts believed that the boundary between the living and the dead was at its thinnest on the 31st October. They thought that the spirits of the dead could roam amongst the living during this time. As a precaution, it was customary for Celts to leave food and drink on the doorstep as offerings to the “good” spirits. Many believe that on Halloween, ghosts roam the streets among the living."
          />
          <Info
            image={batsImage}
            title="Bats"
            content="The animal tends to frequent inhospitable and dark places, such as caves, buildings and other remote locations, which is why it is also associated with Halloween. The Halloween bat is also linked to vampires, as the story goes that the animal usually transforms into the dreaded blood-loving character."
          />
          <Info
            image={zombiesImage}
            title="Zombies"
            content="A zombie is a kind of monster that was formerly human but has either died and been brought back to life or has become infected by an unknown and terrible disease. Either way, a zombie looks like a rotting corpse and a has no free will. It represent our fear of being dehumanized. These rotting creatures carry animal instincts that don't belong to humanity."
          />
          <Info
            image={skeletonImage}
            title="Skeleton"
            content="Skulls and skeletons represent dead people and ghosts, which is why they are also symbols of Halloween. In Mexico, El Día de los Muertos (Day of the Dead) is represented by Mexican calaveras (skulls), which are decorated and colorful. In this country, skulls signify mourning and celebration and, at the same time, are considered offerings for loved ones who have passed away."
          />
          <Info
            image={mummyImage}
            title="Mummy"
            content="A mummy is the body of a dead animal or person which has been preserved in such a way that, if it is kept in cool and dry conditions, it will not decay any further. Bodies can become mummified either intentionally or unintentionally. The Egyptians believed that the mummified body was the home for this soul or spirit. If the body was destroyed, the spirit might be lost."
          />
        </div>
      </section>
    </main>
  );
};

export default Trivia;
