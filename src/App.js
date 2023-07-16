import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Componant/Layout/Layout";
import { Provider } from "react-redux";
import { store } from "./Store/Store";

export default function App() {
  const routers = createBrowserRouter([{ path: "", element: <Layout /> }]);

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={routers} />
      </Provider>
    </>
  );
}
