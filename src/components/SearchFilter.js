const SearchFilter = ({ props }) => {
  const getField = (e) => {
    console.log(e.target.value);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Search for science"
        value={props}
        onChange={(e) => getField(e)}
      />
    </form>
  );
};

export default SearchFilter;
