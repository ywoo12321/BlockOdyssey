import React, { useEffect, useState } from "react";
import "../css/DataTable.css";
const DataTable = () => {
  const tittleList = [
    "상품번호",
    "상품명",
    "브랜드",
    "상품내용",
    "가격",
    "평점",
    "재고",
  ];
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        setProductList(res.products);
      });
  }, []);
  return (
    <>
      <div className="listTittle">
        {tittleList.map((item, idx) => (
          <div className={item} value={item} key={idx}>
            {item}
          </div>
        ))}
      </div>
      <div className="table">cons</div>
      <div className="page">1,2,3,4,5</div>
    </>
  );
};
export default DataTable;
