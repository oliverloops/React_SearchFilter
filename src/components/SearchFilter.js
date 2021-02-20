import { IoMdSearch } from "react-icons/io";

const SearchFilter = ({ props, getField }) => {
  return (
    <div className="search-container">
      <form>
        <IoMdSearch className="search-icon" size={20} />
        <input
          type="text"
          placeholder="Search for science"
          value={props}
          onChange={(e) => getField(e)}
        />
      </form>
    </div>
  );
};

export default SearchFilter;
