import './App.css';
import { PublicRoute } from './Routes/PutlicRoute';
import {Routes, Route} from 'react-router-dom';
import Nav from './Components/Nav';
function App() {
  return (
    <div>
      <Nav/>
      <Routes>
      {PublicRoute.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
      </Routes>
      <h2 className='text-3xl' > Daisy ui with tailwind</h2>
    </div>
  );
}

export default App;
