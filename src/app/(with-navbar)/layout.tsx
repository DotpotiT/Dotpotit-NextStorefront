import { Footer } from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";

const WithNavbar = ({ children }) => {
  return (
    <div>
        <Navbar/>
      <div className="w-full ">{children}</div>
      <Footer/>
    </div>
  );
};

export default WithNavbar;
