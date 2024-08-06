import { Blog } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/blogs`;

const getBlog = async (id: string): Promise<Blog> => {
  if (!id) {
    throw new Error("Blog ID is required");
  }

  const res = await fetch(`${URL}/${id}`);

  if (!res.ok) {
    const errorText = await res.text(); // Get the error text
    throw new Error(errorText); // Throw an error with the text response
  }

  try {
    return await res.json(); // Parse JSON response
  } catch (error) {
    throw new Error("Failed to parse JSON response");
  }
};

export default getBlog;
