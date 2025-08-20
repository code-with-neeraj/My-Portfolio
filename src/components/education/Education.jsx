import "./education.scss";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool, faUserGraduate } from "@fortawesome/free-solid-svg-icons";

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
    <motion.div
      className="container"
      initial="initial"
      animate="animate"
      variants={textVariants} // Apply variants to the parent container
    >
      <motion.div className="main">
        <motion.h1 variants={textVariants}>Educations</motion.h1>
        <motion.div className="line" variants={textVariants}></motion.div>
      </motion.div>
      <motion.div className="wrapper">
        <motion.div className="first" variants={textVariants}>
          <motion.div className="imgBox" variants={textVariants}>
            <FontAwesomeIcon
              icon={faUserGraduate}
              size="lg"
              style={{ color: "#eeece8" }}
            />
          </motion.div>
          <motion.div className="content" variants={textVariants}>
            <motion.p id="date" variants={textVariants}>
              2023-2026
            </motion.p>
            <motion.h3>
              <motion.b variants={textVariants}>
                BACHELOR OF COMPUTER APPLICATIONS
              </motion.b>
            </motion.h3>
            <motion.p id="place" variants={textVariants}>
              Patliputra University, Patna
            </motion.p>
          </motion.div>
        </motion.div>
        <motion.div className="second" variants={textVariants}>
          <motion.div className="imgBox" variants={textVariants}>
            <FontAwesomeIcon
              icon={faSchool}
              style={{ color: "#f2f2f2" }}
            />
          </motion.div>
          <motion.div className="content" variants={textVariants}>
            <motion.p variants={textVariants}>2020-2022</motion.p>
            <motion.h3 variants={textVariants}>
              <b>HIGHER SECONDARY CERTIFICATE</b>
            </motion.h3>
            <motion.p id="place" variants={textVariants}>
              Shakti Shanti Academy
            </motion.p>
          </motion.div>
        </motion.div>
        <motion.div className="third" variants={textVariants}>
          <motion.div className="imgBox" variants={textVariants}>
            <FontAwesomeIcon
              icon={faSchool}
              style={{ color: "#f2f2f2" }}
            />
          </motion.div>
          <motion.div className="content" variants={textVariants}>
            <motion.h3 variants={textVariants}>
              <b>SECONDARY SCHOOL CERTIFICATE</b>
            </motion.h3>
            <motion.p id="place" variants={textVariants}>
              Chapra Central School
            </motion.p>
          </motion.div>
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
              <img src="/python.png" alt="python" />
              <img src="/java.png" alt="java" />
              <img src="/git.jpg" alt="git" />
              <img src="/tailwind.jpg" alt="tailwind" />
              <img src="/bootstrap.png" alt="bootstrap" />
              <img src="/typescript-icon.svg" alt="typescript" />
              <img src="/nextjs.jpg" alt="nextjs" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Education;
