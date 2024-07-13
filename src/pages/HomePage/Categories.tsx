import SectionTitle from "@/components/ui/SectionTitle";
import Category from "./Category";
import { Element } from "react-scroll";
import { TCategory } from "@/types";
const dummyCategories = [
  {
    name: "Indoor Plants",
    img: "https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Outdoor Plants",
    img: "https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Plant Care Essentials",
    img: "https://images.pexels.com/photos/46216/sunflower-flowers-bright-yellow-46216.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Gardening Tools & Accessories",
    img: "https://images.pexels.com/photos/459335/pexels-photo-459335.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const Categories = () => {
  return (
    <Element name="category">
      <div>
        <div className="mt-20 mb-6">
          <SectionTitle>Our Categories</SectionTitle>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 max-w-6xl mx-auto lg:px-0">
          {dummyCategories.map((category: TCategory, idx) => (
            <Category key={idx} category={category} />
          ))}
        </div>
      </div>
    </Element>
  );
};
export default Categories;
