import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const  Routes = createBrowserRouter([
    {
        path: "/",
        element:<App></App>,
        children: [
            {
                path: "/",
                element:<Home></Home>,
                loader: () => fetch("http://localhost:5000/")
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    }
]);

export default Routes;