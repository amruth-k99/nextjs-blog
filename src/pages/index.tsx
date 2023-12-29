"use client";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Container from "../components/Container";
import MainContainer from "../components/storefront/ui/MainContainer";
import postAPI from "../apis/posts";
import SEO from "../components/SEO";
import LatestBlogs, { Blog } from "../components/storefront/ui/LatestBlogs";
import MostRead from "../components/storefront/ui/MostRead";
import { ENV } from "../utils/constants";

const Home: NextPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>(new Array(8).fill(null));
  const adsEnabled = ENV.ADS_ENABLED;

  const fetchBlogs = async () => {
    try {
      const blogs = await postAPI.getPosts({
        page: 1,
      });

      setBlogs(blogs.posts.slice(0, 6));
      console.log("blogs.posts", JSON.stringify(blogs.posts[0]));
    } catch (err) {}
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  console.log("ENV.ADS_ENABLED", adsEnabled);
  return (
    <div className="px-3">
      <SEO />

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="col-span-3">
          <Container heading="Top 5 most visited posts">
            <MainContainer />
          </Container>
        </div>

        <div className={adsEnabled ? "col-span-1" : "col-span-2"}>
          <Container heading="Trending Right now!" noPadding={true}>
            <LatestBlogs blogs={blogs} />
          </Container>
        </div>

        {adsEnabled && (
          <div className="col-span-1">
            <Container heading="Top 5 most visited posts">
              <MostRead blogs={blogs.slice(0, 4)} />
            </Container>
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
