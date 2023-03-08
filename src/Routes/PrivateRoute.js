import Dashboard from "../Components/Dashboard/Dashboard";
import ManageReview from "../Components/Dashboard/ManageReview";
import ManageService from "../Components/Dashboard/ManageService";
import Order from "../Components/Order";

export const PrivateRoute = [
    {path:'index', Name: Dashboard, Component: Dashboard},
    {path:'/dashboard/order/', Name: Order, Component: Order},
    {path:'/dashboard/manageservice/', Name: ManageService, Component: ManageService},
    {path:'/dashboard/managereview/', Name: ManageReview, Component: ManageReview}
]