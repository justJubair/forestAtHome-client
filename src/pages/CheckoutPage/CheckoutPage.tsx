import CustomButton from "@/components/ui/CustomButton";

const CheckoutPage = () => {
  return (
    <div>
      {/* navbar space */}
      <div className="w-full h-16 bg-black"></div>

      <div className="flex flex-col items-center justify-center px-4 mt-10 mb-28 gap-10 md:flex-row md:items-start ">
        <div>
          <img
            className="md:size-80 lg:size-96 rounded-l-xl"
            src="https://images.pexels.com/photos/26839104/pexels-photo-26839104/free-photo-of-cactus-and-lantern-around-wooden-door.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <h3 className="text-3xl text-center mt-2 oleo-script-regular">
            Thanks for your order
          </h3>
        </div>
        <div>
          <div className="bg-gray-100 min-w-96 flex flex-col h-[330px] overflow-y-scroll  gap-4 px-4 pt-6 pb-4 rounded-lg">
            {/* row */}
            <div className="flex flex-col bg-white  px-4 py-2 rounded-xl">
              <div className="flex items-center gap-2">
                <img
                  className="size-14 object-cover rounded-2xl"
                  src="https://images.pexels.com/photos/46216/sunflower-flowers-bright-yellow-46216.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
                <p className="font-medium">Sunflower</p>
              </div>
              <p className="font-medium mt-2">Category: Indoor Plants</p>
              <p className="font-medium">Qty: 0</p>
            </div>
            {/* row */}
            <div className="flex flex-col bg-white  px-4 py-2 rounded-xl">
              <div className="flex items-center gap-2">
                <img
                  className="size-14 object-cover rounded-2xl"
                  src="https://images.pexels.com/photos/46216/sunflower-flowers-bright-yellow-46216.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
                <p className="font-medium">Sunflower</p>
              </div>
              <p className="font-medium mt-2">Category: Indoor Plants</p>
              <p className="font-medium">Qty: 0</p>
            </div>
            {/* row */}
            <div className="flex flex-col bg-white  px-4 py-2 rounded-xl">
              <div className="flex items-center gap-2">
                <img
                  className="size-14 object-cover rounded-2xl"
                  src="https://images.pexels.com/photos/46216/sunflower-flowers-bright-yellow-46216.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
                <p className="font-medium">Sunflower</p>
              </div>
              <p className="font-medium mt-2">Category: Indoor Plants</p>
              <p className="font-medium">Qty: 0</p>
            </div>
          </div>
          <div className="mt-5 flex justify-end">
            <CustomButton>Order Confirm</CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CheckoutPage;
