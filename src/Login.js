// import React from "react";

// const Login = (props) => {
//   const {
//     email,
//     setEmail,
//     password,
//     setPassword,
//     handleLogin,
//     handleSignUp,
//     hasAccount,
//     setHasAccount,
//     emailError,
//     passwordError,
//   } = props;
//   return (
//     <>
//       <div className="header">
//         <div className="container">
//           <div className="navbar">
//             <div className="logo">
//               <a href="index.html">
//                 <img src="images/logo.png" alt="" width="125px" />
//               </a>
//             </div>
//             <a href="cart">
//               <img src="images/cart.png" alt="" width="30px" height="30px" />
//             </a>
//             <img
//               src="images/menu.png"
//               alt=""
//               className="menu-icon"
//               onclick="menutoggle()"
//             />
//           </div>
//         </div>
//       </div>
//       {/* Navigation ends here */}
//       {/* Account Page */}
//       <div className="account-page">
//         <div className="container">
//           <div className="row">
//             <div className="col-2">
//               <img src="images/image1.png" width="100%" />
//             </div>
//             <div className="col-sm-2">
//               <section className="login">
//                 <div className="loginContainer">
//                   {hasAccount ? (
//                     <h3 style={{ textAlign: "center" }}>LOGIN</h3>
//                   ) : (
//                     <h3 style={{ textAlign: "center" }}>SIGNUP</h3>
//                   )}
//                   <label>Email</label>
//                   <input
//                     type="text"
//                     required
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                   />
//                   <p className="errorMsg">{emailError}</p>
//                   <label>Password</label>
//                   <input
//                     type="password"
//                     required
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                   <p className="errorMsg">{passwordError}</p>
//                   <div className="btnContainer">
//                     {hasAccount ? (
//                       <>
//                         <button onClick={handleLogin}>Sign in</button>
//                         <p style={{ color: "black" }}>
//                           Don't have an account
//                           <span
//                             style={{ color: "red" }}
//                             onClick={() => setHasAccount(!hasAccount)}
//                           >
//                             Sign up
//                           </span>
//                         </p>
//                       </>
//                     ) : (
//                       <>
//                         <button onClick={handleSignUp}>Sign up</button>
//                         <p style={{ color: "black" }}>
//                           Have an account ?
//                           <span
//                             style={{ color: "red" }}
//                             onClick={() => setHasAccount(!hasAccount)}
//                           >
//                             Sign in
//                           </span>
//                         </p>
//                       </>
//                     )}
//                   </div>
//                 </div>
//               </section>
//             </div>
//           </div>
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
//       {/*
// js for toggle form */}
//     </>
//   );
// };

// export default Login;
