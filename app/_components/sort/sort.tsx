import React from "react";

export default function Sort({ onSort }: { onSort: (value: string) => void }) {
  return (
    <div>
      <select
        aria-label="Sort assets"
        className="
          px-4 py-2
          rounded-lg
          border border-gray-300
          bg-white
          text-sm text-gray-700
          shadow-sm
          cursor-pointer
          focus:outline-none
          focus:ring-2 focus:ring-blue-400
          hover:border-gray-400
          transition
        "
        onChange={(e) => onSort(e.target.value)}
      >
        <option value="">Sort by</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="change-asc">Change: Low to High</option>
        <option value="change-desc">Change: High to Low</option>
      </select>
    </div>
  );
}
