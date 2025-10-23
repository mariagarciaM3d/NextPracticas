import About from "./sections/About";
import Booking from "./sections/Booking";
import Events from "./sections/Events";
import Gallery from "./sections/Gallery";
import Hero from "./sections/Hero";
import Menu from "./sections/Menu";
import Specials from "./sections/Specials";
import Testimonials from "./sections/Testimonials";
import WhyUs from "./sections/WhyUs";


export default function Home() {
  return (
    <>
    <Hero/>
    <main id="main">
      <About/>
      <WhyUs/>
      <Menu/>
      <Specials />
      <Events/>
      <Booking/>
      <Testimonials/>
      <Gallery/>
    </main>
    
    </>
  );
}
