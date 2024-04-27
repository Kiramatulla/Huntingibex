import Image from "next/image";
import img1 from "../../../../public/images/ibeximage.jpg";
import img2 from "../../../../public/images/mark.jpg";
import img3 from "../../../../public/images/markhoree.jpg";
// import ibexphoto from "../../../../public/images/ibexphoto.jpg"

export default function Packages() {
  return (
    <section className="mt-20 pt-20 pb-20 bg-gray-100 overflow-hidden">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold font-serif mb-2">Featured Trips</h2>
        <p className="text-lg font-semibold">It's Time to Start Your Hunting Journey</p>
      </div>

      {/* First Package */}
      <div className="flex flex-col items-center mb-16 lg:flex-row lg:justify-center lg:items-stretch">
        <div className="bg-white border-2 rounded-xl overflow-hidden shadow-lg mb-8 lg:mb-0 lg:mr-8 lg:w-[22rem]">
          <div className="relative w-full h-[18rem] lg:h-[28.25rem]">
            <Image
              src={img1}
              alt="Hunt Image"
              className="absolute inset-0 w-full h-full object-cover border-8 rounded-2xl transition-transform duration-300 transform hover:scale-105"
            />
          </div>

          <div className="p-4">
            <div className="flex justify-between border-b-2 border-black text-center pb-4">
              <h3 className="font-semibold">Days - 12</h3>
              <h3 className="font-semibold">Trophy - 1</h3>
              <h3 className="font-semibold">Level - Difficulty</h3>
            </div>
            <div className="text-center my-4">
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300">
                Learn More
              </button>
            </div>
            <div className="text-center">
              <h2 className="pb-2 font-semibold">Himalayan Ibex</h2>
              <h2 className="pb-2 font-semibold">Hunza Gilgit Baltistan</h2>
            </div>
          </div>
        </div>

        {/* Second Package */}
        <div className="bg-white border-2 rounded-xl overflow-hidden shadow-lg lg:w-[22rem]">
          <div className="relative w-full h-[18rem] lg:h-[28.25rem]">
            <Image
              src={img2}
              alt="Hunt Image"
              className="absolute inset-0 w-full h-full object-cover border-8 rounded-2xl transition-transform duration-300 transform hover:scale-105"
            />
          </div>

          <div className="p-4">
            <div className="flex justify-between text-center border-b-2 border-black pb-4">
              <h3 className="font-semibold">Days - 12</h3>
              <h3 className="font-semibold">Trophy - 1</h3>
              <h3 className="font-semibold">Level - Difficulty</h3>
            </div>
            <div className="text-center my-4">
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300">
                Learn More
              </button>
            </div>
            <div className="text-center">
              <h2 className="pb-2 font-semibold">Himalayan Ibex</h2>
              <h2 className="pb-2 font-semibold">Hunza Gilgit Baltistan</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Third Package */}
      <div className="flex flex-col items-center border-2 p-4 lg:flex-row lg:justify-center lg:items-stretch">
        <div className="relative w-full h-[18rem] lg:w-[34rem] lg:h-[24rem] mb-6 lg:mr-8">
          <Image
            src={img3}
            alt="Markhore"
            className="absolute inset-0 w-full h-full object-cover border-8 rounded-3xl shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
          />
        </div>

        <div className="bg-white border-2 rounded-xl lg:w-[24rem]">
          <div className="p-8">
            <div className="flex justify-between text-center ">
              <h3 className="font-semibold pr-4">Days - 12</h3>
              <h3 className="font-semibold pr-4">Trophy - 1</h3>
              <h3 className="font-semibold">Level - Difficulty</h3>
            </div>
            <div className="text-center my-4">
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300">
                Learn More
              </button>
            </div>
            <div className="text-center">
              <h2 className="pb-2 font-semibold">Himalayan Ibex</h2>
              <h2 className="pb-2 font-semibold">Hunza Gilgit Baltistan</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

