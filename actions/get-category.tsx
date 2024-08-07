import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<Category> => {
  const res = await fetch(`${URL}/${id}`);
  const categories: Category[] = await res.json();
  return categories[0]; 
};

export default getCategory;
