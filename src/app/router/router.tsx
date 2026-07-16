import { createBrowserRouter } from "react-router-dom";
import {DefaultLayout} from "../layouts/DefaultLayout.tsx";
import {HomePage} from "@/pages/home-page/HomePage.tsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            }
        ]
    }
])