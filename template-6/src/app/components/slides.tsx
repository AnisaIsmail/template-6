import Image from "next/image";
import InnerPeace from "../../../public/inner.png";
import SideInner from "../../../public/Sideinner.png";
import ThirdPic from "../../../public/pic26.png";

export default function Slides() {
  return (
    <>
      <div className="slideSection bg-[#FCF8F3] p-4 sm:p-8 lg:p-12">
        <div className="slideText text-center sm:text-left pt-9">
          <h4 className="font-extrabold text-[2rem] sm:text-[2.5rem] md:text-[3rem] mb-4">
            50+ Beautiful rooms inspiration
          </h4>
          <p className="text-sm sm:text-base mb-4">
            Our designer already made a lot of beautiful prototypes of rooms that inspire you.
          </p>
          <button className="bg-[#ca9d35] text-white py-2 px-6 rounded-md text-sm sm:text-base">
            Explore More
          </button>
        </div>

        {/* Flexbox to arrange images in a row */}
        {/* 1 */}
        
        <div>
          <Image
            src={InnerPeace}
            alt="Inner Peace Room"
            className="w-[250px] h-full object-cover rounded-lg"
          />
        </div>

        {/* 2 */}
        <div>
          <Image
            src={SideInner}
            alt="Side Inner Room"
            className="w-[250px]  h-full object-cover rounded-lg"
          />
        </div>
        
    
      </div>
    </>
  );
}