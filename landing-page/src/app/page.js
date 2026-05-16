import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Programs from "@/components/Programs";
import Testimonials from "@/components/Testimonials";

function Home() {
  return (
    <main className="bg-slate-950 text-white overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}

export default Home;
