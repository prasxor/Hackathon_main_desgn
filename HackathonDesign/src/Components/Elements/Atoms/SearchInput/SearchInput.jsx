import React from "react";
import "./SearchInput.css";
import TopBtn from "../Button/TopBtn/TopBtn";

const SearchInput = ({ label, value, onChange, searchPlaceholder }) => {
  return (
      <form className="SearchInputContainer" action="#">
        <input
          type="Text"
          id="SearchInputContainerFormInput"
          value={value}
          onChange={onChange}
          placeholder={searchPlaceholder}
        />
        <TopBtn title={"Search"} />
      </form>
  );
};

export default SearchInput;
