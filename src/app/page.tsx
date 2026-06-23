import { Hero }           from "@/components/sections/Hero";
import { InfiniteSlider } from "@/components/sections/InfiniteSlider";
import { About }          from "@/components/sections/About";
import { Features }       from "@/components/sections/Features";
import { Testimonials }   from "@/components/sections/Testimonials";
import { CallToAction }   from "@/components/sections/CallToAction";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <InfiniteSlider />
      <About />
      <Features />
      <Testimonials />
      <CallToAction />
    </main>
  );
}