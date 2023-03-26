import React from "react";
import { FaSistrix } from "react-icons/fa";
import style from "./Search.module.css";

const Search = () => {
  return (
    <div className={style.trends}>
      <div className={style.trends__search}>
        <input
          type="text"
          className={style.trend__control}
          placeholder="Search Twitter"
          onChange={(e) => e.target.value}
        />
        <div className={style.trend__icon}>
          <FaSistrix className={style.search} />
        </div>
      </div>
    </div>
  );
};

export default Search;
