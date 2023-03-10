import Dashboard from "../Components/Dashboard/Dashboard";
import ManageReview from "../Components/Dashboard/ManageReview";
import ManageService from "../Components/Dashboard/ManageService";
import UpdateService from "../Components/Dashboard/UpdateService";
import Order from "../Components/Order";

export const PrivateRoute = [
    {path:'index', Name: Dashboard, Component: Dashboard},
    {path:'/dashboard/order/', Name: Order, Component: Order},
    {path:`/dashboard/updateservice/${id}`, Name: UpdateService, Component: UpdateService},
    {path:'/dashboard/manageservice/', Name: ManageService, Component: ManageService},
    {path:'/dashboard/managereview/', Name: ManageReview, Component: ManageReview}
]