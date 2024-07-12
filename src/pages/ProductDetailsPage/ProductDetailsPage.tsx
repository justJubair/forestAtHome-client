import CustomButton from "@/components/ui/CustomButton";
import { useGetSingleProductQuery } from "@/redux/features/product/productApi";

import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleProductQuery(id ? id : null);

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div>
      {/* navbar space */}
      <div className="w-full h-16 bg-black"></div>
      <div className="flex flex-col max-w-4xl mx-auto gap-10 mb-44 mt-20 bg-gray-100 p-4 rounded-lg md:flex-row">
        <img
          className="size-96 object-cover rounded-lg"
          src={data.data.image}
          alt={data.data.title}
        />
        <div className="flex flex-col justify-between items-end">
          <div className="">
            <h3 className="font-bold text-2xl oleo-script-regular">
              {data.data.title}
            </h3>
            <p className="text-sm text-gray-500 mt-2">{data.data.category}</p>
            <p className="text-sm mt-1">{data.data.description}</p>
            <p className="font-bold mt-3 text-xl">${data.data.price}</p>
          </div>
          <div>
            <CustomButton>Add To Cart</CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetailsPage;
