"use client";
import { useState } from "react";
import AssetsTable from "./_components/AssetsTable/AssetsTable";
import { data } from "./_lib/data";
import { AssetType } from "./_interfaces/asset";
import Sort from "./_components/Sort/Sort";
import Filter from "./_components/Filter/Filter";
import Search from "./_components/Search/Search";
export default function Home() {
  const [assets, setAssets] = useState<AssetType[]>(data);
  const [sortBy, setSortBy] = useState<string>("");
  const [filterBy, setFilterBy] = useState<string>("");
  const [search, setSearch] = useState("");
  let newAssets: AssetType[] = [...assets];

  // Sort
  if (sortBy === "price-asc")
    newAssets = newAssets.sort((a, b) => a.price - b.price);
  if (sortBy === "price-desc")
    newAssets = newAssets.sort((a, b) => b.price - a.price);
  if (sortBy === "change-asc")
    newAssets = newAssets.sort((a, b) => a.change - b.change);
  if (sortBy === "change-desc")
    newAssets = newAssets.sort((a, b) => b.change - a.change);

  // Filter
  if (filterBy)
    newAssets = newAssets.filter((asset) => asset.category === filterBy);

  // Search
  if (search) {
    newAssets = newAssets.filter((asset) =>
      asset.name.toLowerCase().includes(search.toLowerCase()),
    );
  }
  return (
    <main>
      <div className="container mx-auto max-w-[90%]">
        <div className="bg-blue-50 mt-3 px-6 py-4 border-b  border-gray-300 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Assets Overview
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Total assets: {assets.length}
            </p>
          </div>
          <div>
            <Search onSearch={setSearch} />
          </div>
          <div className="flex justify-between items-center gap-3">
            <Sort onSort={setSortBy} />
            <Filter onFilter={setFilterBy} />
          </div>
        </div>

        <AssetsTable assets={newAssets} />
      </div>
    </main>
  );
}
