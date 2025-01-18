
import { useRoutes } from "react-router-dom";
import { FormMissas } from "../pages/FormMissas/FormMissas";
import { Home } from "../pages/Home/Home";
import { MonthSelection } from "../pages/MonthSelection/MonthSelection";

export function MainRoutes(){
    return useRoutes([
        { path: '/', element: <Home/>},
        { path: '/month-selection', element: <MonthSelection/>},
        { path: '/form-missas', element: <FormMissas/>}
    ]);

}