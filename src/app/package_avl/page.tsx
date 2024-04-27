import Packages from "../components/widget/packages"
import Contactpackage from "../components/widget/contactpackage"
import Footer from "../components/widget/footer"

export default function package_avl() {
  return (
    <div>
      <div
        className="bg-cover bg-center h-[35rem] w-full"
        style={{ backgroundImage: `url('/images/gulmit.jpg')` }}
      ></div>
      <Packages/>
      <Contactpackage/>
      <Footer/>
    </div>
  );
}
