"use client";
import { useEffect, useState } from "react";
import AssetsTable from "./_components/assetsTable/AssetsTable";
import { data } from "./_lib/data";
import { AssetType } from "./_interfaces/asset";
import Sort from "./_components/sort/Sort";
import Filter from "./_components/filter/Filter";
import Search from "./_components/search/Search";
export default function Home() {
  const [assets, setAssets] = useState<AssetType[]>(data);
  const [sortBy, setSortBy] = useState<string>("");
  const [filterBy, setFilterBy] = useState<string>("");
  const [search, setSearch] = useState("");
  let newAssets: AssetType[] = [...assets];

  // Real-Time Assets
  useEffect(() => {
    const interval = setInterval(() => {
      setAssets((prevAssets) =>
        prevAssets.map((asset) => {
          const newPrice = Number(asset.price + (Math.random() * 4 - 2));
          const newChange = Number(
            ((newPrice - asset.price) / asset.price) * 100,
          );
          return { ...asset, price: newPrice, change: newChange };
        }),
      );
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

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
        <div className="bg-blue-50 mt-3 px-6 py-4 border-b  rounded-xl border-gray-300 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Assets Overview
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Total assets: {assets.length}
            </p>
          </div>
          <div className="w-full md:w-1/3">
            <Search onSearch={setSearch} />
          </div>
          <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
            <Sort onSort={setSortBy} />
            <Filter onFilter={setFilterBy} />
          </div>
        </div>

        <AssetsTable assets={newAssets} />
      </div>
    </main>
  );
}
