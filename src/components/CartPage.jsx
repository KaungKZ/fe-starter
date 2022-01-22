import React, { useContext, useState, useEffect } from "react";
import { AddedItemsContext } from "./App";
import { Link, useLocation } from "react-router-dom";
import QuantityInput from "./QuantityInput";

export default function CartPage() {
  const { addedItems, setAddedItems } = useContext(AddedItemsContext);
  const [isChecked, setIsChecked] = useState({});
  const [isCheckout, setIsCheckout] = useState(false);

  const location = useLocation();

  useEffect(() => {
    // Scroll top when location changes
    window.scrollTo(0, 0);
  }, [location]);

  function handleRemoveItems() {
    if (isChecked["all"]) {
      setAddedItems([]);
      setIsChecked({});
    } else {
      // get truthy values in checked array

      const _toRemoveCheckedArray = Object.fromEntries(
        Object.entries(isChecked).filter(([_, value]) => value === true)
      );

      // delete selected items

      const _filteredItems = addedItems.filter((item) => {
        return (
          Object.keys(_toRemoveCheckedArray)
            .map((v) => parseInt(v))
            .indexOf(item.id) === -1
        );
      });

      setAddedItems(_filteredItems);

      // delete selected items (checks) from checked array as well

      setIsChecked(
        Object.fromEntries(
          Object.entries(isChecked).filter(([_, value]) => !value)
        )
      );
    }
  }

  function handleCheckout() {
    setAddedItems([]);
    setIsChecked({});
    setIsCheckout(true);
  }

  function calculateTotal() {
    return addedItems
      .reduce((acc, cur) => {
        return (
          Number(cur.pirce.replace(/[^0-9.-]+/g, "")) *
            (cur.qty ? cur.qty : 1) +
          acc
        );
      }, 0)
      .toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
  }

  return (
    <div className="cart-wrapper fixed-width-md">
      <div className="cart">
        <div className="cart__title">
          <h1>Shopping bag</h1>
        </div>
        {addedItems.length > 0 ? (
          <div className="cart__body">
            <div className="cart__table">
              <div className="cart__table-header">
                <div className="cell">
                  <div className="checkbox-container">
                    <label>
                      <input
                        type="checkbox"
                        onChange={() => {
                          setIsChecked(() => {
                            const fullObj = {};
                            addedItems.forEach((item, i) => {
                              fullObj[item.id] = isChecked["all"]
                                ? false
                                : true;
                            });
                            return {
                              all: !isChecked["all"],
                              ...fullObj,
                            };
                          });
                        }}
                      />
                      <svg
                        className={`checkbox ${
                          isChecked["all"] ? "checkbox--active" : ""
                        }`}
                        aria-hidden="true"
                        viewBox="0 0 15 11"
                        fill="none"
                      >
                        <path
                          d="M1 4.5L5 9L14 1"
                          strokeWidth="2"
                          stroke={isChecked["all"] ? "#40BFFF" : "none"}
                        />
                      </svg>
                    </label>
                  </div>
                </div>
                <div className="cell">Items</div>
                <div className="cell">Amount</div>
                <div className="cell">Price</div>
              </div>
              <div className="cart__table-body">
                {addedItems.map((item, i) => {
                  return (
                    <div className="row" key={item.id}>
                      <div className="cell">
                        <div className="checkbox-container">
                          <label>
                            <input
                              type="checkbox"
                              onChange={() => {
                                setIsChecked({
                                  ...isChecked,
                                  ...{ [item.id]: !isChecked[item.id] },
                                });
                              }}
                            />
                            <svg
                              className={`checkbox ${
                                isChecked[item.id] ? "checkbox--active" : ""
                              }`}
                              aria-hidden="true"
                              viewBox="0 0 15 11"
                              fill="none"
                            >
                              <path
                                d="M1 4.5L5 9L14 1"
                                strokeWidth="2"
                                stroke={isChecked[item.id] ? "#40BFFF" : "none"}
                              />
                            </svg>
                          </label>
                        </div>
                      </div>
                      <div className="cell">
                        <div className="cell-container">
                          <div className="item-details">
                            <div className="item-name">
                              {item.product.length > 20
                                ? item.product.substring(0, 20).concat(" ...")
                                : item.product}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="cell">
                        <QuantityInput
                          item={item}
                          addedItems={addedItems}
                          setAddedItems={setAddedItems}
                        ></QuantityInput>
                      </div>
                      <div className="cell">
                        <div className="item-price">${item.pirce}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="cart__options">
              <div className="top-options">
                <div className="cart__remove">
                  <button onClick={handleRemoveItems}>Delete item</button>
                </div>
                <div className="cart__total">
                  <span>
                    Total:{" "}
                    <span className="total-price">{calculateTotal()}</span>
                  </span>
                </div>
              </div>

              <div className="bottom-options">
                <div className="cart__checkout">
                  <button onClick={handleCheckout}>Check Out</button>
                </div>
              </div>
            </div>
          </div>
        ) : isCheckout ? (
          <div className="aftercheckout-cart">
            <span className="text">
              Your order is succeed !{" "}
              <Link to="/" className="link">
                Go back for more items
              </Link>{" "}
            </span>
          </div>
        ) : !isCheckout ? (
          <div className="empty-cart">
            <span className="text">
              Your cart is empty, please{" "}
              <Link to="/" className="link">
                add some items
              </Link>{" "}
              to see your cart.
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
}
