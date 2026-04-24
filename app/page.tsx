import Header from "./Components/Shared/Header";
import Footer from "./Components/Shared/Footer";
import Background from "./Components/Home/Background";
import Marquee from "./Components/Home/Marquee";
import WhyUs from "./Components/Home/Why";
import PowerFeatures from "./Components/Home/PowerFeatures";
import Pricing from "./Components/Home/Pricing";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />
      
      <main className="flex flex-col w-full">
        <Background />
        <WhyUs />
        <PowerFeatures />
        <Marquee />
        <Pricing />
      </main>
      
      <Footer />
    </div>
  );
}