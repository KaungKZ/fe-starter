import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import CartPage from "./CartPage";
import HomePage from "./HomePage";
import Navbar from "./Navbar";
import NotFoundPage from "./NotFoundPage";
// import { TransitionGroup, CSSTransition } from "react-transition-group";
// import { ParallaxProvider } from "react-scroll-parallax";

export default function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Navbar />

      <Routes location={location}>
        <Route index path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
