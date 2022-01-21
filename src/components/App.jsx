import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import CartPage from "./CartPage";
import HomePage from "./HomePage";
// import Navbar from "./Navbar";
import NotFoundPage from "./NotFoundPage";
import Layout from "./Layout";
// import { TransitionGroup, CSSTransition } from "react-transition-group";
// import { ParallaxProvider } from "react-scroll-parallax";
export const AddedItemsContext = React.createContext();
export default function App() {
  const location = useLocation();
  const [addedItems, setAddedItems] = useState([]);

  const contextValues = {
    addedItems,
    setAddedItems,
  };
  // const MyContext = React.createContext(defaultValue);

  return (
    <AddedItemsContext.Provider value={contextValues}>
      <Layout>
        {/* <Navbar /> */}

        <Routes location={location}>
          <Route
            index
            path="/"
            element={<HomePage setAddedItems={setAddedItems} />}
          ></Route>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </AddedItemsContext.Provider>
  );
}
