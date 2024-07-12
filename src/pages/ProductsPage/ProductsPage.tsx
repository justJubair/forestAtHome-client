import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import AddProductModal from "./AddProductModal";
import UpdateProductModal from "./UpdateProductModal";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "@/redux/features/product/productApi";
import { TProduct } from "@/types";

const ProductsPage = () => {
  const { toast } = useToast();
  const { data, isLoading } = useGetProductsQuery(null);
  const [deleteProduct] = useDeleteProductMutation();
  const handleProductDelete = (_id: string) => {
    console.log("hello pls delete");
    deleteProduct(_id);
  };

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
      <div className="mb-36 max-w-6xl mx-auto mt-12">
        <div className="justify-end flex">
          <AddProductModal />
        </div>
        <div className="overflow-x-auto ">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {data?.data?.map((product: TProduct) => (
                <tr key={product._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={product.image} alt={product.title} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{product.title}</div>
                      </div>
                    </div>
                  </td>
                  <td>${product.price}</td>
                  <td>{product.category}</td>
                  <td>
                    <div className="flex items-center gap-4">
                      <UpdateProductModal product={product} />
                      <button
                        onClick={() => {
                          toast({
                            title: "Are you sure?",
                            description:
                              "Once deleted, this product cannot be retrieve",

                            action: (
                              <ToastAction
                                onClick={() =>
                                  handleProductDelete(product._id as string)
                                }
                                altText="Delete button"
                              >
                                Yes
                              </ToastAction>
                            ),
                          });
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default ProductsPage;
