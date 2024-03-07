import Navbar from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Logoscroll from "./components/Logo-scroll";
import Contactfrom from "./components/Contact-From";
import Subinfo from "./components/Sub-Info";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import Callbox from "./components/Call-box";
import Headermobile from "./components/mobile/Headermobile";

export default function Home() {
  return (
    <>
      <Headermobile />
      <Navbar />
      <Banner />
      <About />
      <Subinfo />
      <Gallery />
      <Subinfo />
      <Services />
      <Callbox />
      <Testimonial />
      <Blog />
      <Logoscroll />
      <Contact />
      <Contactfrom />
      <Footer />
    </>
  );
}
