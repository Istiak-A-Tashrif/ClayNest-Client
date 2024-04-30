import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import AddItem from "../pages/AddItem/AddItem";
import AllItems from "../pages/AllItems/AllItems";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import CategoryItems from "../pages/CategoryItems/CategoryItems";
import MyList from "../pages/MyList/MyList";
import UpdateItem from "../pages/UpdateItem/UpdateItem";

const  Routes = createBrowserRouter([
    {
        path: "/",
        element:<App></App>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element:<Home></Home>,
                loader: () => fetch("https://art-store-server-nine.vercel.app/")
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/profile",
                element: <PrivateRoute>
                    <UpdateProfile></UpdateProfile>
                </PrivateRoute>
            },
            {
                path: "/add",
                element: <PrivateRoute><AddItem></AddItem></PrivateRoute>
            },
            {
                path: "/allItems",
                element: <AllItems></AllItems>,
                loader: () => fetch('https://art-store-server-nine.vercel.app/allItems')
            },
            {
                path: "/item/:id",
                element: <PrivateRoute><DetailsPage></DetailsPage></PrivateRoute>,
                loader: ({params}) => fetch(`https://art-store-server-nine.vercel.app/item/${params.id}`)
            },
            {
                path: "/items/:id",
                element: <CategoryItems></CategoryItems>,
                loader: ({params}) => fetch(`https://art-store-server-nine.vercel.app/items/${params.id}`)
            },
            {
                path: "/myList/:id",
                element: <PrivateRoute><MyList></MyList></PrivateRoute>,
                loader: ({params}) => fetch(`https://art-store-server-nine.vercel.app/myList/${params.id}`)

            },
            {
                path: "/update/:id",
                element: <PrivateRoute><UpdateItem></UpdateItem></PrivateRoute>
            }
        ]        
    }
]);

export default Routes;