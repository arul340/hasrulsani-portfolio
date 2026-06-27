// "use client";

import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import SparkleIcon from "@/assets/icons/sparkle.svg";

export const HeroSection = () => {
  return (
    <div
      className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip"
      id="home"
    >
      <div className="absolute inset-0 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5 "
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-8 items-center text-emerald-300/20 animate-pulse [animation-duration:1s]" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration="32s">
          <SparkleIcon className="size-4 items-center text-emerald-300/20 animate-pulse [animation-duration:2s] " />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
          <div className="size-2 rounded-full bg-emerald-300/20 animate-bounce [animation-duration:2s] " />
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orbitDuration="36s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-10 items-center text-emerald-300/20 animate-pulse [animation-duration:3s] " />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={17}
          shouldOrbit
          orbitDuration="38s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-12 items-center text-emerald-300 animate-pulse [animation-duration:3s]" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-8 items-center text-emerald-300 animate-pulse [animation-duration:1s]" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
          <div className="size-2 rounded-full bg-emerald-300/20 animate-bounce [animation-duration:1s] " />
        </HeroOrbit>
        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          orbitDuration="44s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-14 items-center text-emerald-300/20 animate-pulse [animation-duration:3s] " />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
          <div className="size-3 rounded-full bg-emerald-300/20 animate-bounce [animation-duration:3s] " />
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-71}
          shouldOrbit
          orbitDuration="48s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-28 text-emerald-300 animate-pulse [animation-duration:2s]" />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Person peeking from behind laptop"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-2 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm  font-medium">
              Avalaible for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Crafting Software with a Data-Driven Mindset
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I build scalable web applications and leverage data science
            fundamentals to turn complex problems into clean, impactful
            solutions. Let&apos;s build something great together.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl "
          >
            <span className="font-semibold ">Explore my Work</span>
            <ArrowDown className="size-4" />
          </a>
          <a
            href="mailto:hasrul.sani013@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl cursor-pointer relative z-[99999]"
          >
            <span>👋</span>
            <span className="font-semibold">Let&apos;s Connect</span>
          </a>
        </div>
      </div>
    </div>
  );
};
