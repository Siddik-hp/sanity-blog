import React from 'react'

const SlugTitle = ({ title, description }) => {
    return (
        <div className="flex flex-col space-y-2 mb-10">
            <h1 className="font-bold text-3xl tracking-wide	">
                {title}
            </h1>
            <h3 className="text-sm tracking-wide">{description}</h3>
        </div>
    )
}

export default SlugTitle