import React, { useRef } from "react";
import { motion } from "framer-motion";
import './Skills.scss';
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Skills = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants} style={{ fontSize: "50px" }}>
           
          </motion.h2>
          <motion.h1
            variants={textVariants}
            style={{
              padding: "1px",
              backgroundColor: "grey",
              borderRadius: "8px",
              fontSize: "20px",
            }}
          >
           
          </motion.h1>

          <motion.div
           
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ display: "flex", gap: "10px", marginTop: "20px" }}
          >
            {/* Add any additional content here if needed */}
          </motion.div>

          <motion.div
         
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              padding: "20px",
              backgroundColor: "black",
              borderRadius: "8px",
              marginTop: "20px",
            }}
          >
            <h3>My Techstack</h3>
            <p>
              {/* Adding the tech stack image */}
              <img
                src="/Tech Stack.png"
                alt="Tech Stack"
                style={{ width: "130%", marginTop: "1px", marginBottom:"140px" }}
              />
            </p>
            
          </motion.div>

          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt="Scroll down"
          />
        </motion.div>
      </div>

      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        PROGRAMMER, CREATOR, OPEN SOURCE CONTRIBUTOR
      </motion.div>

      <div className="imageContainer">
        <img src="/hero.png" alt="Hero" />
      </div>
    </div>
  );
};

export default Skills;
