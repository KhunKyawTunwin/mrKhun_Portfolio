import { motion } from "framer-motion";
import React from "react";
import { Tilt } from "react-tilt";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-graddient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
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
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a seasoned full stack developer with a passion for creating robust
        and dynamic web applications. With expertise in both front-end and
        back-end development, I possess a comprehensive skill set that allows me
        to tackle the entire software development process. Here's an overview of
        my experience and skills:
        <br />
        Front-End Development: I am proficient in HTML, CSS, and JavaScript,
        with a strong understanding of modern front-end frameworks such as
        React.js, Angular, or Vue.js. I have a keen eye for design and a deep
        understanding of user experience, enabling me to create intuitive and
        visually appealing user interfaces.
        <br />
        Back-End Development: I have extensive experience in server-side
        programming languages such as Node.js, Python, Ruby, or PHP. I am
        skilled in using frameworks like Express.js, Django, Ruby on Rails, or
        Laravel to build scalable and efficient back-end systems. I am
        proficient in database management, including designing schemas and
        writing optimized queries.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} {...service} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
