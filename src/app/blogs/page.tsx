import Blogss from "../components/widget/blogpage"
import Blogs2 from "../components/widget/blogpage2"
import Blogs3 from "../components/widget/blogpage3"
import Footer from "../components/widget/footer"
import Buttononly from '../components/widget/buttononly'
import BlogmainBg from "../components/widget/BlogmainBg"

export default function Blogs() {
  return (
    <div className=" overflow-hidden">
      
    
      <BlogmainBg/>
      
      <Blogss/>
      {/* <Blogs2/>
      <Blogs3/> */}
      <Buttononly/>
      <Footer/>
      
    </div>
  );
}
