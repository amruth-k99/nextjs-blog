import moment from "moment";
import Image from "next/image";
import React, { useState } from "react";

const MainContainer = (): JSX.Element => {
  const blogs = [
    {
      createdAt: moment().format("MMM DD, YYYY"),
      id: "345345",
      thumbnail: '"https://picsum.photos/600/400"',
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
            <p>{blog.createdAt}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainContainer;
