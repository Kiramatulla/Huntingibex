import React from "react";
import Image from "next/image";
import kiramat from "../../../../public/images/kiramatt.jpeg";
import hassan from "../../../../public/images/hassan.jpg";
import karim from "../../../../public/images/karimalishah.jpg";
import Shared from "../widget/shared";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Teammem() {
  return (
    <div className=" h-screen lg:mb-20">
    <div className="py-10 max-w-screen-lg mx-auto">
        <div className="text-center mb-16">
            <p className="mt-4 text-2xl leading-7  text-gray-900 font-extrabold">
            OUR FABULOUS TEAM
            </p>
            <h3 className="text-xl sm:text-xl leading-normal font-bold tracking-tight text-gray-500">
            MEET OUR FABULOUS TEAM OF PROFESSIONAL HUNTERS
            </h3>
        </div>


        <div className="grid grid-cols-3 col-gap-10 ">

            <div className="text-center bg-white lg:rounded-2xl lg:shadow-2xl">
          <div className="lg:flex lg:justify-center">
          <Image
              src={kiramat}
              alt="huntimage"
              width={300}
              height={300}
              className="lg:rounded-2xl"
              
              
             
            />
          </div>
           
            <div className="flex flex-row pt-6 justify-center">
            <Shared url="https://web.facebook.com/kiramat.ullah.1048">
              <FaFacebook />
            </Shared>
            <Shared url="https://www.instagram.com/kiramat__/">
              <FaInstagram />
            </Shared>
            <Shared url="www.facebook.com">
              <FaYoutube />
            </Shared>
          </div>
                <div className="p-4">
                    <div className="text-md">
                        <a href="#"
                            className="hover:text-indigo-500 text-gray-900 font-semibold transition duration-500 ease-in-out">
                              KIRAMAT ULLAH</a>
                        <p className="text-gray-500 uppercase text-sm">FOUNDER</p>
                    </div>
                   
                    
                </div>

            </div>
            <div className="text-center bg-white lg:rounded-2xl lg:shadow-2xl ">
            <div className="lg:flex lg:justify-center">
            <Image
              src={hassan}
              alt="huntimage"
              width={300}
              height={300}
              className="lg:rounded-2xl"
             
            />
            </div>
            <div className="flex flex-row pt-6 justify-center">
            <Shared url="https://web.facebook.com/kiramat.ullah.1048">
              <FaFacebook />
            </Shared>
            <Shared url="https://www.instagram.com/kiramat__/">
              <FaInstagram />
            </Shared>
            <Shared url="www.facebook.com">
              <FaYoutube />
            </Shared>
          </div>
                <div className="p-4">
                    <div className="text-md">
                        <a href="#"
                            className="hover:text-indigo-500 text-gray-900 font-semibold transition duration-500 ease-in-out">
                            HASSAN AZIZ</a>
                        <p className="text-gray-500 uppercase text-sm"> TEAM</p>
                    </div>
                    
                   
                </div>

            </div>
            <div className="text-center bg-white lg:rounded-2xl lg:shadow-2xl">
            <div className="lg:flex lg:justify-center">
            <Image
              src={karim}
              alt="huntimage"
              width={300}
              height={300}
             className="lg:rounded-2xl"
            />
            </div>
            <div className="flex flex-row pt-6 justify-center">
            <Shared url="https://web.facebook.com/kiramat.ullah.1048">
              <FaFacebook />
            </Shared>
            <Shared url="https://www.instagram.com/kiramat__/">
              <FaInstagram />
            </Shared>
            <Shared url="www.facebook.com">
              <FaYoutube />
            </Shared>
          </div>
                <div className="p-4">
                    <div className="text-md">
                        <a href="#"
                            className="hover:text-indigo-500 text-gray-900 font-semibold transition duration-500 ease-in-out">
                            KARIM ALI SHAH</a>
                        <p className="text-gray-500 uppercase text-sm"> TEAM</p>
                    </div>
                   
                    
                </div>

            </div>

        </div>

    </div>
</div>
  );
}
