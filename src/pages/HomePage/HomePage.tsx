import Navbar from "@/components/ui/Navbar";
import Banner from "./Banner";
import ProductCards from "./ProductCards";
import Categories from "./Categories";
import Testimonials from "./Testimonials";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Categories />
      <ProductCards />
      <Testimonials />
    </div>
  );
};
export default HomePage;
