import React, { useEffect, useState } from "react";
import "./ProductList.css";
import axios from "axios";
import { IoIosSearch } from "react-icons/io";

const ProductList = () => {
  const [productList, setProductList] = useState([]);
  const [category, setCategory] = useState("All");
  const [price, setPrice] = useState("All");
  const [showData, setShowData] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  console.log(searchItem, "ooo");

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProductList(res.data);
      setShowData(res.data);
    });
  }, []);

  useEffect(() => {
    const filterData = productList.filter((item) => item.category == category);
    setShowData(filterData);
  }, [category]);

  useEffect(() => {
    const filterData = productList.filter((item) => item.price < price);
    setShowData(filterData);
  }, [price]);

  useEffect(() => {
    const searchData = productList.filter((item) =>
      item.title.toLowerCase().includes(searchItem.toLowerCase())
    );
    console.log(searchData)
    setShowData(searchData);
  }, [searchItem]);

  return (
    <div className="product">
      <div>
        <h4>New Arrivals</h4>
        <h4>Categories</h4>
        <div>
          <input
            name="category"
            value="men's clothing"
            type="radio"
            onChange={(e) => setCategory(e.target.value)}
          />
          <span>Mens</span>
        </div>
        <div>
          <input
            name="category"
            value="women's clothing"
            type="radio"
            onChange={(e) => setCategory(e.target.value)}
          />
          <span>Women</span>
        </div>
        <div>
          <input
            name="category"
            value="electronics"
            type="radio"
            onChange={(e) => setCategory(e.target.value)}
          />
          <span>Electronics</span>
        </div>
        <h4>Price</h4>
        <div>
          <input
            name="price"
            value={20}
            type="radio"
            onChange={(e) => setPrice(e.target.value)}
          />
          <span>0$ - 20$</span>
        </div>
        <div>
          <input
            name="price"
            value={40}
            type="radio"
            onChange={(e) => setPrice(e.target.value)}
          />
          <span>20$ - 40$</span>
        </div>
        <div>
          <input
            name="price"
            value={80}
            type="radio"
            onChange={(e) => setPrice(e.target.value)}
          />
          <span>40$ - 80$</span>
        </div>
        <div>
          <input
            name="price"
            value={120}
            type="radio"
            onChange={(e) => setPrice(e.target.value)}
          />
          <span>80$ - Above</span>
        </div>
      </div>
      <div>
        <h2>Bedroom</h2>
        <p>Its easy to transform your bedroom interior</p>
        <div>
          <input
            type="text"
            placeholder="search"
            onChange={(e) => setSearchItem(e.target.value)}
          />
          <IoIosSearch />
        </div>

        <div className="productList">
          {showData &&
            showData.map((item) => (
              <div className="singleProduct">
                <img src={item.image} />
                <h4>{item.title}</h4>
                <h3>{item.price}$</h3>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
