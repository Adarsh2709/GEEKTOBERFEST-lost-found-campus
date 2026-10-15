import { useEffect, useState } from "react";
import api from "../services/api";
import ItemCard from "../components/ItemCard";
import FilterBar from "../components/FilterBar";

function Items() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const [filters, setFilters] = useState({
    search: "",
    category: "",
    location: "",
    type: "",
    status: "",
  });

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async (customFilters = filters) => {
    try {
      setLoading(true);

      const params = {};

      Object.keys(customFilters).forEach((key) => {
        if (customFilters[key]) {
          params[key] = customFilters[key];
        }
      });

      const response = await api.get("/items", {
        params,
      });

      setItems(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    const updatedFilters = {
      ...filters,
      [name]: value,
    };

    setFilters(updatedFilters);
    fetchItems(updatedFilters);
  };

  const clearFilters = () => {
    const emptyFilters = {
      search: "",
      category: "",
      location: "",
      type: "",
      status: "",
    };

    setFilters(emptyFilters);
    fetchItems(emptyFilters);
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <h1 className="mb-8 text-3xl font-bold">
        Lost & Found Items
      </h1>

      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          name="search"
          value={filters.search}
          onChange={handleChange}
          placeholder="Search items..."
          className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Filters */}
      <FilterBar
        filters={filters}
        onChange={handleChange}
        onClear={clearFilters}
      />

      {/* Results */}
      {loading ? (
        <p>Loading items...</p>
      ) : items.length === 0 ? (
        <div className="rounded-lg bg-gray-100 p-10 text-center">
          <p className="text-gray-500">
            No items found.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <ItemCard
              key={item._id}
              item={item}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Items;