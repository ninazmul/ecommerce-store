import Image from "next/image";
import logo from "../public/GHANIGHOR.png";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <footer className="bg-[#009900] dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link
                href="/"
                className="flex md:flex-col lg:flex-row justify-center gap-4 items-center"
              >
                <Image
                  src={logo}
                  alt="GhaniGhor Logo"
                  width={120}
                  height={120}
                />
                <span className="self-center text-4xl lg:text-7xl font-semibold whitespace-nowrap text-white uppercase">
                  GhaniGhor
                </span>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                  Resources
                </h2>
                <ul className="text-white dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link
                      href="/"
                      className="hover:border-b border-white transition-all duration-300"
                    >
                      Shop
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      href="/blog"
                      className="hover:border-b border-white transition-all duration-300"
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      href="/about"
                      className="hover:border-b border-white transition-all duration-300"
                    >
                      About
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                  Follow us
                </h2>
                <ul className="text-white dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a
                      href="https://www.facebook.com/profile.php?id=61561024213682"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:border-b border-white transition-all duration-300"
                    >
                      Facebook
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:border-b border-white transition-all duration-300"
                    >
                      YouTube
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:border-b border-white transition-all duration-300"
                    >
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                  Legal
                </h2>
                <ul className="text-white dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link href="#" className="hover:underline">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <p className="text-white">
              &copy; {new Date().getFullYear()} - All rights reserved by{" "}
              <Link href="/">GhaniGhor</Link>
            </p>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <p className="flex items-center gap-2 text-white">
                Developed by -{" "}
                <Link
                  href="https://artistycode-studio.web.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  ArtistyCode Studio
                </Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
