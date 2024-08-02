import getAllProducts from "@/actions/get-all-products";
import getBillboards from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import { Billboard as BillboardType, Product } from "@/types";

export const revalidate = 0;

export default async function HomePage() {
  try {
    const billboards: BillboardType[] = await getBillboards();
    const featuredProducts: Product[] = await getProducts({ isFeatured: true });
    const allProducts: Product[] = await getAllProducts();

    return (
      <Container>
        <div className="space-y-10 pb-10">
          <Billboard billboards={billboards} />
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductList title="Featured Products" items={featuredProducts} />
            <ProductList title="All Products" items={allProducts} />
          </div>
        </div>
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
