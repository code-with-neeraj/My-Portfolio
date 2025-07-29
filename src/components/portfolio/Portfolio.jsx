import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Ride-Hailing Application",
    img: "/ride-handling.webp",
    desc: "Built a full-stack ride-hailing application using React.js, Node.js, and MongoDB. Features include real-time ride updates with Socket.IO, live tracking with Leaflet.js, secure user and captain authentication, and dynamic ride management. Styled with SCSS and Tailwind CSS for a modern, responsive UI.",
    link: "",
    git:"https://github.com/code-with-neeraj/UBER",
  },
  {
    id: 2,
    title: "Hospital management platform (Hospitalo)",
    img: "/hospitalo.webp",
    desc: "🚀 Hospitalo is a modern, full-stack hospital management platform for seamless healthcare operations. It features secure authentication, real-time appointment booking, analytics dashboards, online payments, and a beautiful, responsive UI for Admins, Doctors, and Patients.",
    link: "https://hospitalo-yjlj.onrender.com",
    git:"http://hospitalo-admin.onrender.com/",
  },
  {
    id: 3,
    title: "Music Streaming Application",
    img: "/music-class.webp",
    desc: "Presenting Music Class – a platform designed for aspiring musicians and learners. Built using React, Next.js & Tailwind, it features course listings, animations, and responsive design. Let’s make learning music beautiful & accessible 🎼",
    link: "https://music-class-livid.vercel.app/",
    git:"https://github.com/code-with-neeraj/MUSIC-CLASS",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-500, 500]);

  return (

    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            

           <div className="btn">
             { item.link
            ?   <a href={item.link}><button>Demo</button></a>
            : ''
            }
            { item.git
              ? <a href={item.git}><button>GitHub</button></a>
              : ''
            }
           </div>
           



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
        <h1>Major Project</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
