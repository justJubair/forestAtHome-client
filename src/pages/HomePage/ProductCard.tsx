import { Button } from "@/components/ui/button";
import CustomButton from "@/components/ui/CustomButton";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { TProduct } from "@/types";
// import Rating from "react-rating";
import { Link } from "react-router-dom";
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";
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
          style={{ maxWidth: 120 }}
          value={parseInt(product.rating.toString())}
          readOnly
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
