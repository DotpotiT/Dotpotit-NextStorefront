import Banner from "@/Components/Banner/Banner";
import FeatureProducts from "@/Components/FeatureProducts/FeatureProducts";
import FlashSale from "@/Components/FlashSale/FlashSale";
import FreeShipping from "@/Components/FreeShipping/FreeShipping";
import NewArrivals from "@/Components/NewArrivals/NewArrivals";
import Testimonials from "@/Components/Testimonials/Testimonials";

export default function Home() {
  return (
    <main className=" min-h-screen ">
  <Banner/>
  <NewArrivals/>
  <FlashSale/>
  <FeatureProducts/>
  <FreeShipping/>
  <Testimonials/>

  
    </main>
  );
}
