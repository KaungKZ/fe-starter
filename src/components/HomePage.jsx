import React, { useState, useEffect } from "react";
import jsonData from "../assets/data/data.json";
import ItemCard from "./ItemCard";

export default function HomePage() {
  // console.log(jsonData.data.find((d) => d.type.toLowerCase() === "cat"));
  const [data, setData] = useState([]);
  const [seemoreClicked, setSeemoreClicked] = useState([]);

  useEffect(() => {
    setData(Object.keys(jsonData.data).map((key) => jsonData.data[key]));
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      setSeemoreClicked(
        data.map((d) => {
          return {
            [d.type]: false,
          };
        })
      );
    }
  }, [data]);

  // console.log(data);

  function handleSeemoreList(d) {
    // setData(data);
    // console.log(items.slice(4, items.length));\
    const newSeemore = [...seemoreClicked];
    const selectedSeemore = data.findIndex((v) => v.type === d.type);
    newSeemore[selectedSeemore][d.type] = !newSeemore[selectedSeemore][d.type];

    setSeemoreClicked(newSeemore);
    // setSeemoreClicked([
    //   ...seemoreClicked,
    //   {
    //     [data.type]: !seemoreClicked[data.type],
    //   },
    // ]);

    // console.log(data);
  }
  // console.log(seemoreClicked);

  return (
    <section className="lists-wrapper">
      {data.map((d, i) => {
        return (
          <div className={`fixed-width-md ${d.type} list-wrapper`} key={d.type}>
            <div className={`${d.type}__container`}>
              <div className="title">
                <h2>{d.type}</h2>
              </div>
              <div className="list">
                {/* {console.log(seemoreClicked[i][d.type])} */}
                {seemoreClicked[i]?.[d.type]
                  ? d.items.map((_d, i) => {
                      return (
                        <ItemCard
                          value={_d}
                          type={d.type}
                          data={data}
                          key={i}
                        ></ItemCard>
                      );
                    })
                  : [...d.items].slice(0, 4).map((_d, i) => {
                      return (
                        <ItemCard
                          value={_d}
                          type={d.type}
                          data={data}
                          key={i}
                        ></ItemCard>
                      );
                    })}
              </div>
              <div
                className="seemore-list"
                onClick={() => handleSeemoreList(d)}
              >
                <button>
                  {seemoreClicked[i]?.[d.type] ? "See Less" : "See All"}
                </button>
              </div>
            </div>
          </div>
        );
      })}
      {/* <div className="cat fixed-width-md">
        <div className="cat__container">
          <div className="cat__title">
            <h2>Cats</h2>
          </div>
          <div className="cat__lists">
            {data
              .find((d) => d.type.toLowerCase() === "cat")
              .items.map((d, i) => {
                return <ItemCard value={d} key={i}></ItemCard>;
              })}
          </div>
        </div>
      </div>
      <div className="dog"></div>
      <div className="rabbit"></div> */}
    </section>
  );
}
