import Link from "next/link";


export default function Button() {
  return (
    <div className="bg-[#a8a29e] h-40 sm:h-64 flex justify-center items-center overflow-hidden">
      <div className="flex flex-col justify-center bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-xl  font-semibold mb-4 text-center">Let&apos;s team up and track them down together </h1>
        <div className="flex justify-center">
        <Link href={"/contactus"}>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Contact Us
            </button></Link>
        </div>
        
      </div>
    </div>
  )
}
