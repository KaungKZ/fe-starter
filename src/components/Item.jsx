import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import jsonData from "../assets/data/data.json";
import Addtocart from "./Addtocart";

export default function Item() {
  const [detail, setDetail] = useState();
  const params = useParams();

  useEffect(() => {
    setDetail(
      jsonData.data
        .find((d) => d.items.some((item) => item.id === parseInt(params.id)))
        .items.find((item) => item.id === parseInt(params.id))
    );
  }, [params.id]);

  return (
    <>
      {detail && (
        <div className="itemdetail fixed-width-md">
          <div className="itemdetail__container">
            <div className="itemdetail__banner">
              <img src={detail.img} alt="product" />
            </div>
            <div className="itemdetail__title">
              <h1>{detail.product}</h1>
            </div>
            <div className="itemdetail__description">
              <p>{detail.content}</p>
            </div>
            <div className="itemdetail__price">
              <span>${detail.pirce}</span>
            </div>
            <Addtocart value={detail}></Addtocart>
          </div>
        </div>
      )}
    </>
  );
}
