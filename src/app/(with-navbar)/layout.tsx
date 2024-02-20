import Navbar from "@/Components/Navbar/Navbar";

const WithNavbar = ({ children }) => {
  return (
    <div>
        <Navbar/>
      <div className="w-full min-h-[70vh]">{children}</div>
    </div>
  );
};

export default WithNavbar;
