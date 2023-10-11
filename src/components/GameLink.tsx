import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Props {
  link: string;
  title: string;
  description: string;
  image: StaticImageData;
}

const GameLink = ({ link, title, description, image }: Props) => {
  return (
    <Link href={link}>
      <article className="relative bg-[#f6f6f6] border-solid border-[#FF6400] border-[.2em] h-fit transition-all">
        <div className=" flex justify-center">
          <Image className="h-[20em]" src={image} alt={title} />
        </div>
        <div className="flex justify-end">
          <div className="max-w-[90%] mx-auto ">
            <span className="text-center block text-[1.5em] lg:text-[2em]">
              {title}
            </span>
            <p className="text-justify md:text-[1.2em]">{description}</p>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default GameLink;
