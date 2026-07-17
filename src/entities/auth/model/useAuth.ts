import {create} from "zustand/react";
import type {Auth} from "@/entities/auth/types/auth.types.ts";

export const useAuth = create<Auth>((set) => ({
    token: null,
    isAuth: false,

    login: async (user) => {
        try {
            const response = await fetch('https://fakestoreapi.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)
            })

            if (!response.ok) {
                throw new Error("Неверный логин или пароль")
            }

            const data = await response.json()

            console.log(data)

            set({
                token: data.token,
                isAuth: true,
            })

            localStorage.setItem("token", data.token)
        } catch (error) {
            console.log(error)
        }
    },

    logout: () => {
        localStorage.removeItem('token')

        set({
            token: null,
            isAuth: false
        })
    }
}))