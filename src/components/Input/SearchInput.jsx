const SearchInput = ({ placeholder, name, register }) => {
  return (
    <input
      type="search"
      placeholder={placeholder}
      {...register(name)}
      className="bg-darkLight outline-none rounded-sm px-4 py-2 text-gray"
    />
  );
};

export default SearchInput;
