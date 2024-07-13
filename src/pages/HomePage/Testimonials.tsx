import SectionTitle from "@/components/ui/SectionTitle";
import { Element } from "react-scroll";
const Testimonials = () => {
  return (
    <Element name="gallery">
      <div>
        <div className="mt-20 mb-6">
          <SectionTitle>Peek A look</SectionTitle>
        </div>

        <div className="grid grid-cols-4 gap-4 max-w-5xl mx-auto px-4 lg:px-0">
          <img
            className="col-span-2 row-span-2 rounded-tl-2xl"
            src="https://images.pexels.com/photos/36445/rose-close-up-pink-flower.jpg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <img
            className="col-span-1 row-span-1"
            src="https://images.pexels.com/photos/3599576/pexels-photo-3599576.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <img
            className="col-span-1 row-span-1 rounded-tr-2xl w-auto h-auto"
            src="https://images.pexels.com/photos/2395251/pexels-photo-2395251.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <img
            className="col-span-2 row-span-2 rounded-br-2xl"
            src="https://images.pexels.com/photos/2106037/pexels-photo-2106037.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <img
            className="col-span-1 row-span-2 rounded-bl-2xl lg:size-80 object-cover"
            src="https://images.pexels.com/photos/1697912/pexels-photo-1697912.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <img
            className="col-span-1 row-span-2 lg:size-80 object-cover"
            src="https://images.pexels.com/photos/673857/pexels-photo-673857.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
      </div>
    </Element>
  );
};
export default Testimonials;
