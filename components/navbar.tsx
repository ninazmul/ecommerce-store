import Container from "@/components/ui/container";
import Link from "next/link";
import MainNav from "@/components/main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "@/components/navbar-actions";
import Image from "next/image";
import logo from "../public/GHANIGHOR.png";
import ToggleButton from "./ui/toggle-button";

export const revalidate = 0;

export default async function Navbar() {
  const categories = await getCategories();

  return (
    <Container>
      <div className="bg-lime-600"><p className="text-white text-center p-2">Helpline:+8801580845746</p></div>
      <nav className="bg-white dark:bg-gray-900 w-full border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto gap-2">
          <Link
            href={"/"}
            className="ml-4 flex items-center gap-2 lg:ml-0 gap-x-2"
          >
            <Image
              src={logo}
              alt="GhaniGhor Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <p className="font-bold text-xl uppercase">GhaniGhor</p>
          </Link>
          <div className="flex lg:order-2 gap-4">
            <NavbarActions />
            <ToggleButton />
          </div>
          <div
            className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1 bg-lime-600 lg:bg-transparent p-4"
            id="navbar-sticky"
          >
            <MainNav data={categories} />
          </div>
        </div>
      </nav>
    </Container>
  );
}
