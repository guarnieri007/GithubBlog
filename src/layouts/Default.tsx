import { Outlet } from "react-router-dom";
import { Header } from "../components/header";
import { InitialPageStyle } from "../pages/InitialPageStyle";

export function DefaultLayout() {
    return (
        <InitialPageStyle>
            <Header />
            <Outlet />
        </InitialPageStyle>
    )

}