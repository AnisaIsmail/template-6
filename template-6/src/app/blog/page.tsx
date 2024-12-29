import React from "react";
import Image from "next/image";
import Header from "../../../public/image/header.png";
import Deatail from "../../../public/blog.png";

export default function Blog() {
  return (
    <>
      <div className="shopsect text-center p-4">
        {/* Header Image */}
        <Image
          src={Header}
          height={1000}
          width={1440}
          alt="header-image"
          className="w-full h-auto object-cover"
        />

        {/* Blog Title */}
        <h3 className="font-bold text-[1.5rem] md:text-[2rem] mt-4">Blog</h3>
        <h5 className="shopPara text-sm md:text-base mt-8">
          <span className="font-bold">Blog</span> Shop
        </h5>

        {/* Blog Detail Image */}
        <div className="mt-6 flex justify-center">
          <Image
            src={Deatail}
            height={800}
            width={1000}
            alt="Blog-image"
            className="w-full max-w-[1000px] h-auto"
          />
        </div>
      </div>
    </>
  );
}
