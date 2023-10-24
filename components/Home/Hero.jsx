/**
 * Hero.jsx
 */

import HeroVideo from "./HeroVideo";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-full h-full ">
      <HeroVideo />
      {/* <div className="absolute top-0 w-[25%] left-[15%] h-[65%]  bg-zinc-100 z-20">
        <div className="absolute flex flex-col gap-3 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 pt-[20%]">
          <div className="relative z-50 w-full h-full">
            <Image
              src="/chimtitan-logo.png"
              width={500}
              height={500}
              alt={"logo"}
              className="object-cover w-full h-full"
            />
          </div>
          <p className=" text-md">
            Chimtitan este unul dintre cei mai apreciați producători de vopsele
            industriale din România
          </p>
          <Image
            src="/produs-in-romania.jpg"
            width={500}
            height={500}
            alt={"logo"}
            className="object-cover w-full h-full"
          />
        </div>
      </div> */}
      {/* <div className="relative h-12 text-white bg-zinc-900">
        <div className="flex items-center w-full h-full px-[3%] text-sm mx-auto max-w-7xl">
          We are the best for 30 years and counting...
        </div>
      </div> */}
      {/* <div className="absolute flex flex-col gap-3 p-32 transform -translate-y-1/2 rounded-xl -translate-x-1/4 top-1/2 left-1/4 bg-white/60 supports-backrop-blur backdrop-blur-lg"> */}
      {/* <div className="absolute z-50 flex flex-col gap-3 lg:transform lg:-translate-y-1/2 lg:-translate-x-1/4 lg:top-1/2 lg:left-1/4 "> */}
      <div className="absolute top-0 left-0 z-50 flex flex-col items-center justify-center w-full h-full gap-10 md:gap-3 ">
        <div className="flex-wrap font-serif text-4xl font-semibold text-white lg:text-7xl">
          CHIMTITAN
        </div>
        <div className="max-w-lg px-10 text-center text-white md:text-left">
          jasndjkasndkjasd Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Dignissimos perspiciatis, alias tenetur sunt sed molestias totam
          unde amet, placeat suscipit minima itaque explicabo?
        </div>
      </div>
    </div>
  );
};

export default Hero;
