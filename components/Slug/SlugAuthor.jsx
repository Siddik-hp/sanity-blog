import React from "react";
import { urlFor } from "../../lib/sanity";

const SlugAuthor = ({ post }) => {
  return <div className="flex flex-row space-x-5 items-center">
    <div>
      <img src={urlFor(post.author.image.asset._ref)} alt="author" className="w-10 h-10 rounded-full object-cover" />
    </div>
    <div>
      <p className="font-thin	text-sm ">Blog post by  <span className='text-green-600'>{post.author.name}</span> - Published at {new Date(post._createdAt).toLocaleString()}</p>
    </div>
  </div>;
};

export default SlugAuthor;
