export default function ListDetailLayout({
  children,
  detail = null,
}: {
  children: React.ReactNode;
  detail?: React.ReactNode;
}) {
  return (
    <div className="p-6">
      <div className="text-4xl font-semibold text-foreground h-20 flex items-center pl-4 ">
        Tools
      </div>
      {children}
      {detail}
    </div>
  );
}
