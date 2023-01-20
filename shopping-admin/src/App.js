import React, { useEffect, useState } from "react";
import DataTable from "./components/DataTable";
import "./css/App.css";
const App = (props) => {
  const selectList = ["전체", "상품명", "브랜드", "상품내용"];
  const [Selected, setSelected] = useState("");
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.products);
        setProductList(res.products);
      });
  }, []);
  const handleSelect = (e) => {
    setSelected(e.target.value);
  };
  return (
    <div className="App">
      <section className="top">
        <div className="topHead">
          <p>상품 검색</p>
        </div>
        <div className="topBottom">
          <p>검색</p>
          <div className="inputBox">
            <select className="select" onChange={handleSelect} value={Selected}>
              {selectList.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
            <input />
            <button>조회</button>
          </div>
        </div>
      </section>
      <section className="middle">
        <div className="numberData">
          <p>
            검색된 데이터 : <span>{"100"}</span>건
          </p>
        </div>
      </section>
      <section className="bottom">
        <DataTable />
      </section>
    </div>
  );
};

export default App;
