import Image from "next/image";
import ShopImage from "../../../public/shophero.png";
import BlowHero from "../components/shopBlow";
import { HiOutlineTrophy } from "react-icons/hi2";
import { SiAdguard } from "react-icons/si";
import { LiaShippingFastSolid } from "react-icons/lia";
import { TfiHeadphoneAlt } from "react-icons/tfi";

export default function ShopHero() {
  interface Card {
    name: string;
    oldprice: string;
    description: string;
    image: string;
    price: string;
  }

  const data: Card[] = [
    {
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      oldprice: "Rp 3.500.00",
      image: "/image1.png",
    },
    {
      name: "Leviosa",
      price: "Rp 2.500.000",
      oldprice: "",
      image: "/image2.png",
      description: "Stylish cafe chair.",
    },
    {
      name: "Lolito",
      price: "Rp 7.000.000",
      oldprice: "Rp 14.000.000",
      image: "/image3.png",
      description: "Luxury big sofa",
    },
    {
      name: "Raspira",
      price: "Rp 500.000",
      oldprice: "",
      image: "/image4.png",
      description: "Outdoor bar table and stool",
    },
    {
      name: "Grifo",
      price: "Rp 1.500.000",
      oldprice: "",
      image: "/image5.png",
      description: "Night lamp",
    },
    {
      name: "Muggo",
      price: "Rp 150.000",
      oldprice: "",
      image: "image6.png",
      description: "Small mug",
    },
    {
      name: "Pingky",
      price: "Rp 7.000.000",
      oldprice: "Rp 14.000.000",
      image: "/Product7.png",
      description: "Cute bed set",
    },
    {
      name: "Potty",
      price: "Rp 500.000",
      oldprice: "",
      image: "/image8.png",
      description: "Minimalist flower pot",
    },
  ];

  return (
    <>
      <div className="shopsect text-center p-4">
        <Image
          src={ShopImage}
          alt="Picture of the author"
          className="w-full h-auto"
        />
        <h3 className="font-bold text-[1.5rem]">Shop</h3>
        <h5 className="shopPara">
          <span className="font-bold">Home</span> Shop
        </h5>
      </div>
      <BlowHero />
      <div className="cardsContainer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {data.map((card, index) => (
          <div
            className="card border rounded-lg overflow-hidden shadow-md"
            key={index}
          >
            <img
              src={card.image}
              alt="picture of the author"
              className="w-full h-48 object-cover"
            />
            <div className="card-body p-4">
              <h5 className="card-title font-bold">{card.name}</h5>
              <p className="card-text">{card.description}</p>
              <h5 className="card-title font-bold">{card.price}</h5>
              <span className="text-gray-400 font-bold line-through">
                {card.oldprice}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-4 p-4">
        <div className="text-center bg-orange-100 text-black hover:bg-yellow-700 hover:text-white text-lg w-12 h-12 flex justify-center items-center">
          1
        </div>
        <div className="text-center  bg-orange-100 text-black hover:bg-yellow-700 hover:text-white text-lg w-12 h-12 flex justify-center items-center">
          2
        </div>
        <div className="text-center bg-orange-100 text-black hover:bg-yellow-700 hover:text-white text-lg w-12 h-12 flex justify-center items-center">
          3
        </div>
        <div className="text-center bg-orange-100 text-black hover:bg-yellow-700 hover:text-white text-lg w-16 h-12 flex justify-center items-center">
          Next
        </div>
      </div>

      {/* Feature Section */}
      <div className="bg-orange-100 py-8">
        <div className="container mx-auto flex flex-wrap justify-center gap-8">
          {/* Box-1 */}
          <div className="w-[260px] flex flex-col items-center gap-y-3">
            <div className="w-12 h-12 rounded-full bg-black flex justify-center items-center border-4 border-stone-400">
              <HiOutlineTrophy className="text-3xl text-white" />
            </div>
            <h1 className="font-bold text-center">High Quality</h1>
            <p className="text-sm text-center">Crafted from top materials</p>
          </div>

          {/* Box-2 */}
          <div className="w-[260px] flex flex-col items-center gap-y-3">
            <div className="w-12 h-12 rounded-full bg-black flex justify-center items-center border-4 border-stone-400">
              <SiAdguard className="text-3xl text-white" />
            </div>
            <h1 className="font-bold text-center">Warranty Protection</h1>
            <p className="text-sm text-center">Over 2 years</p>
          </div>

          {/* Box-3 */}
          <div className="w-[260px] flex flex-col items-center gap-y-3">
            <div className="w-12 h-12 rounded-full bg-black flex justify-center items-center border-4 border-stone-400">
              <LiaShippingFastSolid className="text-3xl text-white" />
            </div>
            <h1 className="font-bold text-center">Free Shipping</h1>
            <p className="text-sm text-center">Orders over $150</p>
          </div>

          {/* Box-4 */}
          <div className="w-[260px] flex flex-col items-center gap-y-3">
            <div className="w-12 h-12 rounded-full bg-black flex justify-center items-center border-4 border-stone-400">
              <TfiHeadphoneAlt className="text-3xl text-white" />
            </div>
            <h1 className="font-bold text-center">24/7 Support</h1>
            <p className="text-sm text-center">Dedicated support</p>
          </div>
        </div>
      </div>
    </>
  );
}