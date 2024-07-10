import CustomButton from "@/components/ui/CustomButton";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/22147565/pexels-photo-22147565/free-photo-of-a-man-holding-two-large-potted-plants.jpeg?auto=compress&cs=tinysrgb&w=600)",
      }}
    >
      <div className="bg-black absolute top-0 w-full h-full opacity-70"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-xl">
          <h1 className="mb-3 text-6xl font-bold">
            Bring{" "}
            <span className="oleo-script-regular text-primary-green">
              Nature
            </span>{" "}
            Home
          </h1>
          <p className="mb-5 md:w-[80%] mx-auto">
            Discover a world of beautiful, healthy plants to brighten your space
            and elevate your mood.
          </p>
          {/* <button className="btn btn-primary">Get Started</button> */}
          <CustomButton>Get Started</CustomButton>
        </div>
      </div>
    </div>
  );
};
export default Banner;
