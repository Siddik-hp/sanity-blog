import React from 'react'
import BlogPost from './BlogPost'

const BlogPosts = ({ posts }) => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5 mt-10'>
            {
                posts.map((post) => {
                    return (
                        <BlogPost key={post._id} post={post} />
                    )
                })
            }
        </div>
    )
}




export default BlogPosts