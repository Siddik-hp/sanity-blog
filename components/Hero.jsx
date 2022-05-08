import React from 'react'

const Hero = () => {
    return (
        <div className='flex justify-between items-center border-b border-black p-5 bg-green-500'>
            <div className='space-y-3'>
                <h1 className='text-5xl font-bold  max-w-xl leading-snug'><span className='text-white underline' title='www.dailyblog.com'>Daily blog</span> where you can read, write and comment on blog </h1>
                <p className='text-lg text-gray-700 font-semibold'>Come our website and read most updated blogs</p>
            </div>
            <img src="/text.png" alt="text.png" className='hidden sm:inline-flex h-40 lg:h-96' />
        </div>
    )
}

export default Hero