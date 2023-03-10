import './App.css';
// import firebase app
import app from './firebase.init';
import {getAuth} from "firebase/auth";
import { PublicRoute } from './Routes/PutlicRoute';
import {Routes, Route} from 'react-router-dom';
import Nav from './Components/Nav';
import Footer from './Components/Common/Footer';
import Dashboard from './Components/Dashboard/Dashboard';
import ProtectedRoute from './Routes/ProtectedRoute';
import { PrivateRoute } from './Routes/PrivateRoute';


const auth = getAuth(app);

function App() {
  return (
    <div>
      <Nav/>
      <Routes>
      {PublicRoute.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))};
      </Routes>
      <Routes>
        <Route path='dashboard' element={
         <ProtectedRoute>
           <Dashboard/>
         </ProtectedRoute>
        } >
         {PrivateRoute.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))};
  
        </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
