import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";

export interface Blog {
  _id: string;
  title: string;
  content: string;
  tags: string[];
  slug: string;
  image: string;
  createdBy: {
    _id: string;
    name: string;
  }[];
  comments: never[];
}

const LatestBlogs = ({ blogs = [] }: { blogs: Blog[] }): JSX.Element => {
  const date = moment().format("MMMM DD YYYY");
  return (
    <div className="grid gap-y-5">
      {blogs.map((blog: Blog, k: number) =>
        blog ? (
          <Link key={k} href={`post/${blog.slug}`}>
            <div className="shadow-sm rounded-lg cursor-pointer px-3 transition grid grid-cols-10 gap-3 py-2">
              <div className="my-auto col-span-2">
                <Image
                  width={300}
                  height={300}
                  src={"https://picsum.photos/500/500"}
                  alt="blog-image"
                />
              </div>
              <div className="mt-2 col-span-8">
                <div className="text-xs font-normal text-gray-500">{date}</div>
                <div className="text-lg font-semibold">{blog.title}</div>
                <p aria-rowcount={2} className="text-xs text text-justify">
                  {blog.content}
                </p>
                <div className="text-xs font-normal">
                  {blog.createdBy[0].name}
                </div>
              </div>
            </div>
          </Link>
        ) : (
          <div key={k}>
            <Skeleton width={"70%"} />
            <Skeleton />
            <Skeleton width={"80%"} />
          </div>
        )
      )}
    </div>
  );
};

export default LatestBlogs;
