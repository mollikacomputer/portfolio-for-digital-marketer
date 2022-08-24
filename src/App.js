import './App.css';
import { PublicRoute } from './Routes/PutlicRoute';
import {Routes, Route} from 'react-router-dom';
import Nav from './Components/Nav';
import Footer from './Components/Common/Footer';
import { PrivateRoute } from './Routes/PrivateRoute';
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
        {
          PrivateRoute.map(({path, Component}, index) =>(
            <Route key={index} path={path} element={<Component/>} />
          ))
        }
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
