
import { useRoutes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { SelecaoMes } from "../pages/SelecaoMes/SelecaoMes";

export function MainRoutes(){
    return useRoutes([
        { path: '/', element: <Home/>},
        { path: '/selecao-mes', element: <SelecaoMes/>}
    ]);

}