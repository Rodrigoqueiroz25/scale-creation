
import { useRoutes } from "react-router-dom";
import {BuildWeeklySchedulePage } from "../../presentation/pages/build-weekly-schedule/build-weekly-schedule.page";
import { Home } from "../../presentation/pages/Home/home";
import { MonthSelection } from "../../presentation/pages/month-selection/month-selection";

export function MainRoutes(){
    return useRoutes([
        { path: '/', element: <Home/>},
        { path: '/seleciona-mes', element: <MonthSelection/>},
        { path: '/criar-escala', element: <BuildWeeklySchedulePage/>}
    ]);

}