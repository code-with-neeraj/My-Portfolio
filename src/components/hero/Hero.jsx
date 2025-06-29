import "./hero.scss";
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

const Hero = () => {
  const handleScroll = () => {
    const contactSection = document.getElementById("Contact");
    contactSection.scrollIntoView("");
  };

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>NEERAJ KUMAR</motion.h2>
          <motion.h1 variants={textVariants}>
            BCA&nbsp; 2<sup>nd</sup> Year <motion.span>Student</motion.span>
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants} onClick={handleScroll}>
            <b>Contact Me</b>
            </motion.button>
            <motion.button
              className="btn2"
              variants={textVariants}
            >
            <a href="https://drive.google.com/file/d/1Myy7MnSZILHpjeN-9LDJVkTbvwrW25sz/view"><b>GET RESUME</b></a>
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Web Developer
      </motion.div>
      <motion.div
        variants={textVariants}
        initial="initial"
        animate="animate"
        className="imageContainer"
      >
        <motion.img variants={textVariants} src="/hero2.png" alt="no image" />
      </motion.div>
    </div>
  );
};

export default Hero;
