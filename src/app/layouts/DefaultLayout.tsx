import type { FC } from 'react'
import {Outlet} from "react-router-dom";

export const DefaultLayout: FC = () => {
    return (
        <>
            <main>
                <Outlet />
            </main>
        </>
    )
}