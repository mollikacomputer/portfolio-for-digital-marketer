import './App.css';
// import firebase app
import app from './firebase.init';
import {getAuth} from "firebase/auth";
import { PublicRoute } from './Routes/PutlicRoute';
import {Routes, Route} from 'react-router-dom';
import Nav from './Components/Nav';
import Footer from './Components/Common/Footer';
import RequireAuth from './Components/Dashboard/RequireAuth/RequireAuth';
import Dashboard from './Components/Dashboard/Dashboard';
import AddService from './Components/Dashboard/AddService';
import Order from './Components/Order';
import ManageReview from './Components/Dashboard/ManageReview';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './Routes/ProtectedRoute';
import ManageService from './Components/Dashboard/ManageService';


const auth = getAuth(app);


function App() {
  return (
    <div>
      <Nav/>
      <Routes>
      {PublicRoute.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
      </Routes>
      <Routes>
        <Route path='dashboard' element={
         <ProtectedRoute>
           <Dashboard/>
         </ProtectedRoute>
        } >
          <Route index element={<AddService></AddService>} > Add Service </Route>
          <Route path='order' element={<Order></Order>} > Add Service </Route>
          <Route path='manageservice' element={<ManageService></ManageService>} > Manage Service </Route>
          <Route path='managereview' element={<ManageReview></ManageReview>} > Manage Review </Route>
        </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
