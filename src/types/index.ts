export type TProduct = {
  _id?: string;
  title: string;
  price: number;
  category: string;
  quantity: number;
  buyingQuantity?: number;
  description: string;
  rating: number;
  image: string;
  isDeleted?: boolean;
};

export type TOrder = {
  name: string;
  phone: string;
  address: string;
  products: TProduct[];
};
