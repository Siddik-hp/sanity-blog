import React from 'react'
import PortableText from "react-portable-text"
const Slugbody = ({ post }) => {
    return (
        <div className='mt-10 slug_body'>
            <PortableText
                content={post.body}
                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            />
        </div>
    )
}

export default Slugbody