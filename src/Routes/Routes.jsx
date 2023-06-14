import {
    createBrowserRouter
  } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../components/Home/Home";
import AllToys from "../components/AllToy/AllToys";
import MyToys from "../components/MyToy/MyToys";
import AddToy from "../components/AddToy/AddToy";
import Blog from "../components/Blog/Blog";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Register from "../components/Login/Register";
import Login from "../components/Login/Login";
import PrivateRoutes from "./PrivateRoutes";
import ViewDetails from "../components/Home/ViewDetails";
import ToyLayout from "../Layout/ToyLayout";
import Update from "../components/MyToy/Update";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout/>,
      errorElement: <ErrorPage/>,
      children:[
        {
            
            path: '/',
            element: <Home/>
        },
        {
            path: 'alltoys',
            element: <AllToys/>,
        },
        {
            path: 'mytoys',
            element: <PrivateRoutes><MyToys/></PrivateRoutes>
        },
        {
          path: 'update/:id',
          element: <Update></Update>
        },
        {
          path: 'alltoys/toy/:id',
          element: <PrivateRoutes><ViewDetails/></PrivateRoutes>
        },
        {
            path: 'addtoy',
            element: <PrivateRoutes><AddToy/></PrivateRoutes>
        },

        {
            path : 'blog',
            element: <Blog/>
        },
        {
          path : 'register',
          element: <Register/>
        },
        {
          path: 'login',
          element: <Login/>
        }

      ]
    },
    {
      path: "toy",
      element: <ToyLayout></ToyLayout>,
      children: [
        {
          path: ":id",
          element: <PrivateRoutes><ViewDetails/></PrivateRoutes>
        }
      ]
    }
  ]);


  export default router;