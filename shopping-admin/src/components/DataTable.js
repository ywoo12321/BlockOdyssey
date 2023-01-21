import React, { useEffect, useState } from "react";
import "../css/DataTable.css";
const DataTable = (productList) => {
  const tittleList = {
    상품번호: "id",
    상품명: "title",
    브랜드: "brand",
    상품내용: "description",
    가격: "price",
    평점: "rating",
    재고: "stock",
  };
  let firstNumber = 1;
  let lastNumber = 10;
  return (
    <>
      <div className="listTittle">
        {Object.entries(tittleList).map(([item, idx]) => (
          <div className={item} value={item} key={idx}>
            {item}
          </div>
        ))}
      </div>
      <div className="table">
        {productList.props
          .slice(firstNumber - 1, lastNumber)
          .map((product, productIdx) => (
            <div className="product" key={productIdx}>
              {Object.entries(tittleList).map(([item, itemIdx]) => (
                <div className={item} value={item} key={itemIdx}>
                  {product[tittleList[item]].length > 40 ? (
                    <p>{product[tittleList[item]].slice(0, 40)}...</p>
                  ) : (
                    <p>{product[tittleList[item]]}</p>
                  )}
                </div>
              ))}
            </div>
          ))}
      </div>
      <div className="page">1,2,3,4,5</div>
    </>
  );
};
export default DataTable;
