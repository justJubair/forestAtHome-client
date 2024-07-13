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
// import Rating from "react-rating";
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";
const AddProductModal = () => {
  const [rating, setRating] = useState(0);
  const [category, setCategory] = useState("");
  const [addProduct] = useAddProductMutation();
  const { toast } = useToast();
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
    // const title = form.name.value;
    // const price = form.price.value;
    // const quantity = form.quantity.value;
    // const description = form.description.value;
    // const image = form.image.value;
    const newProduct = {
      title,
      price: Number(price),
      quantity: Number(quantity),
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
                <Input
                  required
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
                  required
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
                  required
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
                required
                name="description"
                placeholder="Write product description."
              />
            </div>
            <div className="space-y-1 flex items-center gap-4">
              <Label htmlFor="quantity" className="text-right">
                Ratings
              </Label>
              <Rating
                value={0}
                style={{ maxWidth: 120 }}
                onChange={setRating}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="title" className="text-right">
                Image
              </Label>
              <Input
                required
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
