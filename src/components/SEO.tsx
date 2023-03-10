import React from "react";
import Head from "next/head";

type SEOProps = {
  title: string;
  description: string;
  keywords?: string;
  slug?: string;
};

const SEO = ({
  description,
  keywords,
  title,
  slug = "https://recent-activity-frontend.vercel.app/",
}: SEOProps) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords?.concat(", ")} />
    <meta property="og:type" content="website" />
    <meta name="og:title" property="og:title" content={title} />
    <meta
      name="og:description"
      property="og:description"
      content={description}
    />
    <meta property="og:image" content="/public/new_logo.png" />
    <meta property="og:site_name" content={description} />
    <meta property="og:url" content={slug} />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:site" content="" />
    <meta name="twitter:creator" content={title} />
    <meta name="twitter:image" content="" />
    <link rel="icon" type="image/x-icon" href="/new_logo.png" />
    <link rel="icon" type="image/png" href="/new_logo.png" />
    <link rel="apple-touch-icon" type="image/png" href="/new_logo.png" />
  </Head>
);

SEO.defaultProps = {
  description: `Amruth's Blog`,
  title: `Amruth's Blog`,
  keywords: ["blogs", "amruth's blog", "tech"],
};

export default SEO;
