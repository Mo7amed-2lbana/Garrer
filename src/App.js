import React, { Children } from "react";
import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./Componant/Layout/Layout";
import { Provider } from "react-redux";
import { store } from "./Store/Store";
import Home from "./Componant/Home/Home";
import Hamada from "./Componant/signin/Hamada";
import Login from "./Componant/Login/Login";
import RegisterPro from "./Componant/RegisterPro/RegisterPro";
import CreateBusinessAccount from "./Componant/Create-business-account/CreateBusinessAccount";
import Mah from "./Componant/mahmoudnaeim/Mah";



export default function App() {
  const routers = createBrowserRouter([
    {
      path: '', element: <Layout />, children: [
        {path:'/' , element: <Home />, children: [
            { path: 'registerpro', element: <RegisterPro /> },
            { path: "Login", element: <Login /> },
            { path: "CreateBusinessAccount", element: <CreateBusinessAccount /> },
          ]
        },
        { path: 'Hamada', element: <Hamada /> },
        { path: 'Mah', element: <Mah /> },
      ]
    }]);

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={routers} />
      </Provider>
    </>
  );
}
