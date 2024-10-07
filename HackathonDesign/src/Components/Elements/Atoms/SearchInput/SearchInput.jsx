import "./SearchInput.css";
import TopBtn from "../Button/TopBtn/TopBtn";

const SearchInput = () => {
  return (
    <div className="SearchInputContainer">
      <form action="#" className="SearchInputContainerForm">
        <input
          type="text"
          className="SearchInputContainerFormInput"
          placeholder="Paste News or article"
        />
        <TopBtn title={"Search"} />
      </form>
    </div>
  );
};

export default SearchInput;
