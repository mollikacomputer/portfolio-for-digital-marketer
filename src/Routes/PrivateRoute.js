import Dashboard from "../Components/Dashboard/Dashboard";
import UpdateService from "../Components/Dashboard/UpdateService";
import AddService from "../Components/Dashboard/AddService";
import Order from "../Components/Order";
import ManageService from "../Components/Dashboard/ManageService";
import AddComment from "../Components/Dashboard/Comment/AddComment";
import ManageComment from "../Components/Dashboard/Comment/ManageComment";
import UpdateComment from "../Components/Dashboard/Comment/UpdateComment";


export const PrivateRoute = [
    {path:'index', Name: Dashboard, Component: Dashboard},
    {path:'/dashboard/order/', Name: Order, Component: Order},
    {path:'/dashboard/addservice/', Name: AddService, Component: AddService},
    {path:`/dashboard/updateservice/:id`, Name: UpdateService, Component: UpdateService},
    {path:'/dashboard/manageservice/', Name: ManageService, Component: ManageService},

    //comment section
    {path:'/dashboard/addcomment/', Name: AddComment, Component: AddComment},
    {path:'/dashboard/managecomment/', Name: ManageComment, Component: ManageComment},
    {path:'/dashboard/updatecomment/:id', Name: UpdateComment, Component: UpdateComment},
    {path:'/dashboard/updatecomment/:id', Name: UpdateComment, Component: UpdateComment}
]