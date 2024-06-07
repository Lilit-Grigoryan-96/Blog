const Search = ({ onSearch }) => {
  return (
    <div className="search">
      <input
        type="text"
        onChange={(e) => onSearch(e.target.value)}
        className="search__input"
      />
    </div>
  );
};
export default Search;
