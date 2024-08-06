import getBlog from "@/actions/get-blog";
import Container from "@/components/ui/container";
import Image from "next/image";
import { Blog as BlogType } from "@/types";

interface BlogPageProps {
  params: {
    blogId: string;
  };
}

const BlogPage: React.FC<BlogPageProps> = async ({ params }) => {
  const { blogId } = params;
  let blog: BlogType | null = null;

  if (!blogId) {
    return (
      <Container>
        <div className="px-4 py-10">
          <div className="text-red-500 text-center">
            Blog ID is missing. Please try again.
          </div>
        </div>
      </Container>
    );
  }

  try {
    blog = await getBlog(blogId);
  } catch (error) {
    console.error("Error fetching blog:", error);
    return (
      <Container>
        <div className="px-4 py-10">
          <div className="text-red-500 text-center">
            An error occurred while fetching the blog. Please try again later.
          </div>
        </div>
      </Container>
    );
  }

  if (!blog) {
    return (
      <Container>
        <div className="px-4 py-10">
          <div className="text-red-500 text-center">Blog not found.</div>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="px-4 py-10 sm:px-6 lg:px-8">
        {/* Blog Details */}
        <div className="bg-white rounded-lg shadow-md border p-6">
          <h1 className="font-bold text-4xl mb-6">{blog.title}</h1>
          {/* Media */}
          <div className="relative rounded-lg overflow-hidden mb-6">
            {blog.media && /\.(jpg|jpeg|png|gif|svg)$/i.test(blog.media) ? (
              <Image
                src={blog.media}
                alt={blog.title}
                layout="responsive"
                width={1200}
                height={675}
                className="object-cover"
              />
            ) : (
              <video src={blog.media} controls className="w-full rounded-lg" />
            )}
          </div>
          {/* Content */}
          <div
            className="prose max-w-full"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      </div>
    </Container>
  );
};

export default BlogPage;
