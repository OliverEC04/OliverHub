import {Home} from "../pages/Home.tsx";
import {About} from "../pages/About.tsx";
import {ReactNode} from "react";

export interface routerType {
    title: string;
    path: string;
    element: ReactNode;
}

export const pagesData: routerType[] = [
    {
        path: "",
        element: <Home />,
        title: "home"
    },
    {
        path: "about",
        element: <About />,
        title: "about"
    }
];