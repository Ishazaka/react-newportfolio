import React from "react";

import img1 from "../assets/img/products/img1.png";
import img2 from "../assets/img/products/img2.png";
import img3 from "../assets/img/products/img3.png";
import img4 from "../assets/img/products/img4.png";

const products = [
  {
    title: "Covid19 Tracker",
    des: "Covid-19 is a React project developed to provide support to people suffering from and affected by Covid-19 virus worldwide. The app is designed to be very simple and light weight while maintaining proper responsiveness on different platforms like web and mobile. It provides statistics from around the world and lets users track the growth of active cases in their country.",
    tech: `React, Chart.js, JavaScript, CSS, Bootstrap,
    Material UI, JSON, REST APIS`,
    src: img1,
    gitlink: 'https://github.com/Ishazaka/Covid19-Tracker',
    livelink: 'https://covid19effects.netlify.app/'
  },
  {
    title: "Crypto Hunter",
    des: "Cryptocurrency Hunter is a react app that helps people find the best currency to invest in.It plays a significant role in the success of the user's investments in digital currencies.The chart shows the price, marketcap value, profit, and loss for 100 digital currencies.This service allows users to contrast the performance of multiple cryptocurrencies against one another.Besides showing the currencies that are trending in the most recent 24 hours, it also displays data on ups and downs in the past 30 days and the whole year.",
    tech: `React, Chart.js, JavaScript, CSS, Bootstrap, Material UI, JSON, REST APIS`,
    src: img2,
    gitlink: 'https://github.com/Ishazaka/Crypto-Hunter',
    livelink: 'https://hundredcrypto.netlify.app/'
  },
  {
    title: "Cloth Store",
    des: "Since everyone was shopping online after the Pandamic, I was inspired to build an online clothing store. The idea came to me after some of my friends contacted me about building an online clothing store. I used React and Javascript to build the clothing store.",
    src: img3,
    tech: ` React, JavaScript, CSS, Material UI, react-router-dom, Html , icons Library`,
    gitlink: 'https://github.com/Ishazaka/react-ecommerce',
    livelink: 'https://clothapp.netlify.app/'
 
   
  },
  {
    title: "Resume Builder",
    des: "I faced the challenge of writing a quality resume and creating a quality template when I entered the job market. To overcome this issue, I came up with the idea of building my own template. This Resume Builder was built leveraging the power of JavaScript.",
    tech: ` JavaScript, CSS, Bootstrap, Html , icons Library`,
    src: img4,
    gitlink: 'https://github.com/Ishazaka/resume-builder-website',
    livelink: 'https://hazelresume.netlify.app/'
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
              <h1>{pro.title}</h1>
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
