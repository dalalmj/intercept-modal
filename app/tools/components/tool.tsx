export function Tool({
  tool,
}: {
  tool: {
    tool_name: string;
    manufacturer: string;
    model: string;
    barcode: string;
  };
}) {
  return (
    <div className="flex flex-row flex-nowrap py-4 px-2 gap-4">
      <div className="text-4xl font-bold border-2 rounded-md w-20 h-20 flex justify-center items-center bg-primary text-primary-foreground">
        {tool?.tool_name.substring(0, 1)}
      </div>
      <div>
        <h1 className="text-2xl ">{tool?.tool_name}</h1>
        <h2 className="text-base ">
          {tool?.manufacturer} - {tool?.model}
        </h2>
        <div className="text-sm text-muted-foreground ">{tool?.barcode}</div>
      </div>
    </div>
  );
}
