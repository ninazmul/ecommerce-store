import getBillboards from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

export default async function HomePage() {
  try {
    const billboards = await getBillboards();
    const products = await getProducts({ isFeatured: true });
    const allProducts = await getProducts({ isFeatured: false });

    return (
      <Container>
        <div className="space-y-10 pb-10">
          {billboards.map((billboard: any) => (
            <Billboard key={billboard.id} data={billboard} />
          ))}
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductList title="Featured Products" items={products} />
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
