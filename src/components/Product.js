import React from "react";
import img1 from "../assets/img/products/4.png";

const products = [
  {
    title: "Product Title",
    des: "Product Details",
    src: img1,
  },
  {
    title: "Product Title",
    des: "Product Details",
    src: img1,
  },
  {
    title: "Product Title",
    des: "Product Details",
    src: img1,
  },
  {
    title: "Product Title",
    des: "Product Details",
    src: img1,
  },
];

const Product = () => {
  return (
    <section className="product-con" id="products">
      <h1 className="pro-head">Products</h1>
      <p className="pro-des">
        Here you will find some of the personal and clients projects that I
        created with each project containing its own case study
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
                <button className="pro-btn">Button 1</button>
                <button className="pro-btn">Button 2</button>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Product;
