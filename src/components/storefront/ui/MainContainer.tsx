import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Tags from "./Tags";

const MainContainer = (): JSX.Element => {
  const blogs = [
    {
      createdAt: moment().format("MMM DD, YYYY"),
      id: "345345",
      thumbnail: "https://picsum.photos/600/400",
    },
  ];

  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog.id} className="border-b mb-2 p-2">
          <Image
            src={{
              src: blog.thumbnail,
              height: 400,
              width: 600,
            }}
            alt="image"
          />
          <div>
            <p className="text-gray-400 text-sm my-2">{blog.createdAt}</p>
            <Link href="/post/asdasd">
              <div className="text-2xl font-semibold mb-2">
                For Fantastic Beasts Series, a Case of Diminishing Returns
              </div>
            </Link>
            <p className="text-gray-800 text-sm text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
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
        </div>
      ))}
    </div>
  );
};

export default MainContainer;
