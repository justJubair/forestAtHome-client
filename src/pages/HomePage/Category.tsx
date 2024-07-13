// import { TCategory } from "@/types";

// import { TCategory } from "@/types";

// export type TCategory = {
//   img: string;
//   name: string;
//   category: {
//     img: string;
//     name: string;
//   };
// };
export type TCategory = {
  img: string;
  name: string;
};

const Category: React.FC<{ category: TCategory }> = ({ category }) => {
  return (
    <div className="card bg-base-100 image-full h-52 hover:scale-105 hover:shadow-xl duration-150 hover:cursor-pointer">
      <figure>
        <img className="w-full" src={category?.img} alt={category?.name} />
      </figure>
      <div className="card-body flex justify-center items-center">
        <h2 className="card-title text-center">{category?.name}</h2>
      </div>
    </div>
  );
};
export default Category;
