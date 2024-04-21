import Image from "next/image";
import Link from "next/link";
import img from "/public/images/ibexhunting.jpg";
import Aboutparagraph from "./components/widget/aboutt";
import Expert from "./components/widget/expertteam";
import Featureanimal from "./components/widget/featuretrip";
import Huntinganimal from "./components/widget/huntinganimals";
import Bloghomeee from "./components/widget/bloghome";
import Teammem from "./components/widget/teammem";
import Featuretrip from "./components/widget/featuretrip";
import Footer from "./components/widget/footer"
import Button from "./components/widget/button"

export default function Home() {
  return (
    <div className="overflow-hidden">
      <div
        className="bg-cover bg-center h-[35rem] w-full"
        style={{ backgroundImage: `url('/images/ibexhunting.jpg')` }}
      ></div>

      <Aboutparagraph />
      <Huntinganimal />
      {/* <Featuretrip/> */}


      {/* <Featureanimal /> */}
      <Bloghomeee />
      <Expert />
      <Teammem/>
      <Button/>
      <Footer/>
      
    </div>
  );
}
