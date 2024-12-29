import React from "react";
import Image from "next/image";
import Header from "../../../public/image/header.png";

export default function Contact() {
    return (
        <div className="shopsect text-center p-4">
            {/* Header Image */}
            <Image
                src={Header}
                height={1000}
                width={1440}
                alt="header-image"
                className="w-full h-auto object-cover"
            />

            {/* Title Section */}
            <h3 className="font-bold text-[1.5rem] md:text-[2rem] text-center mt-4">
                Contact
            </h3>
            <h5 className="shopPara text-center text-sm md:text-base mt-8">
                <span className="font-bold">Contact</span> Shop
            </h5>

            {/* Contact Form Section */}
            <div className="flex justify-center mt-8">
                <section className="contact-form w-full max-w-[600px] bg-gray-100 p-6 rounded-md shadow-md">
                    <h2 className="text-xl md:text-2xl font-bold text-center mb-4">
                        Contact Us
                    </h2>
                    <form className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Full Name"
                            required
                            className="p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            required
                            className="p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                        <input
                            type="text"
                            placeholder="Phone Number"
                            className="p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                        <textarea
                            placeholder="Your Message"
                            rows={5}
                            required
                            className="p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
                        ></textarea>

                        <div className="flex justify-center items-center">
                            <button
                                className="bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-red-500 hover:via-orange-500 hover:to-yellow-500 md:px-6 md:py-3 text-sm md:text-base"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
}