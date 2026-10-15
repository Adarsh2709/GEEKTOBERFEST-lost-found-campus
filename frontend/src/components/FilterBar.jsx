function FilterBar({ filters, onChange, onClear, className = "" }) {
  return (
    <div className={`mb-8 ${className}`}>
      <div className="grid gap-4 md:grid-cols-4">
        <select
          name="category"
          value={filters.category || ""}
          onChange={onChange}
          className="rounded-lg border px-4 py-3"
          aria-label="Filter by category"
        >
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Documents">Documents</option>
          <option value="Clothing">Clothing</option>
          <option value="Accessories">Accessories</option>
          <option value="Books">Books</option>
          <option value="Keys">Keys</option>
          <option value="Bags">Bags</option>
          <option value="Other">Other</option>
        </select>

        <select
          name="location"
          value={filters.location || ""}
          onChange={onChange}
          className="rounded-lg border px-4 py-3"
          aria-label="Filter by location"
        >
          <option value="">All Locations</option>
          <option value="Library">Library</option>
          <option value="Canteen">Canteen</option>
          <option value="Hostel">Hostel</option>
          <option value="Main Gate">Main Gate</option>
          <option value="Academic Block">Academic Block</option>
          <option value="Sports Complex">Sports Complex</option>
          <option value="Parking">Parking</option>
          <option value="Other">Other</option>
        </select>

        <select
          name="type"
          value={filters.type || ""}
          onChange={onChange}
          className="rounded-lg border px-4 py-3"
          aria-label="Filter by type"
        >
          <option value="">Lost & Found</option>
          <option value="lost">Lost</option>
          <option value="found">Found</option>
        </select>

        <select
          name="status"
          value={filters.status || ""}
          onChange={onChange}
          className="rounded-lg border px-4 py-3"
          aria-label="Filter by status"
        >
          <option value="">All Status</option>
          <option value="active">Active</option>
          <option value="claimed">Claimed</option>
          <option value="recovered">Recovered</option>
        </select>
      </div>

      {onClear && (
        <button
          type="button"
          onClick={onClear}
          className="mt-4 rounded-lg border px-4 py-2 hover:bg-gray-100"
        >
          Clear Filters
        </button>
      )}
    </div>
  );
}

export default FilterBar;
