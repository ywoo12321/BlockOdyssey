import React, { useState } from "react";
import "./App.css";
const App = (props) => {
  const selectList = ["전체", "상품명", "브랜드", "상품내용"];
  const [Selected, setSelected] = useState("");
  const handleSelect = (e) => {
    setSelected(e.target.value);
  };
  return (
    <div className="App">
      <section className="top"></section>
      <section className="middle">
        <div className="numberData">
          <p>검색된 데이터 : {"100"}건</p>
        </div>
      </section>
      <section className="bottom"></section>
    </div>
  );
};

export default App;
