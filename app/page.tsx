"use client";
import { useState } from "react";
import AssetsTable from "./_components/AssetsTable/AssetsTable";
import { data } from "./_lib/data";
import { AssetType } from "./_interfaces/asset";
export default function Home() {
  const [assets, setAssets] = useState<AssetType[]>(data);
  return (
    <div>
      <div className="container mx-auto max-w-[90%]">
        <AssetsTable assets={assets} />
      </div>
    </div>
  );
}
