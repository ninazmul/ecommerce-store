import Container from "@/components/ui/container";
import Link from "next/link";
import MainNav from "@/components/main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "@/components/navbar-actions";
import Image from "next/image";
import logo from "../public/GHANIGHOR.png";
import ToggleButton from "./ui/toggle-button";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaShippingFast } from "react-icons/fa";

export const revalidate = 0;

export default async function Navbar() {
  const categories = await getCategories();

  return (
    <Container>
      <div className="bg-[#009900] flex justify-around items-center">
        <p className="flex items-center justify-center gap-2 text-white text-center p-2 text-xs md:text-sm">
          <FaShippingFast />
          Free Shipping Over ৳5000
        </p>
        <p className="flex items-center justify-center gap-2 text-white text-center p-2 text-xs md:text-sm">
          <FaPhoneVolume />
          Helpline: +8801713737627
        </p>
      </div>
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
            className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1 bg-[#009900] lg:bg-transparent p-4"
            id="navbar-sticky"
          >
            <MainNav data={categories} />
          </div>
        </div>
      </nav>
    </Container>
  );
}
