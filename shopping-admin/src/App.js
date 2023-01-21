import React, { useEffect, useState } from "react";
import DataTable from "./components/DataTable";
import "./css/App.css";
const App = (props) => {
  const selectList = ["전체", "상품명", "브랜드", "상품내용"];
  const searchTagList = {
    전체: ["brand", "description", "title"],
    상품명: ["title"],
    브랜드: ["brand"],
    상품내용: ["description"],
  };
  const [Selected, setSelected] = useState("");
  const [searchTag, setSearchTag] = useState("");
  const [productList, setProductList] = useState([]);
  const [dataList, setDataList] = useState([]);
  const [userInput, setUserInput] = useState("");
  const searchList = [];
  let searchTarget = "";
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
    setSearchTag(e.target.value);
  };
  const getValue = (e) => {
    console.log(e.target.value);
    setUserInput(e.target.value);
  };
  const getKeyByValue = (obj, value) => {
    let check = 0;
    return searchTagList[Selected].map((item) => {
      searchTarget = obj[item];
      if (searchTarget.includes(value) === true) {
        check += 1;
      }
      return check;
    });
  };
  const add = (arr) => {
    return arr.reduce((a, b) => a + b, 0);
  };
  const getData = (e) => {
    productList.map((product) => {
      if (add(getKeyByValue(product, userInput)) >= 1) {
        searchList.push(product);
      }
    });
    userInput === null ? setDataList(productList) : setDataList(searchList);
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
            <input onChange={getValue} />
            <button onClick={getData}>조회</button>
          </div>
        </div>
      </section>
      <section className="middle">
        <div className="numberData">
          <p>
            검색된 데이터 : <span>{dataList.length}</span>건
          </p>
        </div>
      </section>
      <section className="bottom">
        <DataTable props={dataList} />
      </section>
    </div>
  );
};

export default App;
