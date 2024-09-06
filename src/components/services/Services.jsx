import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Experience = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="experience"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p className="sectionTitle"style={{ padding: "1px", borderRadius: "8px", fontSize: "40px", backgroundColor:"#003153" }}>
          My Professional Experiences
          <br />
        </p>
        <hr />
      </motion.div>

      <motion.div className="experienceContainer" variants={variants}>
        <div className="experienceItem">
          <div className="experienceHeader">
          <img src="public/code 4 gov tech.png" alt="Code for GovTech" className="companyLogo" />
            <div>
              <h1 className="jobTitle">DevOps Intern</h1>
              <h2 className="companyName">@ Code for GovTech | Open Source Dev</h2>
              <p className="duration">Jul 2023 - Aug 2023</p>
            </div>
          </div>
          <ul className="experienceDetails">
            <li>Open source contributor for this open-source program aimed at refactoring components and optimizing code.</li>
            <li>Strategically optimized the product's infrastructure on AWS, reducing costs by over 50% and improving network security.</li>
            <li>Managed and monitored Docker container clusters using Kubernetes with 99.8% uptime.</li>
            <li>Actively managed and improved cloud infrastructure on AWS and GCP, including backups, patches, and scaling.</li>
            <li>Established Kubernetes cluster monitoring using Prometheus & Grafana and implemented log aggregation with Grafana Loki.</li>
          </ul>
        </div>
             
        <div className="experienceItem">
          <div className="experienceHeader">
            <img src="public/Github.png" alt="GitHub" className="companyLogo" />
            <div>
              <h1 className="jobTitle">Open Source Contributor</h1>
              <h2 className="companyName">@ GitHub</h2>
              <p className="duration">Jul 2023 - Present</p>
            </div>
          </div>
          <ul className="experienceDetails">
            <li>Contributing to various open source projects, focusing on code enhancements and bug fixes.</li>
            <li>Engaged in collaborative development, improving project documentation and participating in community discussions.</li>
            <li>Implemented new features and optimizations, significantly enhancing project functionality and performance.</li>
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Experience;
