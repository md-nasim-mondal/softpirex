import Banner from "@/components/HomePage/Banner";
import HeroSection from "@/components/HomePage/Demos";
import FeaturesSection from "@/components/HomePage/Features";
import SellYourProducts from "@/components/HomePage/SellYourProducts";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <FeaturesSection />
      <HeroSection />
      <SellYourProducts/>
    </div>
  );
}
