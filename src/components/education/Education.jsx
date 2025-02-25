import "./education.scss";
import { motion } from "framer-motion";

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

const Education = () => {
  return (
    <motion.div className="container"  initial="initial"
    animate="animate">
      <motion.div
        className="wrapper"
        variants={textVariants}
       
      >
        <motion.div variants={textVariants} className="img-container">
          <img src="/hero2.webp" alt="no image" />
        </motion.div>
        <motion.div variants={textVariants} className="education-container">
          <motion.h2>Education</motion.h2>
          <ul>
  <motion.li variants={textVariants}><b>Class X (CBSE)</b></motion.li>
  <motion.li variants={textVariants}><b>Class XII (CBSE)</b></motion.li>
  <motion.li variants={textVariants}><b>Graduation: BCA</b></motion.li>
</ul>

        </motion.div>
        <motion.div className="hobby-container">
          <motion.h2 variants={textVariants}>Hobby</motion.h2>
          <ul>
  <motion.div variants={textVariants}><li>Photography</li></motion.div>
  <motion.div variants={textVariants}><li>Gaming</li></motion.div>
  <motion.div variants={textVariants}><li>Reading</li></motion.div>
</ul>

        </motion.div>
      </motion.div>
      <motion.div variants={textVariants} className="skill-container">
        <motion.div variants={textVariants} className="skills">
          <motion.h1>Skills</motion.h1>
          <div className="line"></div>
          <div className="horizontal-scroll">
            <div className="icon-container">
              <img src="/html.png" alt="html" />
              <img src="/css.png" alt="css" />
              <img src="/js.png" alt="js" />
              <img src="/mongodb.webp" alt="mongodb" />
              <img src="/express.png" alt="express" />
              <img src="/react.png" alt="react" />
              <img src="/nodejs.png" alt="nodejs" />
              <img src="/mysql.png" alt="mysql" />
              <img src="/c.png" alt="c" />
              {/* <img src="/c++.png" alt="c++" /> */}
              <img src="/python.png" alt="python" />
              <img src="/java.png" alt="java" />
              <img src="/git.jpg" alt="git" />
              <img src="/tailwind.jpg" alt="tailwind" />
              <img src="/bootstrap.png" alt="bootstrap" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Education;
