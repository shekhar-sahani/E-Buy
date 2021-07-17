import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../Home.css";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div key={id} className="col-4">
        <Link to={`/product/${id}`}>
          <div className="card-img">
            <img src={image} alt="" />
          </div>
          <div>
            <div style={{ textAlign: "center" }}>
              <h4 style={{ textAlign: "center", fontWeight: "bolder" }}>
                {title}{" "}
              </h4>
              <p style={{ fontWeight: "bolder" }}>Rs: {price} </p>
              <p>{category} </p>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return (
    <>
      <div className="row">{renderList}</div>
    </>
  );
};

export default ProductComponent;
