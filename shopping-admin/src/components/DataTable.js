import React, { useEffect, useState } from "react";
import "../css/DataTable.css";
const DataTable = (productList) => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const tittleList = {
    상품번호: "id",
    상품명: "title",
    브랜드: "brand",
    상품내용: "description",
    가격: "price",
    평점: "rating",
    재고: "stock",
  };
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
          .slice(offset, offset + limit)
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
      <div className="page">
        <label>
          페이지 당 행:&nbsp;
          <select
            className="optionNumber"
            type="number"
            value={limit}
            onChange={({ target: { value } }) => setLimit(Number(value))}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </label>
      </div>
    </>
  );
};
export default DataTable;
