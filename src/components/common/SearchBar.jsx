import { useState } from "react";

function SearchBar({ onSearch }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const val = e.target.value;
    setValue(val);
    onSearch(val);
  };

  return (
    <div className="w-full mb-6 relative">

      {/* 🔍 INPUT */}
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Search products..."
        className="w-full p-3 pl-10 bg-gray-900 border border-gray-700 rounded text-white focus:outline-none focus:border-pink-500"
      />

      {/* 🔍 ICON */}
      <span className="absolute left-3 top-3 text-gray-400">
        🔍
      </span>

      {/* ❌ CLEAR BUTTON */}
      {value && (
        <button
          onClick={() => {
            setValue("");
            onSearch("");
          }}
          className="absolute right-3 top-2 text-gray-400 hover:text-white"
        >
          ✖
        </button>
      )}
    </div>
  );
}

export default SearchBar;