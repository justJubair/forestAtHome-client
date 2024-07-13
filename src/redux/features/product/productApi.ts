import { baseApi } from "@/redux/api/baseApi";
import { TProduct } from "@/types";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (options) => {
        return {
          url: `/product?search=${options.search}&sort=${options.sort}&page=${options.page}&limit=${options.limit}`,
          method: "GET",
        };
      },
      providesTags: ["products"],
    }),
    getSingleProduct: builder.query({
      query: (id: string | null) => {
        return {
          url: `/product/${id}`,
          method: "GET",
        };
      },
    }),
    addProduct: builder.mutation({
      query: (data: TProduct) => ({
        url: "/product",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["products"],
    }),
    deleteProduct: builder.mutation({
      query: (id: string) => ({
        url: `/product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["products"],
    }),
    updateProduct: builder.mutation({
      query: (options) => ({
        url: `/product/${options._id}`,
        method: "PUT",
        body: options.data,
      }),
      invalidatesTags: ["products"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useGetSingleProductQuery,
} = productApi;
