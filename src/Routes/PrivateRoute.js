import Dashboard from "../Components/Dashboard/Dashboard";
import ManageReview from "../Components/Dashboard/ManageReview";
import UpdateService from "../Components/Dashboard/UpdateService";
import AddService from "../Components/Dashboard/AddService";
import Order from "../Components/Order";
import ManageService from "../Components/Dashboard/ManageService";

export const PrivateRoute = [
    {path:'index', Name: Dashboard, Component: Dashboard},
    {path:'/dashboard/order/', Name: Order, Component: Order},
    {path:'/dashboard/addservice/', Name: AddService, Component: AddService},
    {path:`/dashboard/updateservice/:id`, Name: UpdateService, Component: UpdateService},
    {path:'/dashboard/manageservice/', Name: ManageService, Component: ManageService},
    // comment route
    {path:'/dashboard/managereview/', Name: ManageReview, Component: ManageReview}
]