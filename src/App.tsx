import { Provider } from "react-redux";
import MainLayout from "./components/layout/MainLayout";
import { store } from "./redux/store";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
import { Toaster } from "./components/ui/toaster";

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <MainLayout />
      <Footer />
      <Toaster />
    </Provider>
  );
};
export default App;
