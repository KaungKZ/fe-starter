import React, { useRef } from "react";

export default function QuantityInput({ item, addedItems, setAddedItems }) {
  const quantityRef = useRef();
  function handleQuantityChange(e, item) {
    let input = parseInt(e.target.value);
    let maxValue = quantityRef.current.max;

    if (input <= 0 || isNaN(input)) {
      input = 1;
    } else if (input > maxValue) {
      input = maxValue;
    }
    let newItems = [...addedItems];

    const selectedRow = newItems.findIndex((v) => v.id === item.id);

    newItems[selectedRow].qty = input;

    setAddedItems(newItems);
  }

  function handleProductSizeUp(item) {
    let maxValue = quantityRef.current.max;
    var oldValue = parseFloat(quantityRef.current.value);
    if (oldValue >= maxValue) {
      var newVal = oldValue;
    } else {
      newVal = oldValue + 1;
    }
    let newItems = [...addedItems];
    const selectedRow = newItems.findIndex((v) => v.id === item.id);
    newItems[selectedRow].qty = newVal;
    setAddedItems(newItems);
  }

  function handleProductSizeDown(item) {
    let minValue = quantityRef.current.min;
    var oldValue = parseFloat(quantityRef.current.value);
    if (oldValue <= minValue) {
      var newVal = oldValue;
    } else {
      newVal = oldValue - 1;
    }
    let newItems = [...addedItems];
    const selectedRow = newItems.findIndex((v) => v.id === item.id);
    newItems[selectedRow].qty = newVal;
    setAddedItems(newItems);
  }
  return (
    <div className="quantity">
      <input
        type="number"
        min="1"
        max="50"
        step="1"
        value={item.qty ? item.qty : 1}
        ref={quantityRef}
        onChange={(e) => handleQuantityChange(e, item)}
      />
      <div className="quantity-nav">
        <div
          className="quantity-button quantity-up"
          onClick={() => handleProductSizeUp(item)}
          onKeyDown={() => handleProductSizeUp(item)}
          role="button"
          tabIndex="0"
        >
          +
        </div>
        <div
          className="quantity-button quantity-down"
          role="button"
          onClick={() => handleProductSizeDown(item)}
          onKeyDown={() => handleProductSizeDown(item)}
          tabIndex="0"
        >
          -
        </div>
      </div>
    </div>
  );
}
