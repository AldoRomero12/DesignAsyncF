import { Hero }           from "@/components/sections/Hero";
import { About }          from "@/components/sections/About";
import { Features }       from "@/components/sections/Features";
import { CallToAction }   from "@/components/sections/CallToAction";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <About />
      <Features />
      <CallToAction />
    </main>
  );
}