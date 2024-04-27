import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";

const  Routes = createBrowserRouter([
    {
        path: "/",
        element:<App></App>,
        children: [
            {
                path: "/",
                element:<Home></Home>,
                loader: () => fetch("http://localhost:5000/")
            }
        ]
    }
]);

export default Routes;