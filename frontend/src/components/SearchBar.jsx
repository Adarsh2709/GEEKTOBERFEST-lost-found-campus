function SearchBar({
  value,
  onChange,
  placeholder = "Search items...",
  name = "search",
  className = "",
}) {
  return (
    <div className={`mb-6 ${className}`}>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default SearchBar;
