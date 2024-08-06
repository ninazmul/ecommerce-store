"use client";

import React from "react";
import { Blog as BlogType } from "@/types";
import BlogCart from "./blog-cart";

interface BlogProps {
  blogs: BlogType[];
  headerTitle: string;
}

const Blog: React.FC<BlogProps> = ({ blogs = [], headerTitle }) => {
  return (
    <div>
      {/* Header Title */}
      <div className="mb-6 w-full">
        <h3 className="font-bold text-3xl">{headerTitle}</h3>
      </div>
      {/* Blog Posts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
        {blogs.map((blog) => (
          <BlogCart key={blog.id} data={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
