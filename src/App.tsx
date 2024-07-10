import { Provider } from "react-redux";
import MainLayout from "./components/layout/MainLayout";
import { store } from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <MainLayout />
    </Provider>
  );
};
export default App;
