// import React, { useEffect, useState } from "react";
// import Header from "./components/Header";
// import { Link } from "react-router-dom";
// import axios from "axios";

// // const items = [
// //   { id: 1, name: "Red T-shirt", price: "$20", img: "https://i.ibb.co/HPygHrD/product-1.jpg" },
// //   { id: 2, name: "Black Shoes", price: "$40", img: "https://i.ibb.co/zrx7r22/product-2.jpg" },
// //   { id: 3, name: "Grey Trouser", price: "$50", img: "https://i.ibb.co/dJhj7jw/product-3.jpg" },
// //   { id: 4, name: "Blue T-shirt", price: "$20", img: "https://i.ibb.co/wzf4588/product-4.jpg" },
// //   { id: 5, name: "White Shoes", price: "$45", img: "https://i.ibb.co/vPmH5Y8/product-5.jpg" },
// //   { id: 6, name: "Black T-shirt", price: "$23", img: "https://i.ibb.co/61QMCwC/product-6.jpg" },
// //   { id: 7, name: "Socks", price: "$10", img: "https://i.ibb.co/Y0CGSNj/product-7.jpg" },
// //   { id: 8, name: "Fossil Watch", price: "$170", img: "https://i.ibb.co/vcRhMjm/product-8.jpg" },
// //   { id: 9, name: "Roadster Watch", price: "$190", img: "https://i.ibb.co/XbHQX03/product-9.jpg" },
// //   {
// //     id: 10,
// //     name: "HRX Black Shoe",
// //     price: "$50",
// //     img: "https://i.ibb.co/nnKPBn9/product-10.jpg",
// //   },
// //   { id: 11, name: "White Sneaker", price: "$30", img: "https://i.ibb.co/HFyBnhs/product-11.jpg" },
// //   { id: 12, name: "Black Trouser", price: "$55", img: "https://i.ibb.co/0tYjf6C/product-12.jpg" },
// // ];

// export default function Products() {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/products")
//       .then((res) => {
//         console.log(res);
//         setItems(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);
//   return (
//     <div>
//       <Header show={true} />
//       <div className="small-container">
//         <div className="row row-2">
//           <h2>All Products</h2>
//           <select name id>
//             <option value>Default Sorting</option>
//             <option value>Sort by Price</option>
//             <option value>Sort by Popularity</option>
//             <option value>Sort by Rating</option>
//             <option value>Sort by sales</option>
//           </select>
//         </div>
//         <div className="row">
//           {items.map((item) => (
//             <div key={item.id} className="col-4">
//               <Link to={"/product-details/" + item.id}>
//                 <img src={item.img} alt="" />
//                 <h4>{item.name} </h4>
//                 <div className="rating">
//                   <i className="fa fa-star" />
//                   <i className="fa fa-star" />
//                   <i className="fa fa-star" />
//                   <i className="fa fa-star" />
//                   <i className="fa fa-star-o" />
//                 </div>
//                 <p>{item.price} </p>
//               </Link>
//             </div>
//           ))}
//         </div>

//         <div className="page-btn">
//           <span>1</span>
//           <span>2</span>
//           <span>3</span>
//           <span>4</span>
//           <span>→</span>
//         </div>
//       </div>
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
//     </div>
//   );
// }
