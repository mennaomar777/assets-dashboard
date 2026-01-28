import { AssetType } from "@/app/_interfaces/asset";
import React from "react";

export default function AssetsTable({ assets }: { assets: AssetType[] }) {
  if (assets.length === 0) {
    return (
      <div className="my-5 text-center text-gray-500 font-medium flex flex-col items-center gap-2">
        No assets found matching your criteria.
      </div>
    );
  }

  return (
    <div className="my-5 w-full">
      {/* Table for tablet & desktop */}
      <div className="hidden md:block w-full">
        <table className="w-full shadow-lg my-5">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-center text-xs font-semibold text-gray-700 uppercase">
                Name
              </th>
              <th className="px-6 py-4 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-4 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-4 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Change
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-center">
            {assets.map((asset) => (
              <tr
                key={asset.id}
                className="hover:bg-blue-50 transition-colors duration-150 ease-in-out"
              >
                <td className="px-6 py-4 text-sm font-medium text-gray-900 ">
                  {asset.name}
                </td>
                <td className="px-6 py-4 flex justify-center">
                  <span className="px-3 py-1 flex justify-center items-center w-fit text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                    {asset.category}
                  </span>
                </td>
                <td className="px-6 py-4 font-semibold text-sm text-gray-900">
                  ${asset.price.toFixed(2)}
                </td>
                <td
                  className={`px-6 py-4 font-semibold text-sm ${asset.change > 0 ? "text-green-600" : "text-red-600"} `}
                >
                  {asset.change.toFixed(2)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cards for mobile */}
      <div className="md:hidden flex flex-col gap-4 my-5">
        {assets.map((asset) => (
          <div
            key={asset.id}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col gap-2"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-gray-800">{asset.name}</h3>
              <span
                className={`font-semibold ${asset.change > 0 ? "text-green-600" : "text-red-600"}`}
              >
                {asset.change.toFixed(2)}%
              </span>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-600">${asset.price.toFixed(2)}</p>
              <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold">
                {asset.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
