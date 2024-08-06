"use client";

import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface CategoryNavProps {
  data: Category[];
}
const CategoryNav: React.FC<CategoryNavProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <nav className="mx-6 flex flex-col items-start p-2 gap-2 md:gap-4 lg:gap-6">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "font-semibold md:text-sm transition-colors hover:text-black",
            route.active
              ? "text-lime-900 border-b-2 border-white md:border-lime-900"
              : "text-lime-900"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default CategoryNav;
