import About from "../Components/About";
import Contact from "../Components/Contact";
import AllComments from "../Components/Home/AllComments";
import AllServices from "../Components/Home/AllServices";
import Home from "../Components/Home/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Service from "../Components/Service";

export const PublicRoute = [
    {path:'/', name: Home, Component:Home},
    {path:'/allcomments', name:AllComments, Component:AllComments},
    {path:'/allservices', name:AllServices, Component:AllServices},
    {path:'/about', name: About, Component:About},
    {path:'/contact', name: Contact, Component:Contact},
    {path:'/login', name: Login, Component:Login},
    {path:'/service', name: Service, Component:Service},
    {path:'/register', name: Register, Component:Register}
]