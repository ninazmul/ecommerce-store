"use client";

import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MainNavProps {
  data: Category[];
}
const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <nav className="mx-6 flex flex-col md:flex-row items-start p-2 gap-2 md:gap-4 lg:gap-6">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "font-semibold text-lg transition-colors hover:text-black",
            route.active ? "text-white lg:text-lime-900 border-b-2 border-white lg:border-lime-900" : "text-white lg:text-lime-900"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
