import Image from "next/image";
import Setup from "../../../public/setup.jpg";

export default function Grid() {
  return (
    <div className="w-full pt-[30px] md:pt-[67px] pb-[50px] bg-lightBG">
      {/* Heading Section */}
      <div className="text-center relative w-full md:top-5 top-0 px-4">
        <h3 className="text-[14px] md:text-[20px] font-semibold text-Gray2">
          Share your setup with
        </h3>
        <h2 className="text-[24px] sm:text-[30px] md:text-[40px] font-bold text-Gray1 text-center p-2">
          #FuniroFurniture
        </h2>
      </div>

      {/* Image Section */}
      <div className="flex justify-center items-center w-full p-2">
        <Image
          src={Setup}
          width={800}
          height={300}
          alt="images"
          className="w-full max-w-[90%] sm:max-w-[75%] md:max-w-[60%] h-auto"
        />
      </div>
    </div>
  );
}