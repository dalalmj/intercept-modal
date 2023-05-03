import data from "@/data/inventory.json";
import Link from "next/link";

async function getData() {
  return data;
}

export default async function ListPage() {
  const data = await getData();
  return (
    <div className="flex flex-wrap gap-2 w-full overflow-y-auto ">
      {data.map((item, i) => (
        <Link
          href={`/tools/${item.barcode}`}
          key={`${i}`}
          className="flex flex-row flex-nowrap gap-2 p-4 rounded-lg max-w-sm w-full bg-background hover:bg-muted"
          replace={true}
        >
          <div className=" text-2xl border-muted-foreground font-semibold border-2 rounded-full w-12 h-12 flex justify-center items-center">
            {item.tool_name.substring(0, 1)}
          </div>
          <div>
            <h1 className="text-base ">{item.tool_name}</h1>
            <h2 className="text-sm text-muted-foreground ">
              {item.manufacturer}
            </h2>
          </div>
        </Link>
      ))}
    </div>
  );
}
