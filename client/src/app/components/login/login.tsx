"use client"

import React from 'react'
import Image1 from '@/app/image/login.jpg'
import Image from 'next/image'
import InputField from '../UI/input/InputField'

const Login = () => {
    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <div className='w-10/12 lg:w-1/2 lg:h-3/5 bg-white grid grid-cols-3 rounded-xl overflow-hidden border'>
                <div className="relative w-full h-full">
                    <Image src={Image1} alt="logo" fill className="object-cover" />
                </div>

                <section className='bg-white col-span-2 grid items-center  '>
                    <form className='bg-white  px-8 py-4'>
                        <h1 className='text-2xl font-bold text-center'>
                            Welcome
                        </h1>
                        <br />
                        <div className='flex flex-col gap-3'>
                            <InputField label='Username' type='text' />
                            <InputField label='Password' type='password'/>
                        </div>
                        <a href='#' className='float-end text-xs font-bold'>Forget Password</a>
                        <button className='py-2 mt-4 background-color w-full text-color'> Login</button>
                    </form>
                </section>
            </div>

        </div>
    )
}

export default Login