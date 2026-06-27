"use client";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import PythonIcon from "@/assets/icons/python.svg";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import TensorFlowIcon from "@/assets/icons/tensorflow.svg";
import PyTorchIcon from "@/assets/icons/pytorch.svg";
import ScikitLearnIcon from "@/assets/icons/scikitlearn.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import ImgLoc from "@/assets/images/ImgLoc.jpeg";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import Pandas from "@/assets/icons/pandas.svg";
import NumPy from "@/assets/icons/numpy.svg";
import Tailwind from "@/assets/icons/tailwindcss.svg";
import Docker from "@/assets/icons/docker.svg";
import MySQL from "@/assets/icons/mysql.svg";
import ApacheSpark from "@/assets/icons/apachespark.svg";
import Matplotlib from "@/assets/icons/Matplotlib.svg";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  {
    title: "Python",
    iconType: PythonIcon,
  },
  {
    title: "JavaScript",
    iconType: JavaScriptIcon,
  },
  {
    title: "Tailwind CSS",
    iconType: Tailwind,
  },
  {
    title: "Pandas",
    iconType: Pandas,
  },
  {
    title: "Numpy",
    iconType: NumPy,
  },
  {
    title: "Matplotlib",
    iconType: Matplotlib,
  },
  // {
  //   title: "TensorFlow",
  //   iconType: TensorFlowIcon,
  // },
  // {
  //   title: "Docker",
  //   iconType: Docker,
  // },
  // {
  //   title: "PyTorch",
  //   iconType: PyTorchIcon,
  // },
  // {
  //   title: "Scikit-learn",
  //   iconType: ScikitLearnIcon,
  // },
  // {
  //   title: "Apache Spark",
  //   iconType: ApacheSpark,
  // },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "MySQL",
    iconType: MySQL,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
];

const hobbies = [
  {
    title: "Travelling",
    emoji: "✈️",
    left: "5%",
    top: "0%",
  },
  {
    title: "Reading",
    emoji: "📖",
    left: "50%",
    top: "0%",
  },

  {
    title: "Hiking",
    emoji: "🥾",
    left: "42%",
    top: "30%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "5%",
    top: "25%",
  },
  {
    title: "Music",
    emoji: "🎸",
    left: "75%",
    top: "20%",
  },
  {
    title: "Fitness",
    emoji: "🏋️",
    left: "5%",
    top: "60%",
  },
  {
    title: "Camping",
    emoji: "🏕️",
    left: "45%",
    top: "70%",
  },
  {
    title: "Diving",
    emoji: "🤿",
    left: "70%",
    top: "50%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className="py-20 lg:py-28" id="about">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do and what inspire me."
        />
        <div className="mt-20 flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my persepectives"
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="Book Cover" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional digital experiences."
                className=""
              />
              <ToolboxItems
                items={toolboxItems}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:20s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3 ">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital realm."
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="Map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 translate-x-11  -translate-y-1/2 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10 animate-ping [animation-duration:3s]"></div>
                <Image
                  src={ImgLoc}
                  alt="Smiling Memoji"
                  className="size-10 rounded-full p-1"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
