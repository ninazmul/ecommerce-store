"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useCallback, useRef } from "react";
import CategoryNav from "./category-nav";
import { Category } from "@/types";

interface MainNavProps {
  categories: Category[];
}

export default function MainNav({
  categories,
  className,
  ...props
}: MainNavProps & React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const showDropdown = useCallback(() => {
    if (timeoutId) clearTimeout(timeoutId);
    setIsDropdownOpen(true);
  }, [timeoutId]);

  const hideDropdown = useCallback(() => {
    if (
      dropdownRef.current &&
      dropdownRef.current.contains(document.activeElement)
    ) {
      return;
    }

    const id = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 300);

    setTimeoutId(id);
  }, []);

  return (
    <nav className="mx-6 flex flex-col md:flex-row items-start p-2 gap-2 md:gap-4 lg:gap-6">
      {[
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
        },
      ].map((route) => (
        <div
          key={route.href}
          className="relative"
          onMouseEnter={route.label === "Shop" ? showDropdown : undefined}
          onMouseLeave={route.label === "Shop" ? hideDropdown : undefined}
        >
          <Link
            href={route.href}
            className={cn(
              "font-semibold text-lg transition-colors hover:text-black",
              route.active
                ? "text-white md:text-lime-900 border-b-2 border-white md:border-lime-900"
                : "text-white md:text-lime-900"
            )}
          >
            {route.label}
          </Link>
          {route.label === "Shop" && isDropdownOpen && (
            <div
              ref={dropdownRef}
              className="absolute left-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10"
            >
              <CategoryNav data={categories} />
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}
