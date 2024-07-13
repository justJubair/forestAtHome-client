import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useCreateOrderMutation } from "@/redux/features/cart/cartApi";
import { useAppSelector } from "@/redux/hooks";
import { TProduct } from "@/types";
// import { TProduct } from "@/types";

const CheckoutPage = () => {
  const { products } = useAppSelector((state) => state.cart);
  const [createOrder] = useCreateOrderMutation();
  const { toast } = useToast();
  const totalPrice = products.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price;
  }, 0);

  // const productMap = {};
  const productMap: { [key: string]: TProduct & { buyingQuantity: number } } =
    {};

  products.forEach((product: TProduct) => {
    if (productMap[product._id as string]) {
      productMap[product._id as string].buyingQuantity += 1;
    } else {
      productMap[product._id as string] = { ...product, buyingQuantity: 1 };
    }
  });

  const uniqueCartProducts = Object.values(productMap);
  const handleOrder = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const address = (form.elements.namedItem("address") as HTMLInputElement)
      .value;

    const newOrder = {
      name,
      phone,
      address,
      products: uniqueCartProducts,
    };
    const res = await createOrder(newOrder).unwrap();
    if (res.success) {
      toast({
        duration: 1000,
        title: `Thanks ${name}`,
        description: "Order is confirmed",
      });
      form.reset();
    }
  };
  return (
    <div>
      {/* navbar space */}
      <div className="w-full h-16 bg-black"></div>

      <div className="flex flex-col-reverse items-center justify-center px-4 mt-20 mb-32 gap-10 md:flex-row md:items-start ">
        <div>
          <form onSubmit={handleOrder} className="w-full">
            <Label htmlFor="quantity" className="text-right">
              Name
            </Label>
            <Input
              type="text"
              id="name"
              name="name"
              required
              className="min-w-80 lg:min-w-96 mb-3"
            />
            <Label htmlFor="phone" className="text-right">
              Phone Number
            </Label>
            <Input
              type="text"
              required
              id="phone"
              name="phone"
              className="lg:min-w-96 mb-3"
            />
            <Label htmlFor="address" className="text-right">
              Address
            </Label>
            <Input
              type="text"
              id="address"
              required
              name="address"
              className="lg:min-w-96"
            />
            <Button
              type="submit"
              className="bg-primary-green mt-4 hover:bg-hover hover:text-black"
            >
              Order Confirm
            </Button>
          </form>
        </div>
        <div>
          <div className="bg-gray-100 min-w-96 flex flex-col h-[330px] overflow-y-scroll  gap-4 px-4 pt-6 pb-4 rounded-lg">
            {uniqueCartProducts.map((product, idx) => (
              <div
                key={idx}
                className="flex flex-col bg-white  px-4 py-2 rounded-xl"
              >
                <div className="flex items-center gap-2">
                  <img
                    className="size-14 object-cover rounded-2xl"
                    src={product.image}
                    alt=""
                  />
                  <p className="font-medium">{product.title}</p>
                </div>
                <p className="text-sm mt-2">Category: {product.category}</p>
                <p className="font-medium text-sm">
                  Qty: {product.buyingQuantity}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-5 flex items-center justify-end">
            <h3 className="font-bold text-xl">${totalPrice.toFixed(2)}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CheckoutPage;
