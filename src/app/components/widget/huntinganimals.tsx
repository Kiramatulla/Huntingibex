import Image from "next/image";
import img1 from "public/images/ibeximage.jpg";
import img2 from "public/images/mark.jpg";
import img3 from "public/images/markhoree.jpg";
import img4 from "public/images/markhore.jpg";
import ibexphoto from "/public/images/ibexphoto.jpg"

export default function HuntingAnimals() {
  return (
    <section className="bg-[#fafafa] flex flex-col">
      <div className="mt-10">
        <h1 className="text-center font-serif text-2xl font-bold">
          FEATURED TRIPS
        </h1>
        <h2 className="text-center text-lg font-semibold">
          ITS TIME TO START YOUR HUNTING JOURNEY
        </h2>
      </div>
      <main className="flex flex-col justify-center items-center mt-10 mb-10 sm:flex-row ">
        {/* ==============FIRST IMAGE=========== */}
        <div className="flex flex-col items-center m-4 group border shadow-xl ">
          <Image
            src={ibexphoto}
            alt="ibex"
            className="w-80 h-80 object-fill transition-transform transform group-hover:scale-105 rounded-3xl shadow-2xl"
          />
          <h1 className="mt-6 font-serif text-lg font-bold">
            Himalayan Ibex Hunting
          </h1>
          <button className="mt-2 mb-6 bg-slate-700 text-white py-2 px-4 rounded hover:bg-blue-700">
            Learn More
          </button>
        </div>
        {/* ==============SECOND IMAGE=========== */}
        <div className="flex flex-col items-center m-4 group border shadow-xl">
          <Image
            src={img2}
            alt="markhore"
            className="w-80 h-80 object-fill transition-transform transform group-hover:scale-105 rounded-3xl shadow-2xl"
          />
          <h1 className="mt-6 font-serif text-lg font-bold">
            Markhore Hunting
          </h1>
          <button className="mt-2 mb-6 bg-slate-700 text-white py-2 px-4 rounded hover:bg-blue-700">
            Learn More
          </button>
        </div>

        {/* ==============THIRD IMAGE=========== */}
        <div className="flex flex-col items-center m-4 group border shadow-xl">
          <Image
            src={img3}
            alt="bluesheep"
            className="w-80 h-80 object-fill transition-transform transform group-hover:scale-105 rounded-3xl shadow-2xl"
          />
          <h1 className="mt-6 font-serif text-lg font-bold">
            BlueSheep Hunting
          </h1>
          <button className="mt-2 mb-6 bg-slate-700 text-white py-2 px-4 rounded hover:bg-blue-700">
            Learn More
          </button>
        </div>
      </main>
    </section>
  );
}
