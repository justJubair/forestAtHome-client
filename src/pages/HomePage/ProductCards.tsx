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
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useGetProductsQuery } from "@/redux/features/product/productApi";
import { TProduct } from "@/types";
import { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";

// type TLoaderData = {
//   count: number;
// };

const ProductCards = () => {
  const [search, setSearch] = useState("");
  const [sortValue, setSortValue] = useState("asc");
  const [currentPage, setCurrentPage] = useState(0);
  // const { count } = useLoaderData() as TLoaderData;
  const [count, setCount] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://forest-at-home-server.vercel.app/api/v1/productCount"
      );
      const data = await res.json();
      setCount(data.count);
    };
    fetchData();
  }, []);

  console.log(count);
  const options = {
    search,
    sort: sortValue,
    page: currentPage,
    limit: 6,
  };

  const { data, isLoading } = useGetProductsQuery(options);
  const products = data?.data?.filter(
    (product: TProduct) => product.isDeleted === false
  );

  const numberOfPages = Math.ceil(count / 6);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const search = (form.elements.namedItem("search") as HTMLInputElement)
      .value;
    setSearch(search);
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < numberOfPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

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
        <form onSubmit={handleSearch} className="relative">
          <Input
            type="text"
            placeholder="Search Products"
            className="min-w-80"
            name="search"
          />
          <button type="submit" className="absolute top-[10px] right-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5  duration-200 hover:cursor-pointer hover:text-primary-green hover:scale-110"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </form>

        <Select onValueChange={(value) => setSortValue(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by Price" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Sort by price</SelectLabel>
              <SelectItem value="desc">Highest</SelectItem>
              <SelectItem value="asc">Lowest</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 px-4 lg:px-0 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {products?.map((product: TProduct) => (
          <ProductCard key={product?._id} product={product} />
        ))}
      </div>
      <Pagination className="mt-10">
        <PaginationContent>
          <PaginationItem className="hover:cursor-pointer">
            <PaginationPrevious onClick={handlePrev} />
          </PaginationItem>

          {[...Array(numberOfPages).keys()].map((page, idx) => (
            <PaginationItem
              key={idx}
              className={`${
                currentPage === page
                  ? "bg-primary-green rounded-xl text-white"
                  : ""
              } hover:cursor-pointer`}
            >
              <PaginationLink onClick={() => setCurrentPage(page)}>
                {page + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem className="hover:cursor-pointer">
            <PaginationNext onClick={handleNext} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
export default ProductCards;
