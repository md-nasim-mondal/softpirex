import Banner from "@/components/HomePage/Banner";
import ClientsReviews from "@/components/HomePage/ClientsReviews";
import HeroSection from "@/components/HomePage/Demos";
import FeaturesSection from "@/components/HomePage/Features";
import SellYourProducts from "@/components/HomePage/SellYourProducts";

export default function Home() {
  return (
    <div className="bg-black">
      <Banner />
      <FeaturesSection />
      <HeroSection />
      <SellYourProducts/>
      <ClientsReviews/>
    </div>
  );
}
