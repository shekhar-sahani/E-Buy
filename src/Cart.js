import React from "react";
import Header from "./components/Header";

export default function Cart() {
  return (
    <div>
      {/* Cart Items Details */}
      <div className="small-container cart-page">
        <table>
          <tbody>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
            <tr>
              <td>
                <div className="cart-info">
                  <img src="images/buy-1.jpg" alt="" />
                  <div>
                    <p>Red Printed T-shirt</p>
                    <small>Price: $50.00</small>
                    <br />
                    <a href>Remove</a>
                  </div>
                </div>
              </td>
              <td>
                <input type="nunber" defaultValue={1} />
              </td>
              <td>$50.00</td>
            </tr>
            <tr>
              <td>
                <div className="cart-info">
                  <img src="images/buy-2.jpg" alt="" />
                  <div>
                    <p>Red Printed T-shirt</p>
                    <small>Price: $50.00</small>
                    <br />
                    <a href>Remove</a>
                  </div>
                </div>
              </td>
              <td>
                <input type="nunber" defaultValue={1} />
              </td>
              <td>$50.00</td>
            </tr>
            <tr>
              <td>
                <div className="cart-info">
                  <img src="images/buy-3.jpg" alt="" />
                  <div>
                    <p>Red Printed T-shirt</p>
                    <small>Price: $50.00</small>
                    <br />
                    <a href>Remove</a>
                  </div>
                </div>
              </td>
              <td>
                <input type="nunber" defaultValue={1} />
              </td>
              <td>$50.00</td>
            </tr>
          </tbody>
        </table>
        <div className="total-price">
          <table>
            <tbody>
              <tr>
                <td>Subtotal</td>
                <td>$200.00</td>
              </tr>
              <tr>
                <td>Tax</td>
                <td>$30.00</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>$230.00</td>
              </tr>
            </tbody>
          </table>
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
