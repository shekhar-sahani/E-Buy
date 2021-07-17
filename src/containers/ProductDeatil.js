import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  removeselectedProduct,
  selectedProduct,
} from "../redux/actions/productActions";

const ProductDeatil = () => {
  const product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(productId);

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Err", err);
      });

    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
    return () => {
      dispatch(removeselectedProduct());
    };
  }, [productId]);
  return (
    <div>
      {" "}
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="small-container single-product">
          <div className="row">
            <div className="col-2">
              <img src={image} id="ProductImg" width="100%" />
              <div className="small-img-row">
                <div className="small-img-col">
                  <img src="images/gallery-1.jpg" className="small-img" />
                </div>
                <div className="small-img-col">
                  <img src="images/gallery-2.jpg" className="small-img" />
                </div>
                <div className="small-img-col">
                  <img src="images/gallery-3.jpg" className="small-img" />
                </div>
                <div className="small-img-col">
                  <img src="images/gallery-4.jpg" className="small-img" />
                </div>
              </div>
            </div>
            <div className="col-2">
              <p>Home / T-shirt</p>
              <h2>{title} </h2>
              <h4>{price}</h4>
              <select name id>
                <option value>Select Size</option>
                <option value>XXL</option>
                <option value>XL</option>
                <option value>Large</option>
                <option value>Medium</option>
                <option value>Small</option>
              </select>
              <input type="number" defaultValue={1} />
              <a href className="btn">
                Add to Cart
              </a>
              <h3>
                Product Details
                <i className="fa fa-indent" />
              </h3>
              <br />
              <p>{description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDeatil;
