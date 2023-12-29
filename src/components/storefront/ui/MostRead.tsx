import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import Tags from "./Tags";

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

const MostRead = ({ blogs = [] }: { blogs: Blog[] }): JSX.Element => {
  const date = moment().format("MMMM DD YYYY");
  return (
    <div className="grid gap-y-5">
      {blogs.map((blog: Blog, k: number) =>
        blog ? (
          <div className="py-2">
            <div className="rounded-lg px-3 transition grid grid-cols-10 gap-3 py-1">
              <div className="mt-2 col-span-6">
                <div className="text-xs font-normal text-gray-500">{date}</div>
                <Link href={`/post/${blog.slug}`}>
                  <div className="text-lg font-semibold leading-tight">
                    {blog.title}
                  </div>
                </Link>
                <p aria-rowcount={2} className="text-xs text text-justify">
                  {blog.content}
                </p>
                <div className="text-xs font-normal text-gray-400">
                  {blog.createdBy[0].name}
                </div>

                <div className="text-xs font-normal underline text-blue-600">
                  Continue Reading
                </div>
              </div>
              <div className="my-auto col-span-4">
                <Image
                  width={400}
                  height={400}
                  src={"https://picsum.photos/500/500"}
                  alt="blog-image"
                />
              </div>
            </div>
            <Tags
              tags={[
                "New",
                "exciting",
                "provoking",
                "New",
                "exciting",
                "provoking",
                "New",
                "exciting",
                "provoking",
              ]}
            />
          </div>
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

export default MostRead;
