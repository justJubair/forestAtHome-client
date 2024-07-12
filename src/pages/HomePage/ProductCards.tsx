import SectionTitle from "@/components/ui/SectionTitle";
import ProductCard from "./ProductCard";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useGetProductsQuery } from "@/redux/features/product/productApi";
import { TProduct } from "@/types";

const ProductCards = () => {
  const { data, isLoading } = useGetProductsQuery(null);

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className=" max-w-6xl mx-auto">
      <div className="mt-16 mb-6">
        <SectionTitle>Our Handpicked</SectionTitle>
      </div>
      <div className="mb-6 flex justify-between items-center">
        <Input type="text" placeholder="Search Products" className="max-w-96" />
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by Price" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Sort by price</SelectLabel>
              <SelectItem value="highest">Highest</SelectItem>
              <SelectItem value="lowest">Lowest</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 px-4 lg:px-0 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data?.data?.slice(0, 6).map((product: TProduct) => (
          <ProductCard key={product?._id} product={product} />
        ))}
      </div>
      <Pagination className="mt-10">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
export default ProductCards;
