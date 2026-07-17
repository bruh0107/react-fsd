import {createBrowserRouter, Navigate} from "react-router-dom";
import {DefaultLayout} from "../layouts/DefaultLayout.tsx";
import {HomePage} from "@/pages/home-page";
import {AuthPage} from "@/pages/auth-page";
import {LoginForm} from "@/features/auth";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'auth',
                element: <AuthPage />,
                children: [
                    {
                        index: true,
                        element: <Navigate to="login" replace />
                    },
                    {
                        path: 'login',
                        element: <LoginForm />
                    },
                ]
            }
        ]
    }
])