"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export default function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const params = useParams();
  const routes = [
    {
      href: `/`,
      label: "Shop",
      active: pathname === `/`,
    },
    {
      href: `/blog`,
      label: "Blog",
      active: pathname === `/blog`,
    },
    {
      href: `/about`,
      label: "About Us",
      active: pathname === `/about`,
    }
  ];

  return (
    <nav className="mx-6 flex flex-col md:flex-row items-start p-2 gap-2 md:gap-4 lg:gap-6">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "font-semibold text-lg transition-colors hover:text-black",
            route.active
              ? "text-white lg:text-lime-900 border-b-2 border-white lg:border-lime-900"
              : "text-white lg:text-lime-900"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
}
