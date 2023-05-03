import data from "@/data/inventory.json";

import { Tool } from "@/app/tools/components/tool";

async function getData(barcode: string) {
  const item = data.find((item) => item.barcode === barcode);
  return item;
}

export default async function DetailPage({
  params,
}: {
  params: { barcode: string };
}) {
  const tool = await getData(params.barcode);
  //return data ? <ToolDetail tool={data} /> : null;
  if (!tool) return null;
  return (
    <div className="flex flex-col p-6">
      <div className="text-4xl font-semibold text-foreground h-20 flex items-center pl-4 ">
        Tool Details
      </div>

      <Tool tool={tool} />

      <a href="/tools" className="m-4 underline">
        &lt;&nbsp;Tool List
      </a>
    </div>
  );
}
