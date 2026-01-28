import React from "react";

export default function Search({
  onSearch,
}: {
  onSearch: (value: string) => void;
}) {
  return (
    <div>
      <input
        type="search"
        className="
        px-4 py-2
        rounded-lg
        border border-gray-300
        text-sm
        focus:outline-none
        focus:ring-2 focus:ring-blue-400
        w-70
      "
        placeholder="Search assets..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}
