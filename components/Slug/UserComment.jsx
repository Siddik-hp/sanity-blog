import React from 'react'

const userComment = ({ comments }) => {
    return (
        <>
            <div className='mt-10 my-5 max-w-2xl mx-auto p-5'>
                {
                    comments.length == 0 ? <><h1 className='text-xl text-center'>No comments on this blog</h1> </> :
                        <>
                            <div className='my-5'>
                                <h1 className='text-xl '>Total Comments {comments.length}</h1>
                            </div>
                            {
                                comments.map((comment) => {
                                    return (
                                        <>
                                            <div key={comment._id} className='shadow p-2 rounded-lg group hover:bg-gray-700 transition duration-200 ease-in-out my-3 cursor-not-allowed'>
                                                <div className='flex flex-row space-x-5 '>
                                                    <div>
                                                        <div className='w-10 h-10 bg-gray-700 rounded-full text-center items-center flex justify-center text-white font-bold group-hover:bg-white group-hover:text-black'>{comment.name.slice(0, 1)}</div>
                                                    </div>
                                                    <div className='group-hover:text-white'>
                                                        <h1>{comment.comment}</h1>
                                                        <p className='text-sm '>Comment by <span className='text-yellow-600'>{comment.name}</span></p>
                                                    </div>
                                                </div>
                                            </div></>
                                    )
                                })
                            }
                        </>
                }
            </div>
        </>
    )
}

export default userComment