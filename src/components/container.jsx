import React, { useState } from "react";
import _ from "lodash";
import Product from "./product/product";
import "./container.scss";
import productDetails from "./productDetails";
import Filters from "./filters/filters";
import { filtersArr, sortByArr } from "../helpers/dropdowns";

const ProductContainer = (props) => {
  const [products, setProducts] = useState(productDetails);
  const [filters, setFilters] = useState(filtersArr[0].name);
  const [sortBy, setSortBy] = useState(sortByArr[0]);

  const filterProducts = (filter) => {
    setFilters(filter.name);
    if (filter.name === "All Products") {
      setProducts(productDetails);
    } else {
      const filteredProducts = _.filter(productDetails, function (o) {
        return (
          o.name.toLowerCase().includes(filter.value.toLowerCase()) ||
          o.tag.toLowerCase() === filter.value.toLowerCase()
        );
      });
      setProducts(filteredProducts);
    }
  };
  const sortProducts = (sort) => {
    let sortedProducts = [];
    if (sort === sortByArr[0]) {
      sortedProducts = products.sort((a, b) => {
        return Number(a.price) - Number(b.price);
      });
    } else {
      sortedProducts = products.sort((a, b) => {
        return Number(b.price) - Number(a.price);
      });
    }
    setSortBy(sort);
    setProducts([...sortedProducts]);
  };
  return (
    <div className="container-fluid">
      <div className="row justify-content-center invite_div p-3">
        <span className="invite_text fw-500 fs-16">
          Invite friends to Big Fashion Festival & get up to $150 MynCash for
          every person who visits
        </span>
        <button className="invite_btn fs-14 mx-3 px-3 py-1">Invite now</button>
      </div>
      <div className="row mt-3">
        <span className="fs-12 text-uppercase px-4">
          Home / Clothing / Mens Clothing / All Mens Clothing
        </span>
      </div>
      <div className="row mt-2 px-4">
        <span className="fs-20 fw-700">{filters}</span>
        <span className="fc-light fs-20">&nbsp;({products.length})</span>
      </div>
      <Filters
        filterProducts={filterProducts}
        sortProducts={sortProducts}
        filters={filters}
        sortBy={sortBy}
      />
      <hr />
      <Product productDetails={products} />
    </div>
  );
};

export default ProductContainer;
