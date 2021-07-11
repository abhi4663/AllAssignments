import { useState, useContext } from "react";
import { QAContext } from "../context/useContext";

const SearchBar = (props: any) => {
  const [searchInput, setSearchInput] = useState("");
  const [selected, setSelected] = useState("");
  const { dispatch } = useContext(QAContext);

  function handleSearch(event: any) {
    setSearchInput(event.target.value);
  }
  const handleChange = (e: any) => {
    setSelected(e.target.value);
  };
  return (
    <div className="search-bar">
      <select className="select" onChange={handleChange}>
        <option value="text">Select</option>
        <option value="id">ID</option>
        <option value="category">CATEGORY</option>
        <option value="text">TEXT</option>
      </select>
      <input
        type="text"
        name="id"
        className="search"
        required
        placeholder="Enter here to search"
        onChange={handleSearch}
      />
      <button
        id="search-button"
        type="submit"
        onClick={() => props.searchQuestions(searchInput, selected, dispatch)}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
