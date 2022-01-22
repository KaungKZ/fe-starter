import React from "react";

import { Link } from "react-router-dom";
import Addtocart from "./Addtocart";

export default function ItemCard(props) {
  const { value } = props;

  return (
    <div className="itemcard">
      <div className="itemcard__banner">
        <img src={value.img} alt="item" />
      </div>
      <div className="itemcard__content">
        <div className="itemcard__title">
          <h2>{value.product}</h2>
        </div>
        <div className="itemcard__description">
          <p>
            {value.content.length > 80 ? (
              <>{value.content.slice(0, 80).concat("...")}</>
            ) : (
              value.content
            )}

            <Link
              to={`/item/${value.id}`}
              // state={value}
              className="itemcard__seemore"
            >
              See More
            </Link>
          </p>
        </div>
        <div className="itemcard__options">
          <div className="itemcard__price">
            <span>${value.pirce}</span>
          </div>
          <Addtocart value={value}></Addtocart>
          {/* <div className={`itemcard__addtocart ${addedToggle}`}>
            <button
              onClick={() => handleAddItem(value)}
              disabled={addedToggle !== "initial" ? true : false}
            >
              {addedToggle === "added" ? (
                <svg
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  class=""
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
          </div> */}
        </div>
      </div>
    </div>
  );
}
