import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import { Register } from './views/Register/Register';
import { Login } from './views/Login/Login';
import { Home } from './views/Home/Home';
import { Add } from './views/Add/Add';
import { PageLayout } from './components/PageLayout';
import './App.css';



function App() {
  const [user, setUser] = useState(null);

  const handleLogin = () => setUser({ username: "" });
  const handleLogout = () => setUser(null);
    
  

  return (
    <div className="App">
      <Routes>
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login onLogin={handleLogin}/>} />
        {/* <Route path="/" element= {<PageLayout user={user} onLogout={handleLogout}/>}> */}
          <Route path="/Home" element={<Home onLogin={handleLogin} />} />
          <Route path="/Add" element={<Add />} />
        {/* </Route>      */}
      </Routes>
    </div>
  );
}

export default App;
