import React from "react";

export default function Header({ show, handleLogout }) {
  return (
    <div>
      <div className="header">
        <div className="container">
          <div className="navbar">
            <div className="logo">
              <a href="/">
                <img src="images/logo.png" alt="" width="125px" />
              </a>
            </div>
            <nav>
              <ul id="MenuItems">
                <li>
                  <a href="/Home">Home</a>
                </li>
                <li>
                  <a href="/products">Products</a>
                </li>
                <li>
                  <a href>About</a>
                </li>
                <li>
                  <a href>Contact</a>
                </li>
                <li>
                  <a onClick={handleLogout} style={{ cursor: "pointer" }}>
                    Logout
                  </a>
                </li>
                {/* TODo: 22:20 */}
              </ul>
            </nav>
            <a href="/cart">
              <img src="images/cart.png" alt="" width="30px" height="30px" />
            </a>
            <img
              src="images/menu.png"
              alt=""
              className="menu-icon"
              onclick="menutoggle()"
            />
          </div>
          {show ? (
            <></>
          ) : (
            <div className="row">
              <div className="col-2">
                <h1>
                  Give your Workout
                  <br />a new Style!
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br />
                  Voluptas rerum maiores animi officiis
                </p>
                <a href className="btn">
                  Explore Now →
                </a>
              </div>
              <div className="col-2">
                <img src="images/image1.png" alt="" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
