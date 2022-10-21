import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import javascript from "../assets/img/javascript.png";
import reactImage from "../assets/img/react.png";
import nextjs from "../assets/img/nextjs.png";
import github from "../assets/img/github.png";
import bootstrap from "../assets/img/bootstrap.png";
import node from "../assets/img/node.png";
import Git from "../assets/img/Git.png";


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const techs = [
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-400",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-700",
    },

    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    
    {
      id: 5,
      src: reactImage,
      title: "React",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 7,
      src: node,
      title: "Nodejs",
      style: "shadow-green-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: Git,
      title: "Git",
      style: "shadow-orange-700",
    },
   
    
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                
              Here you will find more information about my skills. <br></br> what I do mostly in terms of programming and technology
              </p>
              <Carousel
                responsive={responsive}
                infinite
                arrows={false}
                autoPlay
                autoPlaySpeed={1500}
                className="owl-carousel owl-theme skill-slider"
              >
                {techs.map(({ id, src, title, style }) => (
                  <div
                    key={id}
                    // style={{
                    //   margin: 50,
                    // }}
                    className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} skill-con`}
                  >
                    <img
                      src={src}
                      alt=""
                      className="w-20 mx-auto"
                      style={{ margin: "10px 0px" }}
                    />
                    <p className="mt-4" style={{ margin: "10px 0px" }}>
                      {title}
                    </p>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Skill" />
    </section>
  );
};
