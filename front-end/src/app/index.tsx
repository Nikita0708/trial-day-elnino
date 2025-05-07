import { RouterProvider } from "react-router-dom";
import { router } from "./routing";
import { setupStore } from "../entities/store";
import { Provider } from "react-redux";

const store = setupStore();

export const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
};
