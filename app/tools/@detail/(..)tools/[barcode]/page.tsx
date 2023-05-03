import data from "@/data/inventory.json";
import { ToolDetail } from "./tool-detail";

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
  return tool ? <ToolDetail tool={tool} /> : null;
}
