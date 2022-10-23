import React from "react";

import img1 from "../assets/img/products/img1.png";
import img2 from "../assets/img/products/img2.png";
import img3 from "../assets/img/products/img3.png";
import img4 from "../assets/img/products/img4.png";

const products = [
  {
    title: "Covid19 Tracker",
    des: "Covid-19 is a React project developed in support of people suffering and affected due to Covid-19 virus all around the world. The app takes a very simple and light weight design keeping in mind proper responsiveness throughout different platforms like web and mobile responsiveness. The app lets the user track the growth of active cases in their country and provides statistics from all around the world.",
    tech: `React, Chart.js, JavaScript, CSS, Bootstrap,
    Material UI, JSON, REST APIS`,
    src: img1,
    gitlink: 'https://github.com/Ishazaka/Covid19-Tracker',
    livelink: 'https://covid19effects.netlify.app/'
  },
  {
    title: "Crypto Hunter",
    des: "A cryptocurrency Hunter is a react app that is made to help people find the best currency for investment. This app plays a significant role for success of the user investments in digital currencies. It shows price , marketcap value ,profit and loss of 100 crypto currencies currencies.This service allows users to contrast the performance of multiple cryptocurrencies against one another.It not only shows the cryptocurencuies which are trending in last 24 hours but also shows the data of up and downs in last 30 days and whole year.",
    tech: `React, Chart.js, JavaScript, CSS, Bootstrap, Material UI, JSON, REST APIS`,
    src: img2,
    gitlink: 'https://github.com/Ishazaka/Crypto-Hunter',
    livelink: 'https://hundredcrypto.netlify.app/'
  },
  {
    title: "Cloth Store",
    des: "After the Pandamic hit, everyone was shopping online at that time, so I was inspired to build an online clothing store. I stumbled upon this idea after some of my friends called me about building an online clothing store. I used React and Javascript to build the clothing store.",
    src: img3,
    tech: ` React, JavaScript, CSS, Material UI, react-router-dom, Html , icons Library`,
    gitlink: 'https://github.com/Ishazaka/react-ecommerce',
    livelink: 'https://roaring-biscochitos-a157b0.netlify.app/'
  },
  {
    title: "Resume Builder",
    des: "As I was entering the job market I faced the challenge of writing a quality resume and creating a quality template. I came up with the idea to build my own template to overcome this issue. This Resume Builder was built leveraging the power of JavaScript.",
    tech: ` JavaScript, CSS, Bootstrap, Html , icons Library`,
    src: img4,
    gitlink: 'https://github.com/Ishazaka/resume-builder-website',
    livelink: 'https://zealous-payne-51b9a0.netlify.app/'
  },
];

const Product = () => {
  return (
    <section className="product-con" id="products">
      <h1 className="pro-head">Projects</h1>
      <p className="pro-des">
        Here you will find some of the personal and clients projects that I
        created with each project containing its own github and live link
      </p>
      {products.map((pro) => {
        return (
          <div className="pro">
            <div className="pro-img-con">
              <img src={pro.src} alt="product" />
            </div>
            <div className="pro-data">
              <h2>{pro.title}</h2>
              <p>{pro.des}</p>
              <span><strong>{`Technologies : `} </strong>{pro.tech}</span>
              <div 
              style={{margin: '10px 0'}}
              >
                <a rel="noreferrer noopener" target='_blank' href={pro.gitlink}>
                  <button className="pro-btn">Github</button>
                </a>
                <a rel="noreferrer noopener" target='_blank' href={pro.livelink}>
                  <button className="pro-btn">Live</button>
                </a>


              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Product;
