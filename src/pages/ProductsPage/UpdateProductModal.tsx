import { Button } from "@/components/ui/button";
import {
  Dialog,
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
import { useState } from "react";
import Rating from "react-rating";

const UpdateProductModal = () => {
  const [rating, setRating] = useState(0);
  const [category, setCategory] = useState("");

  const handleProductAdd = (e) => {
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
    console.log(newProduct);
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
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
export default UpdateProductModal;
