import getAllProducts from "@/actions/get-all-products";
import getBillboards from "@/actions/get-billboard";
import getBlogs from "@/actions/get-blogs";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import Blog from "@/components/blogs";
import CallToAction from "@/components/call-to-action";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import Pagination from "@/components/ui/pagination";
import WhatsAppToggleButton from "@/components/whatsapp-toggle-button";
import { Billboard as BillboardType, Product } from "@/types";
import { Blog as BlogType } from "@/types";
import Link from "next/link";

const PRODUCTS_PER_PAGE = 12;

export default async function HomePage() {
  try {
    const billboards: BillboardType[] = await getBillboards();
    const featuredProducts: Product[] = await getProducts({ isFeatured: true });
    const allProducts: Product[] = await getAllProducts();
    const allBlogs: BlogType[] = await getBlogs();

    // Show only the first 12 blogs
    const displayedBlogs = allBlogs.slice(0, 12);

    return (
      <Container>
        <div className="space-y-10 pb-10">
          <Billboard billboards={billboards} />
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductList title="Featured Products" items={featuredProducts} />
            <div className="p-3 bg-amber-100 dark:bg-slate-700">
              <CallToAction />
            </div>
            <div className="relative">
              <ProductList title="All Products" items={allProducts} />
            </div>
            <Blog headerTitle="All Blogs" blogs={displayedBlogs} />
            {allBlogs.length > 12 && (
              <div className="text-center">
                <Link href="/blogs">
                  <a className="text-blue-500 hover:underline">Show More</a>
                </Link>
              </div>
            )}
          </div>
        </div>
        <WhatsAppToggleButton />
      </Container>
    );
  } catch (error) {
    console.error("Error fetching data for HomePage:", error);
    return (
      <Container>
        <div className="space-y-10 pb-10">
          <div className="text-red-500">
            There was an error loading the homepage data. Please try again
            later.
          </div>
        </div>
      </Container>
    );
  }
}
