import { Blog } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/blogs`;

const getBlogs = async (): Promise<Blog[]> => {
  const res = await fetch(URL);

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Error fetching blogs: ${errorText}`);
  }

  return res.json();
};

export default getBlogs;
