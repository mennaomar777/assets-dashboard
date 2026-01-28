import React from "react";

export default function Filter({
  onFilter,
}: {
  onFilter: (value: string) => void;
}) {
  return (
    <div>
      <select
        aria-label="Filter assets"
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
        onChange={(e) => onFilter(e.target.value)}
      >
        <option value="">All Categories</option>
        <option value="Tech">Tech</option>
        <option value="Automotive">Automotive</option>
        <option value="E-commerce">E-commerce</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Fashion">Fashion</option>
      </select>
    </div>
  );
}
