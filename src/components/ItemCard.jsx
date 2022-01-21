import React, { useState, useEffect, useContext } from "react";
import { AddedItemsContext } from "./App";

export default function ItemCard(props) {
  // const [seemoreDetail, setSeemoreDetail] = useState(false);
  const { value, type, data } = props;
  const { addedItems, setAddedItems } = useContext(AddedItemsContext);

  // console.log(items);

  // console.log(value);

  // function handleSeemoreDetail() {
  //   setSeemoreDetail(() => !seemoreDetail);
  // }

  function handleAddItem(item) {
    // console.log(type, item);

    // const selectedList = data.find((d) => d.type === type);

    if (addedItems.some((item) => item.id === value.id)) {
      console.log("already exist");
    } else {
      setAddedItems([...addedItems, item]);
    }
  }

  return (
    <div className="itemcard">
      <div className="itemcard__banner">
        <img src={value.img} alt="item-image" />
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

            <a href="#" className="itemcard__seemore">
              See More
            </a>
          </p>
        </div>
        <div className="itemcard__options">
          <div className="itemcard__price">
            <span>${value.pirce}</span>
          </div>
          <div className="itemcard__addtocart">
            <button onClick={() => handleAddItem(value)}>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
