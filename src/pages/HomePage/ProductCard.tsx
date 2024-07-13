import { Button } from "@/components/ui/button";
import CustomButton from "@/components/ui/CustomButton";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { TProduct } from "@/types";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const ProductCard = ({ product }: { product: TProduct }) => {
  const dispatch = useAppDispatch();
  return (
    <div className="card card-compact bg-base-100 shadow-xl hover:cursor-pointer">
      <figure>
        <img
          className="w-full h-64 object-cover"
          src={product?.image}
          alt={product.title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p className="font-bold text-base">${product.price}</p>
        <Rating
          initialRating={product.rating}
          readonly
          emptySymbol={
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
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          }
          fullSymbol={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#487151"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          }
          fractions={2}
        />
        <div className="card-actions justify-end z-50">
          <Link to={`/product/${product?._id}`}>
            <Button className="text-primary-green bg-white border-primary-green border-spacing-3 border hover:text-secondary-orange hover:bg-white hover:border-secondary-orange">
              Details
            </Button>
          </Link>
          <div onClick={() => dispatch(addToCart(product))}>
            <CustomButton>Add To Cart</CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
