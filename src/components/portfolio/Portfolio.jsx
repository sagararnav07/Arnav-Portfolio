import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Horizon Banking Application",
    img: "/Horizon-Banking-Application.png",
    desc: "Developed the Horizon Banking application using NEXT.js-14 and TypeScript to create a robust and type-safe user interface.Utilized MongoDB for efficient storage and management of user data, including bank accounts and transactions.",
    link: "https://github.com/sagararnav07/banking-Horizon"
  },
  {
    id: 2,
    title: "Whatsapp Bot Webchat Analyzer",
    img: "/Whatsapp Bot Webchat Analyzer.png",
    desc: "Created an AI-powered GPT model web chatbot that performs sentiment analysis on WhatsApp chat data using Python, machine learning, and web development tools.Utilized Python libraries like Matplotlib, Seaborn, and Pandas for data visualization and manipulation.",
     link: "https://github.com/sagararnav07/Whatsapp_chat_sentiment_analysis"
  },
  {
    id: 3,
    title: "CHAT GPT CLONE",
    img: "/CHAT GPT CLONE.png",
    desc: "Integrated deep learning capabilities through the OpenAI API to develop a chatbot that can engage in contextual conversations.",
    link: "https://github.com/sagararnav07/ChatGPT-clone"
  },
  
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <button>Source Code</button></a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
