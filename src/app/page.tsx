import Image from "next/image";

import jackImage from "@/assets/images/jack.webp";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center group sm:flex-row">
      <div>
        <Image
          className="transition-all animate-shine"
          src={jackImage}
          alt="Jack O'Lantern"
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[3em] tracking-[.1em] md:text-[4em] lg:text-[5em]">
          Halloween
        </h1>
        <Navbar />
      </div>
    </main>
  );
};

export default Home;
