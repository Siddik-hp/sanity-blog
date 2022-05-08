import Head from "next/head";
import React from "react";
import BlogPosts from "../components/BlogPosts";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { sanityClient } from "./../lib/sanity";

const Home = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Daily blog | Home</title>
        <meta
          name="description"
          content="Dailyblog.com is a largest latest blog site"
        />
      </Head>
      <div className="max-w-7xl mx-auto ">
        <Header />
        <Hero />
        <BlogPosts posts={posts} />
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const query = `*[_type=="post"]{
  _id,
  title,
  description,
  slug,
  author -> {
  name,
  image
 },
  blogImage,
}
`;
  const posts = await sanityClient.fetch(query);
  return { props: { posts } };
};
export default Home;
