import "./project.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Project = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="project">
      <div className="heading">
        <h1>30 Mini Project</h1>
        <div className="line"></div>
      </div>
      <div className="container">
        <div className="slider-container">
          <Slider {...settings}>
            {data.map((d) => (
              <div key={d.name} className="card">
                <div className="card-header">
                  <img src={d.img} alt={d.name} className="card-header-img" />
                </div>

                <div className="card-body">
                  <p className="name">{d.name}</p>
                  <p className="review">{d.review}</p>
                  <a href={d.link}>
                    <button className="button">Live Demo</button>
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    name: `Project 1`,
    img: `/project1.webp`,
    review: `Check Weather `,
    link: `https://my-weather-app-by44.netlify.app/`,
  },
  {
    name: `Project 2`,
    img: `/project2.webp`,
    review: `Digiral Clock`,
    link: `https://digital-clock-by44.netlify.app/`,
  },
  {
    name: `Project 3`,
    img: `/project3.webp`,
    review: `Card slider`,
    link: `https://card-slider-by44.netlify.app/`,
  },
  {
    name: `Project 4`,
    img: `/project4.webp`,
    review: `Color palette generator `,
    link: `https://color-palette-generator-by44.netlify.app/`,
  },
  {
    name: `Project 5`,
    img: `/project5.webp`,
    review: `Mini Calendar`,
    link: `https://mini-calendar-by44.netlify.app/`,
  },
  {
    name: `Project 6`,
    img: `/project6.webp`,
    review: `Add your own todo`,
    link: `https://todo-list-by-44.netlify.app/`,
  },
  {
    name: `Project 7`,
    img: `/project7.webp`,
    review: `Tic- Tac-Toe Game`,
    link: `https://tic-tac-toe-by44.netlify.app/`,
  },
  {
      name: `Project 8`,
      img: `/project8.webp`,
      review: `Generate gradient color`,
      link: `https://gradient-generator-by44.netlify.app/`,
  },
  {
      name: `Project 9`,
      img: `/project9.webp`,
      review: `Image transition`,
      link:`https://image-transition-by44.netlify.app/`,
  },
  {
      name: `Project 10`,
      img: `/project10.webp`,
      review: `QR code generator, make your own qr code`,
      link:`https://qr-code-gen-by44.netlify.app/`,
  },
  {
      name: `Project 11`,
      img: `/project11.webp`,
      review: `Calculator`,
      link:`https://calculator-by44.netlify.app/`,
  },
  {
      name: `Project 12`,
      img: `/project12.webp`,
      review: `Stopwatch`,
      link:`https://stopwatch-by44.netlify.app/`,
  },
  {
      name: `Project 13`,
      img: `/project13.webp`,
      review: `Search random image`,
      link:`https://image-search-engine-by44.netlify.app/`,
  },
  {
      name: `Project 14`,
      img: `/project14.webp`,
      review: `E-comerce product page`,
      link:`https://product-page-by44.netlify.app/`,
  },
  {
      name: `Project 15`,
      img: `/project15.webp`,
      review: `Quiz app`,
      link:`https://quiz-by44.netlify.app/`,
  },
  {
      name: `Project 16`,
      img: `/project16.webp`,
      review: `Snake game`,
      link:`https://my-snake-game-by44.netlify.app/`,
  },
  {
      name: `Project 17`,
      img: `/project17.webp`,
      review: `Small music player`,
      link:`https://my-music-by-44.netlify.app/`,
  },
  {
      name: `Project 18`,
      img: `/project18.webp`,
      review: `Twitter clone`,
      link:`https://twittercloneby44.netlify.app/`,
  },
  {
      name: `Project 19`,
      img: `/project19.webp`,
      review: `Loading...`,
      link:``,
  },
  {
      name: `Project 20`,
      img: `/project20.webp`,
      review: `Scroll image gallery`,
      link:`https://scroll-image-gallery-by44.netlify.app/`,
  },
  {
      name: `Project 21`,
      img: `/project21.webp`,
      review: `Custom select menu design`,
      link:`https://custom-select-menu-design-by44.netlify.app/`,
  },
  {
      name: `Project 22`,
      img: `/project22.webp`,
      review: `Loading...`,
      link:`Loading...`,
  },
  {
      name: `Project 23`,
      img: `/project23.webp`,
      review: `Age Calculator`,
      link:`https://age-calculator-by44.netlify.app/`,
  },
  {
      name: `Project 24`,
      img: `/project24.webp`,
      review: `File drag&drop`,
      link:`https://drag-drop-by44.netlify.app/`,
  },
  {
      name: `Project 25`,
      img: `/project25.webp`,
      review: `Slider tab`,
      link:`https://slider-tab-by44.netlify.app/`,
  },
  {
      name: `Project 26`,
      img: `/project26.webp`,
      review: `OTP verification popUp`,
      link:`https://otp-verei-form.netlify.app/`,
  },
  {
      name: `Project 27`,
      img: `/project27.webp`,
      review: `Random password generator `,
      link:`https://random-password-gen-by-44.netlify.app/`,
  },
  {
      name: `Project 28`,
      img: `/project28.webp`,
      review: `PopUp`,
      link:`https://popup-by-44.netlify.app/`,
  },
  {
      name: `Project 29`,
      img: `/project29.webp`,
      review: `Rock-Paper-Scissors-Game`,
      link:`https://rock-paper-scissors-game-by44.netlify.app/`,
  },
  {
      name: `Project 30`,
      img: `/project30.webp`,
      review: `E-comerce fornted page`,
      link:`https://ae-electric.netlify.app/`,
  },
];

export default Project;
