import React, { useState, useContext } from "react";
import { AddedItemsContext } from "./App";

export default function Addtocart({ value }) {
  const [addedToggle, setAddedToggle] = useState("initial");
  const { addedItems, setAddedItems } = useContext(AddedItemsContext);

  function handleAddItem(item) {
    if (addedItems.some((item) => item.id === value.id)) {
      setAddedToggle("exist");
    } else {
      setAddedItems([...addedItems, item]);
      setAddedToggle("added");
    }

    setTimeout(() => {
      setAddedToggle("initial");
    }, 2000);

    return;
  }
  return (
    <div className={`itemcard__addtocart ${addedToggle}`}>
      <button
        onClick={() => handleAddItem(value)}
        disabled={addedToggle !== "initial" ? true : false}
      >
        {addedToggle === "added" ? (
          <svg
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            className=""
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        ) : addedToggle === "exist" ? (
          "Already exist !"
        ) : addedToggle === "initial" ? (
          "Add to Cart"
        ) : (
          ""
        )}
      </button>
    </div>
  );
}
