import React from 'react';

import { useForm } from 'react-hook-form';

export default function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <>
            <div name="Contact" className="max-w-screen-2x1 container mx-auto px-4 md:px-20 mt-10">
                <h1 className="text-3xl font-bold mb-5">Contact</h1>
                <span className="font-semibold">Please fill out the form below to contact me</span>

                <div className="flex flex-col items-center justify-center mt-10 rounded-lg pl-2">
                    <form onSubmit={handleSubmit(onSubmit)} className="bg-slate-200 w-96 px-8 py-6 rounded-xl">
                        <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
                        <div className="flex flex-col mb-4 ">
                            <label className="block text-gray-700 ml-1">Fullname</label>
                            <input
                                {...register('name', { required: true })}
                                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                id="name"
                                placeholder="Enter Your Fullname"
                                name="name"
                            />
                            {errors.name && <span className="text-red-500">This field is required</span>}
                        </div>

                        <div className="flex flex-col mb-4 ">
                            <label className="block text-gray-700 ml-1">Email Address</label>
                            <input
                                {...register('email', { required: true })}
                                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="email"
                                id="email"
                                placeholder="Enter Email Address"
                                name="email"
                            />
                            {errors.email && <span className="text-red-500">This field is required</span>}
                        </div>

                        <div className="flex flex-col mb-4 ">
                            <label className="block text-gray-700 ml-1">Message</label>
                            <textarea
                                {...register('message', { required: true })}
                                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="message"
                                placeholder="Enter Any Query"
                                name="message"
                            />
                            {errors.message && <span className="text-red-500">This field is required</span>}
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-[125px]"
                            name="submit"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
