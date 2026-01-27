import { AssetType } from "@/app/_interfaces/asset";
import React from "react";

export default function AssetsTable({ assets }: { assets: AssetType[] }) {
  return (
    <div>
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
                ${asset.price}
              </td>
              <td
                className={`px-6 py-4 font-semibold text-sm ${asset.change > 0 ? "text-green-600" : "text-red-600"} `}
              >
                {asset.change}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
