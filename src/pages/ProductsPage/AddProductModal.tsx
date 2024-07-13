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
import { useAddProductMutation } from "@/redux/features/product/productApi";
import { useState } from "react";
import Rating from "react-rating";

const AddProductModal = () => {
  const [rating, setRating] = useState(0);
  const [category, setCategory] = useState("");
  const [addProduct] = useAddProductMutation();
  const { toast } = useToast();
  const handleProductAdd = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.name.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const image = form.image.value;
    const newProduct = {
      title,
      price,
      quantity,
      description,
      image,
      rating,
      category,
    };
    const res = await addProduct(newProduct).unwrap();

    if (res.success) {
      toast({
        duration: 1000,
        title: `${title}`,
        description: "New Product Created Successfully",
      });
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Product</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add a new product</DialogTitle>
          <DialogDescription>
            Fill out the information. Click Add when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleProductAdd}>
          <div className="grid gap-4 py-4">
            <div className="flex items-center gap-4">
              <div className="space-y-1">
                <Label htmlFor="title" className="text-right">
                  Title
                </Label>
                <Input type="text" name="name" className="col-span-3" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="price" className="text-right">
                  Price
                </Label>
                <Input
                  type="number "
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
                  defaultValue="@peduarte"
                  className="col-span-3"
                />
              </div>

              <Select onValueChange={(value) => setCategory(value)}>
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
                name="description"
                placeholder="Write product description."
              />
            </div>
            <div className="space-y-1 flex items-center gap-4">
              <Label htmlFor="quantity" className="text-right">
                Ratings
              </Label>
              <Rating
                onClick={(value) => setRating(value)}
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
            </div>
            <div className="space-y-1">
              <Label htmlFor="title" className="text-right">
                Image
              </Label>
              <Input
                name="image"
                id="title"
                placeholder="Direct Image link"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit">Add</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
export default AddProductModal;
