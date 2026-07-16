import type { FC } from 'react'
import {Outlet} from "react-router-dom";
import {AppHeader} from "@/widgets/layouts/header";

export const DefaultLayout: FC = () => {
    return (
        <>
            <AppHeader />
            <main>
                <Outlet />
            </main>
        </>
    )
}