export default function Products() {
  interface Card {
      name: string;
      description: string;
      price: string;
      oldPrice: string;
      image: string;
  }

  const data: Card[] = [
      {
          name: 'Syltherine',
          description: 'Stylish cafe chair',
          price: "Rp 2.500.000",
          oldPrice: "Rp 3.500.00",
          image: "/image1.png",
      },
      {
          name: 'Leviosa',
          price: "Rp 2.500.000",
          oldPrice: "",
          image: '/image2.png',
          description: 'stylish cafe chair.',
      },
      {
          name: 'Lolito',
          price: "Rp 7.000.000",
          oldPrice: "Rp 14.000.000",
          image: '/image3.png',
          description: 'Luxury big sofa',
      },
      {
          name: 'Raspira',
          price: "Rp 500.000",
          oldPrice: "",
          image: '/image4.png',
          description: 'Outdoor bar table and stool',
      },
      {
          name: 'Grifo',
          price: "Rp 1.500.000",
          oldPrice: "",
          image: '/image5.png',
          description: 'Night lamp',
      },
      {
          name: 'Muggo',
          price: "Rp 150.000",
          oldPrice: "",
          image: 'image6.png',
          description: 'Small mug',
      },
      {
          name: 'Pingky',
          price: "Rp 7.000.000",
          oldPrice: "Rp 14.000.000",
          image: '/Product7.png',
          description: 'Cute bed set',
      },
      {
          name: 'Potty',
          price: "Rp 500.000",
          oldPrice: "",
          image: '/image8.png',
          description: 'Manimalist flower pot',
      },
  ];

  return (
    <>
      <div className="product">
        <h2 className="text-center p-4 font-bold text-[2rem] sm:text-[2.5rem] md:text-[3rem]">
          Our Product
        </h2>
      </div>
  
      <div className="cardsContainer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 p-2 sm:p-4">
        {data.map((card, index) => (
          <div
            className="card bg-white p-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            key={index}
          >
            <img
              src={card.image}
              alt={card.name}
              className="card-img-top w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg mb-4"
            />
            <div className="card-body">
              <h5 className="card-title text-lg sm:text-xl font-semibold mb-2">
                {card.name}
              </h5>
              <p className="card-text text-sm text-gray-600 mb-2">{card.description}</p>
              <h5 className="card-title text-base sm:text-lg font-bold text-[#B88E2F] mb-2">
                {card.price}
              </h5>
              {card.oldPrice && (
                <span className="text-gray-400 font-bold line-through text-sm sm:text-base">
                  {card.oldPrice}
                </span>
              )}
            </div>
          </div>
        ))}
  
        {/* Button Section */}
        <div className="flex justify-center items-center w-full mt-4">
          <button className="productBtn text-[#B88E2F] py-2 px-4 border-2 border-[#B88E2F] rounded-lg hover:bg-[#B88E2F] hover:text-white transition-all duration-300">
            Show More
          </button>
        </div>
      </div>
    </>
  );
}