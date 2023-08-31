import React, { Children } from "react";
<<<<<<< HEAD
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
=======
import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";
>>>>>>> 976fbf78da92f4f0ac446cec09a9f6b4fec511fe
import Layout from "./Componant/Layout/Layout";
import { Provider } from "react-redux";
import { store } from "./Store/Store";
import Home from "./Componant/Home/Home";
import Hamada from "./Componant/signin/Hamada";
import Login from "./Componant/Login/Login";
import RegisterPro from "./Componant/RegisterPro/RegisterPro";
import CreateBusinessAccount from "./Componant/Create-business-account/CreateBusinessAccount";
import Mah from "./Componant/mahmoudnaeim/Mah";
<<<<<<< HEAD
import Athuncation from "./Componant/authentication/authentication";

export default function App() {



// save user token 




  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "authentication",
          element: <Athuncation />,
          children: [
            { path: "Login", element: <Login /> },
            { path: "registerpro", element: <RegisterPro /> },
            {
              path: "CreateBusinessAccount",
              element: <CreateBusinessAccount />,
            },
          ],
        },
        { path: "Hamada", element: <Hamada /> },
        { path: "Mah", element: <Mah /> },
      ],
    },
  ]);
=======



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
>>>>>>> 976fbf78da92f4f0ac446cec09a9f6b4fec511fe

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={routers} />
      </Provider>
    </>
  );
}
