import React, { Children, useState } from "react";
import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./Componant/Layout/Layout";
import { Provider } from "react-redux";
import { store } from "./Store/Store";
import Home from "./Componant/Home/Home";
import Hamada from "./Componant/signin/Hamada";
import Login from "./Componant/Login/Login";
import RegisterPro from "./Componant/RegisterPro/RegisterPro";
import CreateBusinessAccount from "./Componant/Create-business-account/CreateBusinessAccount";
import jwtDecode from "jwt-decode";
import Athuncation from "./Componant/authentication/authentication";



export default function App() {
  const [userData, setuserData] = useState(null);
  const saveUser = () => {
    const incoded = localStorage.getItem("token");
    const decoded = jwtDecode(incoded);
    setuserData(decoded);


  }

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
      ],
    },
  ]);

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={routers} />
      </Provider>
    </>
  );
}
