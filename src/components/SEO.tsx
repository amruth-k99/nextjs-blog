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
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="true"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
      rel="stylesheet"
    />
  </Head>
);

SEO.defaultProps = {
  description: `Amruth's Blog`,
  title: `Amruth's Blog`,
  keywords: ["blogs", "amruth's blog", "tech"],
};

export default SEO;
