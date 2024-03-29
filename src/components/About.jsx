import { motion } from "framer-motion";
import React from "react";
import { Tilt } from "react-tilt";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[240px]  w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-graddient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-4 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt={title}
            className="w-16 h-16 bg-white rounded-full object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview .</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[16px] max-w-3xl leading-[30px]"
      >
        Hello! I am a passionate Backend Node js developer. I'm currently
        working at ITVisionHub—Pte., Ltd in Myanmar with a strong background in
        creating dynamic and user-friendly websites. I develop
        information-sharing websites & E-commerce websites, user interfaces, and
        web applications. I want to combine my technical expertise with my
        creative and problem-solving skills to deliver high quality and to help
        companies achieve their goals in efficient web solutions. I have 3+
        years of hand on programming experience and including 1.5 years of
        working experience.
        <br />
        <br />
        Here's an overview of my experience and skills in Front-End Development:
        I am proficient in HTML, CSS, and JavaScript, with a strong
        understanding to create UI Components with javascript library such as
        React.js. Back-End Development: I have extensive experience in
        server-side programming languages such as Node.js.
        <br />
        <br />I am skilled in using frameworks like Express.js to build scalable
        I am skilled in using frameworks like Express.js to build scalable and
        efficient back-end systems. I am proficient in database management,
        including designing schemas and writing optimized queries.
      </motion.p>

      <div className="mt-20 flex justify-center flex-wrap gap-8">
        {services.map((service, index) => (
          <ServiceCard key={service.title} {...service} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
