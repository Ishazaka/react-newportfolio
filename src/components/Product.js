import React from "react";
import img1 from "../assets/img/products/4.png";

const products = [
  {
    title: "Product Title",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    src: img1,
  },
  {
    title: "Product Title",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    src: img1,
  },
  {
    title: "Product Title",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    src: img1,
  },
  {
    title: "Product Title",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    src: img1,
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
              <div>
                <button className="pro-btn">Github</button>
                <button className="pro-btn">Live</button>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Product;
