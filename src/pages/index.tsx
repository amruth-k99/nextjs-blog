import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Link from "next/link";
import Container from "../components/Container";
import MainContainer from "../components/storefront/MainContainer";
import RecentActivity from "../components/RecentActivity";
import postAPI from "../apis/posts";
import Skeleton from "react-loading-skeleton";
import SEO from "../components/SEO";

const Home: NextPage = () => {
  const [blogs, setBlogs] = useState(new Array(4).fill(null));

  const fetchBlogs = async () => {
    try {
      const blogs = await postAPI.getPosts({
        page: 1,
      });

      setBlogs(blogs.posts);
    } catch (err) {}
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const _renderTopFivePosts = () => {
    return (
      <div className="grid lg:grid-cols-3 sm:grid-cols-3 md:grid-col-3 gap-x-10 gap-y-5 px-4">
        {blogs.map((blog: any, k) =>
          blog ? (
            <Link key={k} href={`post/${blog.slug}`}>
              <span className="shadow-md rounded-lg cursor-pointer hover:shadow-xl transition">
                <div className="p-2 mt-2">
                  <div className="text-lg font-semibold">{blog.title}</div>
                  <div className="text-sm font-semibold">{blog.author}</div>
                  <div className="text-sm font-normal">{blog.summary}</div>
                </div>
              </span>
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

  return (
    <div className="px-3">
      <SEO />

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="col-span-1">
          <Container heading="Top 5 most visited posts">
            <MainContainer />
          </Container>
        </div>

        <div className="col-span-1">
          <Container heading="Top 5 most visited posts">
            {_renderTopFivePosts()}
          </Container>
        </div>

        <div className="col-span-1">
          <Container heading="Top 5 most visited posts">
            {_renderTopFivePosts()}
          </Container>
        </div>
      </main>
    </div>
  );
};

export default Home;
