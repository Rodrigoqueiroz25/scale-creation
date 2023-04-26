
import { useRoutes } from "react-router-dom";
import { Home } from "../pages/Home/Home";

export function MainRoutes(){
    return useRoutes([
        { path: '/', element: <Home/>}
    ]);

}