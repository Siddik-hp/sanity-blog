import React, { useState } from 'react'
import { useForm } from "react-hook-form";

const Form = ({ post }) => {
    const [formSubmite, setFormSubmite] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        await fetch("/api/createComment", {
            method: "POST",
            body: JSON.stringify(data)
        }).then(() => {
            setFormSubmite(true)
            console.log(data);
        }).catch((error) => {
            console.error(error);
        })

    }
    return (
        <>
            {
                formSubmite ? (<>
                    <div className='max-w-2xl my-10 mx-auto text-center space-y-3'>
                        <h1 className='text-4xl text-green-500 '>Comment submit successfull</h1>
                        <p className='text-xl capitalize'>wait for admin approve below</p>
                    </div></>) :
                    (
                        <>
                            <div className='mt-10 max-w-xl mx-auto p-5'>
                                <div className='max-w-2xl mx-auto'>
                                    <h1 className='text-3xl'>Write your commnent </h1>
                                    <p>Your comment are valuable for us</p>
                                </div>
                                <form method='POST' onSubmit={handleSubmit(onSubmit)} className='mt-10 flex flex-col space-y-6 '>
                                    <input {...register("_id")} type="hidden" name="_id" value={post._id} />
                                    <label className='space-y-2'>
                                        <span className='block'>Name</span>
                                        <input {...register("name", { required: true })} type="text" name="name" className={`form-input w-full border block p-2 rounded outline-none focus:ring  focus:ring-green-400 `} autoComplete='off' placeholder='abubokor' />
                                        {errors.name && <span className='text-red-500  '>Name field is required <sup>*</sup></span>}
                                    </label>
                                    <label className='space-y-2'>
                                        <span className='block'>Email</span>
                                        <input {...register("email", { required: true })} type="email" name="email" className='form-input w-full border block p-2 rounded outline-none focus:ring  focus:ring-green-400' autoComplete='off' placeholder='example@gmail.com' />
                                        {errors.email && <span className='text-red-500  '>Email field is required <sup>*</sup></span>}
                                    </label>
                                    <label className='space-y-2'>
                                        <span className='block'>Comment</span>
                                        <textarea {...register("comment", { required: true })} name="comment" rows="5" className='form-input w-full border block p-2 rounded outline-none focus:ring  focus:ring-green-400 resize-none'></textarea>
                                        {errors.comment && <span className='text-red-500 mt-4  '>Comment field is required <sup>*</sup></span>}
                                    </label>
                                    <input type="submit" value="Summit comment" className='bg-green-600 py-2 rounded text-white hover:bg-green-7s00 cursor-pointer' />
                                </form>
                            </div>
                        </>
                    )
            }

        </>

    )
}

export default Form