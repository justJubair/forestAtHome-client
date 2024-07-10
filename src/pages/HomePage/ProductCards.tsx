import SectionTitle from "@/components/ui/SectionTitle";
import ProductCard from "./ProductCard";

const dummyProducts = [
  {
    category: "Indoor Plants",
    title: "Snake Plant",
    price: 15.99,
    quantity: 50,
    description:
      "A low-maintenance indoor plant known for its air-purifying qualities.",
    rating: 4.8,
    image: "images/snake-plant.jpg",
  },
  {
    category: "Outdoor Plants",
    title: "Rose Bush",
    price: 25.99,
    quantity: 30,
    description:
      "A beautiful flowering plant that produces vibrant and fragrant roses.",
    rating: 4.7,
    image: "images/rose-bush.jpg",
  },
  {
    category: "Plant Care Essentials",
    title: "Organic Fertilizer",
    price: 12.99,
    quantity: 100,
    description:
      "High-quality organic fertilizer to promote healthy plant growth.",
    rating: 4.5,
    image: "images/organic-fertilizer.jpg",
  },
  {
    category: "Gardening Tools & Accessories",
    title: "Pruning Shears",
    price: 18.99,
    quantity: 75,
    description:
      "Durable and sharp pruning shears for all your gardening needs.",
    rating: 4.6,
    image: "images/pruning-shears.jpg",
  },
  {
    category: "Indoor Plants",
    title: "Peace Lily",
    price: 20.99,
    quantity: 40,
    description:
      "An elegant indoor plant that thrives in low light and purifies the air.",
    rating: 4.9,
    image: "images/peace-lily.jpg",
  },
  {
    category: "Outdoor Plants",
    title: "Lavender",
    price: 15.99,
    quantity: 60,
    description:
      "A fragrant outdoor plant that attracts pollinators and adds beauty to any garden.",
    rating: 4.8,
    image: "images/lavender.jpg",
  },
  {
    category: "Plant Care Essentials",
    title: "Watering Can",
    price: 14.99,
    quantity: 80,
    description:
      "A stylish and functional watering can for easy plant watering.",
    rating: 4.7,
    image: "images/watering-can.jpg",
  },
  {
    category: "Gardening Tools & Accessories",
    title: "Garden Gloves",
    price: 9.99,
    quantity: 120,
    description:
      "Comfortable and durable garden gloves to protect your hands while gardening.",
    rating: 4.6,
    image: "images/garden-gloves.jpg",
  },
];

const ProductCards = () => {
  return (
    <div>
      <div className="mt-10 mb-6">
        <SectionTitle>Our Handpicked</SectionTitle>
      </div>

      <div className="grid grid-cols-3 gap-10 max-w-6xl mx-auto">
        {dummyProducts?.slice(0, 6).map((product, idx) => (
          <ProductCard key={idx} product={product} />
        ))}
      </div>
    </div>
  );
};
export default ProductCards;
