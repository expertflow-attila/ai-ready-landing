import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { Modules } from "@/components/Modules";
import { WhoIsItFor } from "@/components/WhoIsItFor";
import { Instructor } from "@/components/Instructor";
import { Testimonials } from "@/components/Testimonials";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Waitlist } from "@/components/Waitlist";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Problem />
        <Solution />
        <Modules />
        <WhoIsItFor />
        <Instructor />
        <Testimonials />
        <BeforeAfter />
        <Waitlist />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
