import Header from "@/components/header";
import Hero from "@/components/hero";
import Section1 from "@/components/section1";
import Section2 from "@/components/section2";
import Section3 from "@/components/section3";
import Footer from "@/components/footer";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />

    </main>
  );
}
