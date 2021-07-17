// import React, { useState, useEffect } from "react";
// import axios from "axios";

// export default function ProductDetails(props) {
//   const [item, setItem] = useState("");

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/products/" + props.match.params.id)
//       .then((res) => {
//         console.log(res);
//         setItem(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);
//   // if (!item) {
//   //   return <div></div>;
//   // }

//   return (
//     <div>
//       <div className="container">
//         <div className="navbar">
//           <div className="logo">
//             <a href="/">
//               <img
//                 src="http://localhost:3000/images/logo.png"
//                 alt=""
//                 width="125px"
//               />
//             </a>
//           </div>
//           <nav>
//             <ul id="MenuItems">
//               <li>
//                 <a href="/">Home</a>
//               </li>
//               <li>
//                 <a href="http://localhost:3000/products">Products</a>
//               </li>
//               <li>
//                 <a href>About</a>
//               </li>
//               <li>
//                 <a href>Contact</a>
//               </li>
//               {/* TODo: 22:20 */}
//             </ul>
//           </nav>
//           <a href="http://localhost:3000/cart">
//             <img
//               src="http://localhost:3000/images/cart.png"
//               alt=""
//               width="30px"
//               height="30px"
//             />
//           </a>
//           <img
//             src="images/menu.png"
//             alt=""
//             className="menu-icon"
//             onclick="menutoggle()"
//           />
//         </div>
//       </div>
//       {/* Single Products Detail */}
//       <div className="small-container single-product">
//         <div className="row">
//           <div className="col-2">
//             <img src={item.img} id="ProductImg" width="100%" />
//             <div className="small-img-row">
//               <div className="small-img-col">
//                 <img src="images/gallery-1.jpg" className="small-img" />
//               </div>
//               <div className="small-img-col">
//                 <img src="images/gallery-2.jpg" className="small-img" />
//               </div>
//               <div className="small-img-col">
//                 <img src="images/gallery-3.jpg" className="small-img" />
//               </div>
//               <div className="small-img-col">
//                 <img src="images/gallery-4.jpg" className="small-img" />
//               </div>
//             </div>
//           </div>
//           <div className="col-2">
//             <p>Home / T-shirt</p>
//             <h2>{item.name} </h2>
//             <h4>{item.price}</h4>
//             <select name id>
//               <option value>Select Size</option>
//               <option value>XXL</option>
//               <option value>XL</option>
//               <option value>Large</option>
//               <option value>Medium</option>
//               <option value>Small</option>
//             </select>
//             <input type="number" defaultValue={1} />
//             <a href className="btn">
//               Add to Cart
//             </a>
//             <h3>
//               Product Details
//               <i className="fa fa-indent" />
//             </h3>
//             <br />
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
//               nemo nam magnam rerum sunt explicabo! Distinctio ipsam doloremque
//               nostrum ipsum?
//             </p>
//           </div>
//         </div>
//       </div>
//       {/* Title */}
//       {/* Similar Products */}

//       {/* Footer */}
//       <div className="footer">
//         <div className="container">
//           <div className="row">
//             <div className="footer-col-1">
//               <h3>Download Our App</h3>
//               <p>
//                 Download App for Android <br />
//                 and ios mobile phone
//               </p>
//               <div className="app-logo">
//                 <img src="images/play-store.png" alt="" />
//                 <img src="images/app-store.png" alt="" />
//               </div>
//             </div>
//             <div className="footer-col-2">
//               <img src="images/logo-white.png" alt="" />
//               <p>
//                 Lorem, ipsum dolor sit amet consectetur <br />
//                 adipisicing elit. Porro, eum?
//               </p>
//             </div>
//             <div className="footer-col-3">
//               <h3>Useful Links</h3>
//               <ul>
//                 <li>Coupons</li>
//                 <li>Blog Post</li>
//                 <li>Return Policy</li>
//                 <li>Join Affiliate</li>
//               </ul>
//             </div>
//             <div className="footer-col-4">
//               <h3>Follow us</h3>
//               <ul>
//                 <li>Facebook</li>
//                 <li>Twitter</li>
//                 <li>Instagram</li>
//                 <li>YouTube</li>
//               </ul>
//             </div>
//           </div>
//           <hr />
//           <p className="copyright">Copyright 2020 - introidx</p>
//         </div>
//       </div>
//       {/* JS for Toggle menu */}
//       {/* js for product gallery */}
//     </div>
//   );
// }
