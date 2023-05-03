import Link from "next/link";

export default async function MainPage() {
  return (
    <main className=" m-8 ">
      <Link
        href="/tools"
        className=" border rounded-md h-12 flex items-center px-2"
      >
        Example showing List Layout + Modal Detail View using Intercepting
        Routes
      </Link>
      <aside className="p-4">
        This example shows one way to achieve list + detail view using
        Intercepting Routes.
      </aside>
    </main>
  );
}
