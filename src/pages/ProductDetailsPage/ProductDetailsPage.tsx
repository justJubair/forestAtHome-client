import CustomButton from "@/components/ui/CustomButton";

const ProductDetailsPage = () => {
  return (
    <div>
      {/* navbar space */}
      <div className="w-full h-16 bg-black"></div>
      <div className="card lg:card-side bg-base-100 shadow-xl mb-40 mt-20">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <CustomButton>Add To Cart</CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetailsPage;
