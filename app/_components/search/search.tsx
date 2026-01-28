"use client";
import React, { useEffect, useState } from "react";

export default function Search({
  onSearch,
}: {
  onSearch: (value: string) => void;
}) {
  const [value, setValue] = useState("");

  // Debounce
  useEffect(() => {
    const period = setTimeout(() => {
      onSearch(value);
    }, 500);

    return () => {
      clearTimeout(period);
    };
  }, [value, onSearch]);

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
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
