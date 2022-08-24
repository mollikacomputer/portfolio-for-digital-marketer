import Dashboard from "../Components/Dashboard/Dashboard";
import Order from "../Components/Order";

export const PrivateRoute = [
    {path:'/dashboard/', Name: Dashboard, Component: Dashboard},
    {path:'/order/', Name: Order, Component: Order},
]