import './App.css';
// import firebase app
import app from './firebase.init';
import {getAuth} from "firebase/auth";
import { PublicRoute } from './Routes/PutlicRoute';
import {Routes, Route} from 'react-router-dom';
import Nav from './Components/Nav';
import Footer from './Components/Common/Footer';
import Dashboard from './Components/Dashboard/Dashboard';
import AddService from './Components/Dashboard/AddService';
import Order from './Components/Order';
import ManageReview from './Components/Dashboard/ManageReview';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './Routes/ProtectedRoute';
import ManageService from './Components/Dashboard/ManageService';
import UpdateService from './Components/Dashboard/UpdateService';


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
          <Route index element={<AddService></AddService>} > </Route>
          <Route path='order' element={<Order></Order>} ></Route>
          <Route path='/dashboard/updateservice/:id' element={<UpdateService></UpdateService>} ></Route>
          <Route path='manageservice' element={<ManageService></ManageService>} >  </Route>
          <Route path='managereview' element={<ManageReview></ManageReview>} >  </Route>
        </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
