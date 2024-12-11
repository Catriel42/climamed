import PropTypes from "prop-types";

const SearchBar = ({ placeholder = "Buscar...", onSearch }) => {
  return (
    <div className="relative w-full">
      <input
        type="text"
        className="w-full px-4 py-2 pr-12 
                  border rounded-lg 
                  border-accent/30
                  hover:border-accent
                  focus:outline-none 
                  focus:ring-2 
                  focus:ring-secondary 
                  focus:border-secondary
                  bg-light/50
                  text-primary
                  placeholder:text-primary/50
                  transition-all duration-200"
        placeholder={placeholder}
      />
      <button
        onClick={(e) => onSearch(e.target.previousSibling.value)}
        className="absolute right-0 top-0 h-full px-4 
                  bg-primary text-light rounded-r-lg 
                  hover:bg-primary 
                  transition-colors"
      >
        Buscar
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
