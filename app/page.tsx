import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import MenuHighlights from "./components/MenuHighlights";
import Booking from "./components/Booking";
import Testimonials from "./components/Testimonials";
import FindUs from "./components/FindUs";
import Footer from "./components/Footer";
import MobileBar from "./components/MobileBar";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <MenuHighlights />
        <Booking />
        <Testimonials />
        <FindUs />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
