
import { useRoutes } from "react-router-dom";
import {BuildWeeklySchedule } from "../pages/BuildWeeklySchedule/BuildWeeklySchedule";
import { Home } from "../pages/Home/Home";
import { MonthSelection } from "../pages/MonthSelection/MonthSelection";

export function MainRoutes(){
    return useRoutes([
        { path: '/', element: <Home/>},
        { path: '/seleciona-mes', element: <MonthSelection/>},
        { path: '/criar-escala', element: <BuildWeeklySchedule/>}
    ]);

}