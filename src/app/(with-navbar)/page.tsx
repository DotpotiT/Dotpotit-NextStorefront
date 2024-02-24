import Banner from "@/Components/Banner/Banner";
import FreeShipping from "@/Components/FreeShipping/FreeShipping";
import NewArrivals from "@/Components/NewArrivals/NewArrivals";
import Testimonials from "@/Components/Testimonials/Testimonials";

export default function Home() {
  return (
    <main className=" min-h-screen ">
  <Banner/>
  <NewArrivals/>
  <FreeShipping/>
  <Testimonials/>

  
    </main>
  );
}
