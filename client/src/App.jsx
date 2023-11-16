import "./app.scss";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
//import React from "react";
/*import Navbar from "./components/navbar/Navbar";*/
import Home from "./pages/home/Home";
/*import Footer from "./components/footer/footer";*/
import SignUp from "./pages/signUp/signUp";
import SignIn from "./pages/signIn/signIn";
import Profile from "./pages/profile/profile";


function App() {
  const Layout = () => {
    return (
      <div className="app">
        
        <Outlet />
       
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
        {
          path: "/signin",
          element: <SignIn />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;