import Banner from "@/components/HomePage/Banner";
import ClientsReviews from "@/components/HomePage/ClientsReviews";
import CoreFeatures from "@/components/HomePage/CoreFeatures";
import HeroSection from "@/components/HomePage/Demos";
import FeaturesSection from "@/components/HomePage/Features";
import SellYourProducts from "@/components/HomePage/SellYourProducts";
import Template from "@/components/HomePage/Template";
import Process from "@/components/Process/Process";

export default function Home() {
  return (
    <div className='bg-black'>
      <Banner />
      <FeaturesSection />
      <HeroSection />
      <CoreFeatures />
      <Template />
      <SellYourProducts />
      <ClientsReviews />
      <Process />
    </div>
  );
}
