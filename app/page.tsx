import Hero from "@/components/hero";
import Section1 from "@/components/section1";
import Section2 from "@/components/section2";


export default function Home() {
    return (
      <main className="flex flex-col min-h-screen">
        <Hero/>
        <Section1/>
        <Section2 />
     </main>
  );
};