import CustomButton from "@/components/ui/CustomButton";

const CheckoutPage = () => {
  return (
    <div>
      {/* navbar space */}
      <div className="w-full h-16 bg-black"></div>

      <div className="flex items-start justify-center mt-10 mb-28 gap-10">
        <div>
          <img
            className="size-96 rounded-e-xl"
            src="https://images.pexels.com/photos/26839104/pexels-photo-26839104/free-photo-of-cactus-and-lantern-around-wooden-door.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <h3 className="text-3xl text-center mt-2 oleo-script-regular">
            Thanks for your order
          </h3>
        </div>
        <div>
          <div className="bg-gray-100 flex flex-col h-[330px] overflow-y-scroll  gap-4 px-10 pt-6 pb-4 rounded-lg">
            {/* row */}
            <div className="flex flex-col">
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
            <div className="flex flex-col">
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
            <div className="flex flex-col">
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
          <div className="mt-5 flex justify-center">
            <CustomButton>Order Confirm</CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CheckoutPage;
