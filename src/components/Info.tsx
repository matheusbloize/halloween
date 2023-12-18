"use client";

import Image, { StaticImageData } from "next/image";
import { useRef } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";

interface Props {
  image: StaticImageData;
  title: string;
  content: string;
}

const Info = ({ image, title, content }: Props) => {
  const contentRef = useRef<HTMLParagraphElement | null>(null);

  const handleContent = (e: React.MouseEvent<HTMLDivElement>) => {
    if (contentRef.current) {
      contentRef.current.style.display === ""
        ? (contentRef.current.style.display = "block")
        : (contentRef.current.style.display = "");
    }
    e.currentTarget.style.transform === ""
      ? (e.currentTarget.style.transform = "rotate(180deg)")
      : (e.currentTarget.style.transform = "");
  };

  return (
    <article className="relative bg-[#f6f6f6] h-fit transition-all">
      <div className="border-solid border-[#FF6400] border-[.2em] flex justify-center">
        <Image
          className="h-[20em] w-full"
          src={image}
          alt={title}
          width={420}
          height={320}
        />
      </div>
      <div className="flex justify-end">
        <div className="max-w-[90%] mx-auto ">
          <span className="text-center block text-[1.5em] lg:text-[2em]">
            {title}
          </span>
          <p ref={contentRef} className="hidden text-justify md:text-[1.2em]">
            {content}
          </p>
        </div>
        <div
          onClick={handleContent}
          className="absolute transition-all cursor-pointer lg:top-[20.75em]"
        >
          <AiOutlineArrowDown className="text-[2em]" />
        </div>
      </div>
    </article>
  );
};

export default Info;
