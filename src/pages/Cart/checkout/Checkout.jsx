import React, { Component, useState, useEffect } from "react";
import Style from "../../../styles/Checkout.module.scss";
function Checkout() {
  const [productlist, setProductList] = useState([]);
  const [count, setCount] = useState(1);
  //使用fetch抓取資料庫
  const getalldata = () => {
    fetch("http://localhost:8888/testphp/getproduct.php")
      .then((response) => response.json())
      .then((data) => {
        setProductList(data);
      });
  };
  // 載入網頁時執行抓取資料庫回傳值
  useEffect(() => {
    getalldata();
  }, []);
  productlist.map(function (v) {
    console.log(v.ppic_main);
  });
  //取的商品金額
  var ttresault = 0;
  productlist.map((val) => {
    console.log(val.id);
    ttresault += val.pprice * count;
  });

  return (
    <>
      <div id={Style["warp-c"]}>
        {/*結帳頁面*/}

        {/* 左邊頁面 */}
        <div className={Style["left"]}>
          <div className={Style["bread-warp"]}>
            <ul className={Style["breadcrumb"]}>
              <li className={Style["breadlist"]}>購物車</li>
              <li className={Style["breadlist"]}>相關資訊</li>
              <li className={Style["breadlist"]}>付款方式</li>
            </ul>
          </div>

          <div className={Style.info}>
            <h1 className={Style["indotext"]}>運送與收件資訊</h1>
            <form action="">
              <div className={Style["filed"]}>
                <label htmlFor="">電子信箱</label>
                <input type="text" name="" id="" defaultValue="abc@gmail.com" />
              </div>
              <div className={Style["filed"]}>
                <label htmlFor="">運送方式</label>
                <select name="" id="">
                  <option>一般宅配</option>
                </select>
              </div>

              <div className={Style["filed-name"]}>
                <label htmlFor="">姓氏</label>
                <label htmlFor="">姓名</label>
              </div>
              <div className={Style["filed-name"]}>
                <input
                  type="text"
                  name=""
                  id=""
                  defaultValue=""
                  placeholder="收件人姓氏"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  defaultValue=""
                  placeholder="收件人姓名"
                />
              </div>

              <div className={Style["filed"]}>
                <label htmlFor="">手機號碼</label>
                <input
                  type="text"
                  name=""
                  id=""
                  defaultValue=""
                  placeholder="範例：0978666111"
                />
              </div>
              <div className={Style["filed-name"]}>
                <label htmlFor="">縣市</label>
                <label htmlFor="">鄉鎮市區</label>
              </div>
              <div className={Style["filed-name"]}>
                <select name="" id="">
                  <option>信義區</option>
                  <option>天龍區</option>
                </select>
                <select name="" id="">
                  <option>台北市</option>
                </select>
              </div>
              <div className={Style["filed"]}>
                <label htmlFor="">地址</label>
                <input
                  type="text"
                  name=""
                  id=""
                  defaultValue=""
                  placeholder="請輸入地址"
                />
              </div>
              <div className={Style["filed"]}>
                <p>
                  為確保日本直送商品順利通關，本國人士請填寫與身分證相同之中文姓名，外籍人士請填寫與護照相符之英文姓名。
                </p>
              </div>
              <div className={Style["nextsub"]}>
                <h1>下一步：選擇付款方式→</h1>
              </div>
            </form>
          </div>
        </div>
        {/* 右邊頁面 */}
        <div className={Style["right"]}>
          {/* 商品資訊 */}
          {productlist.map(function (product, index) {
            return (
              <div className={Style["item"]} key={index}>
                <div>
                  <img src={product.ppic_main} />
                </div>
                <div className={Style["item-info"]}>
                  <div className={Style["item-title"]}>
                    <h2>{product.pname}</h2>
                  </div>
                  <div className={Style["item-qty"]}>
                    數量：<label htmlFor="">{product.qty}</label>
                    NT$<label htmlFor="">400元</label>
                  </div>
                  <div className={Style["more-info"]}>
                    <p>此商品包含以下商品</p>
                    <strong>
                      <p>{product.pname}</p>
                    </strong>
                    <p>12入</p>
                  </div>
                </div>
              </div>
            );
          })}
          {/* ------------------------------ */}
          <hr />
          {/* 商品小計 */}
          <div className={Style["total"]}>
            <div>
              <p>商品小計</p>
              <p>NT${ttresault}</p>
            </div>
            <div>
              <p>運費</p>
              <p>NT$80</p>
            </div>
            <div>
              <p>結帳總金額</p>
              <p>NT$400</p>
            </div>
          </div>
          {/* -------------------------- */}
        </div>
        {/*Right結束-------------------------- */}

        {/*container結束-------------------------- */}
      </div>
    </>
  );
}

export default Checkout;
