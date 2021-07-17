import React from "react";

export default function account() {
  //   const LoginForm = document.getElementById("LoginForm");
  //   const RegForm = document.getElementById("RegFrom");
  //   const indicator = document.getElementById("indicator");

  return (
    <div>
      <div className="header">
        <div className="container">
          <div className="navbar">
            <div className="logo">
              <a href="index.html">
                <img src="images/logo.png" alt="" width="125px" />
              </a>
            </div>
            <nav>
              <ul id="MenuItems">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="products">Products</a>
                </li>
                <li>
                  <a href>About</a>
                </li>
                <li>
                  <a href>Contact</a>
                </li>
                <li>
                  <a href="account">Account</a>
                </li>
                {/* TODo: 22:20 */}
              </ul>
            </nav>
            <a href="cart">
              <img src="images/cart.png" alt="" width="30px" height="30px" />
            </a>
            <img
              src="images/menu.png"
              alt=""
              className="menu-icon"
              onclick="menutoggle()"
            />
          </div>
        </div>
      </div>
      {/* Navigation ends here */}
      {/* Account Page */}
      <div className="account-page">
        <div className="container">
          <div className="row">
            <div className="col-2">
              <img src="images/image1.png" width="100%" />
            </div>
            <div className="col-2">
              <div className="form-container">
                <div className="form-btn">
                  <span>Login</span>
                  <span>Register</span>
                  <hr id="indicator" />
                </div>
                <form action id="LoginForm">
                  <input type="text" placeholder="Username" />
                  <input type="password" placeholder="Password" />
                  <button type="submit" className="btn">
                    Login
                  </button>
                  <a href>Forgot Password</a>
                </form>
                <form action id="RegForm">
                  <input type="text" placeholder="Username" />
                  <input type="email" placeholder="Email" />
                  <input type="password" placeholder="Password" />
                  <button type="submit" className="btn">
                    Register
                  </button>
                </form>
              </div>
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
      {/* 
js for toggle form */}
    </div>
  );
}
