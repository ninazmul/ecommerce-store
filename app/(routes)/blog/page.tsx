import getBlogs from "@/actions/get-blogs";
import Blog from "@/components/blogs";
import Container from "@/components/ui/container";
import { Blog as BlogType } from "@/types";

export const revalidate = 0;

export default async function BlogsPage() {
  try {
    const blogs: BlogType[] = await getBlogs();

    return (
      <Container>
        <div className="space-y-10 pb-10">
          <Blog headerTitle="All Blogs" blogs={blogs} />
        </div>
      </Container>
    );
  } catch (error) {
    console.error("Error fetching data for BlogsPage:", error);
    return (
      <Container>
        <div className="space-y-10 pb-10">
          <div className="text-red-500">
            There was an error loading the blogsPage data. Please try again
            later.
          </div>
        </div>
      </Container>
    );
  }
}
