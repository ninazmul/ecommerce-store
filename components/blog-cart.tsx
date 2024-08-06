"use client";

import { Blog } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface BlogCard {
  data: Blog;
}

const BlogCart: React.FC<BlogCard> = ({ data }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/blog/${data.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white cursor-pointer rounded-xl border p-3 space-y-4"
    >
      {/* Media */}
      <div className="relative">
        <div className="aspect-square rounded-xl bg-gray-100 relative">
          {data.media && /\.(jpg|jpeg|png|gif|svg)$/i.test(data.media) ? (
            <Image
              src={data.media}
              alt={data.title}
              fill
              className="aspect-square object-cover rounded-md"
            />
          ) : (
            <video
              src={data.media}
              controls
              className="aspect-square object-cover rounded-md"
            />
          )}
        </div>
      </div>
      {/* Title */}
      <div>
        <p className="font-semibold text-lg line-clamp-1">{data.title}</p>
        {/* Content */}
        <div
          className="text-sm text-gray-500 line-clamp-2"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
      </div>
    </div>
  );
};

export default BlogCart;
