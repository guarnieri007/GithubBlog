import { Route, Routes } from "react-router-dom";
import { InitialPage } from "./pages/InitialPage";
import { DefaultLayout } from "./layouts/Default";
import { Post } from "./pages/Post";
import { AppProvider } from "./context/github";


export function Router() {
    return (
        <AppProvider>
            <Routes>
                <Route path="/" element={<DefaultLayout />}>
                    <Route path="/" element={<InitialPage />} />
                    <Route path="/post/:id" element={<Post />} />
                </Route>
            </Routes>
        </AppProvider>
    );
}