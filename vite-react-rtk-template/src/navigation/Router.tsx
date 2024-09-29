import {Route, Routes} from "react-router-dom";
import {pagesData, routerType} from "./pagesData.tsx";

export const Router = () => {
    const pageRoutes = pagesData.map(({ path, title, element }: routerType) => {
        return <Route key={title} path={`/${path}`} element={element} />;
    });

    return <Routes>{pageRoutes}</Routes>;
};