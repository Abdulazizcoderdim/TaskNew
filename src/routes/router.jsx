import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home.jsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        children: [
          
        ]
    }
])