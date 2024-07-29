import { Route, Routes } from "react-router-dom";
import { InitialPage } from "./pages/InitialPage";
import { DefaultLayout } from "./layouts/Default";


export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
                <Route path="/" element={<InitialPage/>}/>
            </Route>
        </Routes>
    );
}