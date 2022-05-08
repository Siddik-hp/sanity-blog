import Head from "next/head";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Form from "../../components/Slug/Form";
import SlugAuthor from "../../components/Slug/SlugAuthor";
import Slugbody from "../../components/Slug/Slugbody";
import SlugTitle from "../../components/Slug/SlugTitle";
import { sanityClient, urlFor } from "../../lib/sanity";
import UserComment from "./../../components/Slug/UserComment";

const Post = ({ post }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      <Head>
        <title>Daily blog | Blog</title>
        <meta name="description" content={post.title} />
      </Head>
      <main className="max-w-7xl  mx-auto">
        <Header />
        {loading ? (
          <>
            <div className="pt-10">
              <h1 className="text-center text-xl">Loading..</h1>
            </div>
          </>
        ) : (
          <>
            <div className="">
              <img
                src={urlFor(post.blogImage.asset._ref)}
                alt="blog image"
                className="w-full h-52  object-top"
              />
              <article className="my-10 max-w-2xl mx-auto px-5 ">
                <SlugTitle title={post.title} description={post.description} />
                <SlugAuthor post={post} />
                <Slugbody post={post} />
              </article>
              <hr className="border border-green-400 max-w-3xl mx-auto " />
              <Form post={post} />
              <UserComment comments={post.comments} />
            </div>
          </>
        )}
      </main>
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const query = `*[_type=="post" && slug.current ==$slug ][0]{
  _id,
  _createdAt,
  title,
  description,
  slug,
  author -> {
  name,
  image
   },
  'comments': *[
  _type == "comment" &&
  post._ref == ^._id &&
  approved == true
    ],
blogImage,
body
}
`;
  const post = await sanityClient.fetch(query, { slug: params.slug });
  return {
    props: { post },
    revalidate: 60,
  };
};

export const getStaticPaths = async () => {
  const query = `*[_type=="post"]{
  _id,
  slug
}`;

  const posts = await sanityClient.fetch(query);
  const paths = posts.map((post) => ({
    params: { slug: post.slug.current },
  }));
  return { paths, fallback: false };
};

export default Post;
