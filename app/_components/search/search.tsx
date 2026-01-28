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
    const timer = setTimeout(() => {
      onSearch(value);
    }, 900);

    return () => {
      clearTimeout(timer);
    };
  }, [value, onSearch]);

  return (
    <div className="w-2/3 md:w-full">
      <input
        type="search"
        aria-label="Search assets"
        className="
        px-4 py-2
        rounded-lg
        border border-gray-300
        text-sm
        focus:outline-none
        focus:ring-2 focus:ring-blue-400
        w-full
      "
        placeholder="Search assets..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
