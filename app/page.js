// app/page.js
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Services from "../components/home/Services";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Portfolio from "../components/home/Portfolio";
import Team from "../components/home/Team";
import Testimonials from "../components/home/Testimonials";
import FAQ from "../components/home/FAQ";
import Contact from "../components/home/Contact"; // নতুন ইম্পোর্ট

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Portfolio />
      <Team />
      <Testimonials />
      <FAQ />
      <Contact /> {/* এখানে যুক্ত করা হয়েছে */}
    </main>
  );
}