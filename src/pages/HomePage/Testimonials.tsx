import SectionTitle from "@/components/ui/SectionTitle";

const Testimonials = () => {
  return (
    <div>
      <div className="mt-20 mb-6">
        <SectionTitle>Testimonials</SectionTitle>
      </div>

      <div className="grid grid-cols-4 gap-4 max-w-6xl mx-auto">
        <img
          className="col-span-2 row-span-2 rounded-tl-2xl"
          src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <img
          className="col-span-1 row-span-1"
          src="https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <img
          className="col-span-1 row-span-1 rounded-tr-2xl"
          src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <img
          className="col-span-2 row-span-2 rounded-br-2xl"
          src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <img
          className="col-span-1 row-span-2 rounded-bl-2xl"
          src="https://images.pexels.com/photos/2701660/pexels-photo-2701660.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <img
          className="col-span-1 row-span-2 "
          src="https://images.pexels.com/photos/2869076/pexels-photo-2869076.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </div>
    </div>
  );
};
export default Testimonials;
