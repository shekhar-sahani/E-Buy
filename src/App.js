// import React from "react";
// import { useState, useEffect } from "react";
// import "./App.css";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Home from "./Home";
// import Cart from "./Cart";
// import account from "./account";
// import Products from "./Products";
// import ProductDetails from "./ProductDetails";
// import fire from "./fire";
// import Login from "./Login";
// import Header from "./components/Header";

// function App() {
//   const [user, setUser] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [hasAccount, setHasAccount] = useState("");

//   const clearInputs = () => {
//     setEmail("");
//     setPassword("");
//   };

//   const clearErrors = () => {
//     setEmailError("");
//     setPasswordError("");
//   };

//   const handleLogin = () => {
//     clearErrors();
//     fire
//       .auth()
//       .signInWithEmailAndPassword(email, password)
//       .catch((err) => {
//         switch (err.code) {
//           case "auth/invalid-email":
//           case "auth/user-disabled":
//           case "auth/user-not-found":
//             setEmailError(err.message);
//             break;
//           case "auth/wrong-password":
//             setPasswordError(err.message);
//             break;
//         }
//       });
//   };

//   const handleSignUp = () => {
//     clearErrors();
//     fire
//       .auth()
//       .createUserWithEmailAndPassword(email, password)
//       .catch((err) => {
//         switch (err.code) {
//           case "auth/email-already-in-use":
//           case "auth/invalid-email":
//             setEmailError(err.message);
//             break;
//           case "auth/weak-password":
//             setPasswordError(err.message);
//             break;
//         }
//       });
//   };

//   const handleLogout = () => {
//     fire.auth().signOut();
//   };

//   const authListener = () => {
//     fire.auth().onAuthStateChanged((user) => {
//       if (user) {
//         clearInputs();
//         setUser(user);
//       } else {
//         setUser("");
//       }
//     });
//   };

//   useEffect(() => {
//     authListener();
//   }, []);
//   return (
//     <Router>
//       <div>
//         <Switch>
//           <Route
//             exact
//             path="/"
//             render={() => (
//               <>
//                 {user ? (
//                   <>
//                     <Home handleLogout={handleLogout} />
//                   </>
//                 ) : (
//                   <Login
//                     email={email}
//                     setEmail={setEmail}
//                     password={password}
//                     setPassword={setPassword}
//                     handleLogin={handleLogin}
//                     handleSignUp={handleSignUp}
//                     hasAccount={hasAccount}
//                     setHasAccount={setHasAccount}
//                     emailError={emailError}
//                     passwordError={passwordError}
//                   />
//                 )}
//               </>
//             )}
//           ></Route>

//           <Route exact path="/products" component={Products} />
//           <Route path="/product-details/:id" component={ProductDetails}></Route>
//           <Route exact path="/account" component={account} />

//           <Route exact path="/cart" component={Cart} />
//           <Route
//             handleLogout={handleLogout}
//             exact
//             path="/header"
//             component={Headers}
//           />

//           <Route exact path="*" component={Home} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDeatil from "./containers/ProductDeatil";
import Header from "./components/Header";
import Home from "./Home";
import Cart from "./Cart";

function App() {
  return (
    <div className="App">
      <Router>
        <Header show={true} />
        <Switch>
          <Route path="/cart" exact component={Cart} />
          <Route path="/Home" exact component={Home} />
          <Route path="/products" exact component={ProductListing} />
          <Route path="/product/:productId" exact component={ProductDeatil} />
          <Route>404 Not Fount!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
