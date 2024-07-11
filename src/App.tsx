import { Provider } from "react-redux";
import MainLayout from "./components/layout/MainLayout";
import { store } from "./redux/store";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <MainLayout />
      <Footer />
    </Provider>
  );
};
export default App;
