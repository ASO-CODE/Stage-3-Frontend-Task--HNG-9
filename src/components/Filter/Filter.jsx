import React from "react";
import "./Filter.css";
import filterIcon from "../../assets/setting-5.svg";
const Filter = () => {
  return (
    <section id="filter">
      <ul className="filter-list">
        <li>
          <a href="/">Resturant</a>
        </li>
        <li>
          <a href="/">Cottage</a>
        </li>
        <li>
          <a href="/">Castle</a>
        </li>
        <li>
          <a href="/">fantast city</a>
        </li>
        <li>
          <a href="/">beach</a>
        </li>
        <li>
          <a href="/">Carbins</a>
        </li>
        <li>
          <a href="/">Off-grid</a>
        </li>
        <li>
          <a href="/">Farm</a>
        </li>
        <li>
          <a href="/" className="location">
            <span>Location</span> <img src={filterIcon} alt="" />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Filter;
