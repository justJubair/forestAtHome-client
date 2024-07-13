// import { Provider } from "react-redux";
import MainLayout from "./components/layout/MainLayout";

import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
import { Toaster } from "./components/ui/toaster";
import { useAppSelector } from "./redux/hooks";
import { useEffect } from "react";
import { useToast } from "./components/ui/use-toast";

const App = () => {
  const { products } = useAppSelector((state) => state.cart);
  const { toast } = useToast();
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (products.length > 0) {
        e.preventDefault();
        toast({
          duration: 5000,
          title: "Cart Items will be lost",
          description:
            "You have items in your cart. Are you sure you want to leave?",
        });
        e.returnValue =
          "You have items in your cart. Are you sure you want to leave?"; // Standard for most browsers
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [products, toast]);
  return (
    <>
      <Navbar />
      <MainLayout />
      <Footer />
      <Toaster />
    </>
  );
};
export default App;
