import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import InfiniteMenu from "./InfiniteMenu";

export const getImageUrl = (path) => {
  return new URL(`../assets/${path}`, import.meta.url).href;
};

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const items = [
    {
      image: getImageUrl("projects/project.png"),
      link: "https://github.com/anubhabguha1999/Weather-app",
      title: "Weather App",
      description: "Weather app that can say the weather of your location",
    },
    {
      image: getImageUrl("projects/game.jpg"),
      link: "https://redefine-anubhab-guha.netlify.app/",
      title: "REDEFINE",
      description: "Refefine is a game that is made using React + Vite.",
    },
    {
      image: getImageUrl("projects/project1.png"),
      link: "https://github.com/anubhabguha1999/Clone-google-forms",
      title: "Google Forms Clone",
      description:
        "This is clone of Google forms and is made like its functionality too",
    },
    {
      image: getImageUrl("projects/project2.jpg"),
      link: "https://github.com/anubhabguha1999/Speech-Emotion-Recognition",
      title: "Speech Emotion Recognition",
      description:
        "Speech Emotion Recognition is a project that can detect the emotion of a person based on their speech",
    },
    {
      image: getImageUrl("projects/project3.jpg"),
      link: "https://github.com/anubhabguha1999/Search-Movies-reactJS",
      title: "Search Movies",
      description:
        "Search Movies is a project that allows you to search for movies",
    },
    {
      image: getImageUrl("projects/crypto.png"),
      link: "https://github.com/anubhabguha1999/CryptoExchange",
      title: "Crypto Exchange",
      description:
        "Crypto Exchange is a project that allows you to exchange cryptocurrencies.",
    },
    {
      image: getImageUrl("projects/project4.jpg"),
      link: "https://github.com/anubhabguha1999/Face-Recognition",
      title: "Face Recognitions",
      description:
        "Face Recognition is a project that can detect faces in images and videos",
    },
    {
      image: getImageUrl("projects/todo.jpg"),
      link: "https://github.com/anubhabguha1999/to-do-list",
      title: "To Do List",
      description: "To Do List is a project that allows you to manage your tasks",
    },
    {
      image: getImageUrl("projects/chatbot.jpg"),
      link: "https://github.com/anubhabguha1999/personal-chat-bot",
      title: "Personal Chat Bot",
      description:
        "Personal Chat Bot is a project that creates your personal bot.",
    },
  ];
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
      

      <div style={{ height: "700px", position: "relative", marginTop: "20px" }}>
        <InfiniteMenu items={items} />
      </div>

      {/* <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div> */}
    </>
  );
};

export default SectionWrapper(Works, "");
