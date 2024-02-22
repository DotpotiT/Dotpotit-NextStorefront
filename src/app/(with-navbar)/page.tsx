import Banner from "@/Components/Banner/Banner";
import NewArrivals from "@/Components/NewArrivals/NewArrivals";
import Testimonials from "@/Components/Testimonials/Testimonials";

export default function Home() {
  return (
    <main className=" min-h-screen ">
  <Banner/>
  <NewArrivals/>
  <Testimonials/>
  
    </main>
  );
}
