import Link from 'next/link'
import React from 'react'
const Header = () => {
    return (
        <header className='p-5 py-2 flex justify-between items-center'>
            <div className='flex items-center space-x-5'>
                <Link passHref href="/">
                    <img src="/logo.png" alt="logo.png" className='w-32 object-cover cursor-pointer' />
                </Link>
                <div className='hidden md:inline-flex items-center space-x-5 '>

                    <h3 className='cursor-pointer'>About</h3>
                    <h3 className='cursor-pointer'>Contact</h3>
                    <h3 className="cursor-pointer bg-green-500 text-gray-100 px-4 py-1 rounded-lg hover:shadow hover:bg-green-600  active:bg-green-600 transition-transform duration-200 ease-in-out">Follow</h3>
                </div>
            </div>
            <div className='inline-flex space-x-5 items-center'>
                <h3 className="cursor-pointer">Register</h3>
                <h3 className='bg-green-500 text-white px-4 py-1 rounded-lg cursor-pointer hover:bg-green-600 '>Login</h3>
            </div>
        </header>
    )
}

export default Header