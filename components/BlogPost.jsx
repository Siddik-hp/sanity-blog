import React from 'react'
import { urlFor } from '../lib/sanity'
import Link from "next/link"
import Image from 'next/image'
const BlogPost = ({ post }) => {
    return (
        <Link passHref href={`/post/${post.slug.current}`}>
            <a>

                <div className='rounded-lg overflow-hidden group shadow border-b hover:shadow-lg transition-transform duration-200 ease-in-out cursor-pointer'>
                    <img src={`${urlFor(post.blogImage)}`}
                        alt="not found" className='w-full object-cover h-52 group-hover:scale-105 transition-transform duration-200 ease-in-out' />
                    <div className=' px-3 py-6 flex  justify-between  space-x-5 items-center'>
                        <div className='space-y-2 '>
                            <h1 className='font-bold text-md group-hover:underline underline-offset-4'>{post.title.length > 30 ? post.title.slice(0, 30) : post.title} {post.title.length > 30 && <span>...</span>}  </h1>
                            <p className='text-sm'>{post.description.length > 45 ? post.description.slice(0, 45) : post.description} by <span className='text-green-600 uppercase'> {post.author.name}</span></p>
                        </div>
                        <div>
                            <img src={`${urlFor(post.author.image.asset._ref)}`}
                                alt="author not found" className='w-12 md:w-12  h-10 rounded-full object-cover shadow-lg ' />
                        </div>
                    </div>
                </div>
            </a>

        </Link>

    )
}

export default BlogPost