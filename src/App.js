import {Routes, Route} from 'react-router-dom';
import { Register } from './views/Register/Register';
import { Login } from './views/Login/Login';
import { Home } from './views/Home/Home';
import { Add } from './views/Add/Add';
import { Navigation } from './components/Navigation/Navigation';
import './App.css';



function App() {

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Add" element={<Add />} />
      </Routes>
    </div>
  );
}

export default App;
