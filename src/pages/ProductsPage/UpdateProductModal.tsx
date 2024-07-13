import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useUpdateProductMutation } from "@/redux/features/product/productApi";
import { TProduct } from "@/types";
import { useState } from "react";
// import Rating from "react-rating";
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";
// import { Rating } from "react-simple-star-rating";

const UpdateProductModal = ({ product }: { product: TProduct }) => {
  const [rating, setRating] = useState(product.rating);
  const [category, setCategory] = useState(product.category);
  const [updateProduct] = useUpdateProductMutation();
  const { toast } = useToast();
  console.log(rating);
  const handleProductAdd = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const title = (form.elements.namedItem("name") as HTMLInputElement).value;
    const price = (form.elements.namedItem("price") as HTMLInputElement).value;
    const quantity = (form.elements.namedItem("quantity") as HTMLInputElement)
      .value;
    const description = (
      form.elements.namedItem("description") as HTMLInputElement
    ).value;
    const image = (form.elements.namedItem("image") as HTMLInputElement).value;
    const newProduct = {
      title,
      price,
      quantity,
      description,
      image,
      rating,
      category,
    };
    const options = {
      _id: product._id,
      data: newProduct,
    };
    const res = await updateProduct(options).unwrap();
    if (res.success) {
      toast({
        title: `${product.title}`,
        description: "Product Updated Successfully",
      });
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button>
          {" "}
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
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update a product</DialogTitle>
          <DialogDescription>
            Fill out the information. Click Update when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleProductAdd}>
          <div className="grid gap-4 py-4">
            <div className="flex items-center gap-4">
              <div className="space-y-1">
                <Label htmlFor="title" className="text-right">
                  Title
                </Label>
                <Input
                  defaultValue={product.title}
                  type="text"
                  name="name"
                  className="col-span-3"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="price" className="text-right">
                  Price
                </Label>
                <Input
                  defaultValue={product.price}
                  type="number"
                  name="price"
                  id="price"
                  className="col-span-3"
                />
              </div>
            </div>
            <div className="flex items-end gap-4">
              <div className="space-y-1">
                <Label htmlFor="quantity" className="text-right">
                  Quantity
                </Label>
                <Input
                  type="number"
                  id="quantity"
                  name="quantity"
                  defaultValue={product.quantity}
                  className="col-span-3"
                />
              </div>

              <Select
                defaultValue={product.category}
                onValueChange={(value) => setCategory(value)}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Choose a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Categories</SelectLabel>
                    <SelectItem value="Indoor Plants">Indoor Plants</SelectItem>
                    <SelectItem value="Outdoor Plants">
                      Outdoor Plants
                    </SelectItem>
                    <SelectItem value="Plant Care Essentials">
                      Plant Care Essentials
                    </SelectItem>
                    <SelectItem value="Gardening Tools & Accessories">
                      Gardening Tools & Accessories
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1">
              <Label htmlFor="quantity" className="text-right">
                Description
              </Label>
              <Textarea
                defaultValue={product.description}
                name="description"
                placeholder="Write product description."
              />
            </div>
            <div className="space-y-1 flex items-center gap-4">
              <Label htmlFor="quantity" className="text-right">
                Ratings
              </Label>
              <Rating
                style={{ maxWidth: 120 }}
                value={parseInt(product.rating.toString())}
                onChange={setRating}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="title" className="text-right">
                Image
              </Label>
              <Input
                defaultValue={product.image}
                name="image"
                id="title"
                placeholder="Direct Image link"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit">Save changes</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
export default UpdateProductModal;
