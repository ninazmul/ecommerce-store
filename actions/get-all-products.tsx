import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getAllProducts = async (): Promise<Product[]> => {
  const res = await fetch(URL);

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
};

export default getAllProducts;
