import React from "react";
import Header from "./components/Header";
import "./Home.css";

export default function Home({ handleLogout }) {
  return (
    <div>
      {/*--- Featurd Categories-------*/}
      <div className="categories">
        <div className="small-container">
          <div className="row">
            <div className="col-3">
              <img src="images/category-1.jpg" alt="" />
            </div>
            <div className="col-3">
              <img src="images/category-2.jpg" alt="" />
            </div>
            <div className="col-3">
              <img src="images/category-3.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/*--- Featurd Products-------*/}
      <div className="small-container">
        <h2 className="title">Featured Products</h2>
        <div className="row">
          <div className="col-4">
            <a href="product-details.html">
              <img src="images/product-1.jpg" alt="" />
            </a>
            <h4>Red Printed T-shirt</h4>
            <div className="rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star-o" />
            </div>
            <p>$50.00</p>
          </div>
          <div className="col-4">
            <img src="images/product-2.jpg" alt="" />
            <h4>Red Printed T-shirt</h4>
            <div className="rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star-half-o" />
              <i className="fa fa-star-o" />
            </div>
            <p>$50.00</p>
          </div>
          <div className="col-4">
            <img src="images/product-3.jpg" alt="" />
            <h4>Red Printed T-shirt</h4>
            <div className="rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star-half-o" />
            </div>
            <p>$50.00</p>
          </div>
          <div className="col-4">
            <img src="images/product-4.jpg" alt="" />
            <h4>Red Printed T-shirt</h4>
            <div className="rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star-o" />
            </div>
            <p>$50.00</p>
          </div>
        </div>
        <h2 className="title">Latest Products</h2>
        <div className="row">
          <div className="col-4">
            <img src="images/product-5.jpg" alt="" />
            <h4>Red Printed T-shirt</h4>
            <div className="rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star-o" />
            </div>
            <p>$50.00</p>
          </div>
          <div className="col-4">
            <img src="images/product-6.jpg" alt="" />
            <h4>Red Printed T-shirt</h4>
            <div className="rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star-half-o" />
              <i className="fa fa-star-o" />
            </div>
            <p>$50.00</p>
          </div>
          <div className="col-4">
            <img src="images/product-7.jpg" alt="" />
            <h4>Red Printed T-shirt</h4>
            <div className="rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star-half-o" />
            </div>
            <p>$50.00</p>
          </div>
          <div className="col-4">
            <img src="images/product-8.jpg" alt="" />
            <h4>Red Printed T-shirt</h4>
            <div className="rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star-o" />
            </div>
            <p>$50.00</p>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <img src="images/product-9.jpg" alt="" />
            <h4>Red Printed T-shirt</h4>
            <div className="rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star-o" />
            </div>
            <p>$50.00</p>
          </div>
          <div className="col-4">
            <img src="images/product-10.jpg" alt="" />
            <h4>Red Printed T-shirt</h4>
            <div className="rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star-half-o" />
              <i className="fa fa-star-o" />
            </div>
            <p>$50.00</p>
          </div>
          <div className="col-4">
            <img src="images/product-11.jpg" alt="" />
            <h4>Red Printed T-shirt</h4>
            <div className="rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star-half-o" />
            </div>
            <p>$50.00</p>
          </div>
          <div className="col-4">
            <img src="images/product-12.jpg" alt="" />
            <h4>Red Printed T-shirt</h4>
            <div className="rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star-o" />
            </div>
            <p>$50.00</p>
          </div>
        </div>
      </div>
      {/*------ Offer -------*/}
      <div className="offer">
        <div className="small-container">
          <div className="row">
            <div className="col-2">
              <img src="images/exclusive.png" className="offer-img" alt="" />
            </div>
            <div className="col-2">
              <p>Exclusively available on RedStore</p>
              <h1>Smart Band 4</h1>
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi rerum maiores eveniet minus ut deserunt vitae
              </small>
              <a onClick={handleLogout} href className="btn">
                Buy Now →
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*---- Testimonial  ----*/}
      <div className="testimonial">
        <div className="small-container">
          <div className="row">
            <div className="col-3">
              <i className="fa fa-quote-left" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
                esse quae ex sequi praesentium fuga voluptatem placeat
                voluptates odio rerum.
              </p>
              <div className="rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star-o" />
              </div>
              <img src="images/user-1.png" alt="" />
              <h3>Sean Parker</h3>
            </div>
            <div className="col-3">
              <i className="fa fa-quote-left" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
                esse quae ex sequi praesentium fuga voluptatem placeat
                voluptates odio rerum.
              </p>
              <div className="rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star-o" />
              </div>
              <img src="images/user-2.png" alt="" />
              <h3>Michel Joe</h3>
            </div>
            <div className="col-3">
              <i className="fa fa-quote-left" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
                esse quae ex sequi praesentium fuga voluptatem placeat
                voluptates odio rerum.
              </p>
              <div className="rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star-o" />
              </div>
              <img src="images/user-3.png" alt="" />
              <h3>Kaily Jenner</h3>
            </div>
          </div>
        </div>
      </div>
      {/* Brands */}
      <div className="brands">
        <div className="small-container">
          <div className="row">
            <div className="col-5">
              <img src="images/logo-godrej.png" alt="" />
            </div>
            <div className="col-5">
              <img src="images/logo-oppo.png" alt="" />
            </div>
            <div className="col-5">
              <img src="images/logo-paypal.png" alt="" />
            </div>
            <div className="col-5">
              <img src="images/logo-philips.png" alt="" />
            </div>
            <div className="col-5">
              <img src="images/logo-coca-cola.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col-1">
              <h3>Download Our App</h3>
              <p>
                Download App for Android <br />
                and ios mobile phone
              </p>
              <div className="app-logo">
                <img src="images/play-store.png" alt="" />
                <img src="images/app-store.png" alt="" />
              </div>
            </div>
            <div className="footer-col-2">
              <img src="images/logo-white.png" alt="" />
              <p>
                Lorem, ipsum dolor sit amet consectetur <br />
                adipisicing elit. Porro, eum?
              </p>
            </div>
            <div className="footer-col-3">
              <h3>Useful Links</h3>
              <ul>
                <li>Coupons</li>
                <li>Blog Post</li>
                <li>Return Policy</li>
                <li>Join Affiliate</li>
              </ul>
            </div>
            <div className="footer-col-4">
              <h3>Follow us</h3>
              <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>YouTube</li>
              </ul>
            </div>
          </div>
          <hr />
          <p className="copyright">Copyright 2020 - introidx</p>
        </div>
      </div>
      {/* JS for Toggle menu */}
    </div>
  );
}
