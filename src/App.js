import './App.css';
import { PublicRoute } from './Routes/PutlicRoute';
import {Routes, Route} from 'react-router-dom';
import Nav from './Components/Nav';
import Footer from './Components/Common/Footer';
import { PrivateRoute } from './Routes/PrivateRoute';
import RequireAuth from './Components/Dashboard/RequireAuth/RequireAuth';
import Dashboard from './Components/Dashboard/Dashboard';
import AddService from './Components/Dashboard/AddService';
import Order from './Components/Order';
import ManageReview from './Components/Dashboard/ManageReview';
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
          <Dashboard/>
        } >
          <Route index element={<AddService></AddService>} > Add Service </Route>
          <Route path='order' element={<Order></Order>} > Add Service </Route>
          <Route path='managereview' element={<ManageReview></ManageReview>} > Manage Review </Route>
        </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
