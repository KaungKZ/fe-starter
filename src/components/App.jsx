import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import CartPage from "./CartPage";
import HomePage from "./HomePage";
import Item from "./Item";
import NotFoundPage from "./NotFoundPage";
import Layout from "./Layout";

export const AddedItemsContext = React.createContext();

export default function App() {
  const location = useLocation();
  const [addedItems, setAddedItems] = useState([]);

  const contextValues = {
    addedItems,
    setAddedItems,
  };

  return (
    <AddedItemsContext.Provider value={contextValues}>
      <Layout>
        <Routes location={location}>
          <Route
            index
            path="/"
            element={<HomePage setAddedItems={setAddedItems} />}
          ></Route>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="/item/:id" element={<Item />}></Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </AddedItemsContext.Provider>
  );
}
