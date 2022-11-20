import { useState } from "react";
import React from "react";
import { Routes, Route } from 'react-router-dom';
// import { PageLayout } from './components/PageLayout';
import './App.css';

const Register = React.lazy(()=> import('./views/Register/Register'));
const Login = React.lazy(()=> import('./views/Login/Login'));
const Home = React.lazy(()=> import('./views/Home/Home'));
const Add = React.lazy(()=> import('./views/Add/Add'));

function App() {
  const [user, setUser] = useState(null);
  const handleLogin = () => setUser({ username: "" });
  const handleLogout = () => setUser(null);
  
  return (
    <div className="App">
      <Routes>
          <Route path="/Register" element={
            <React.Suspense fallback ={<div>Loading...</div>}>
              <Register />
            </React.Suspense>
          } />
          <Route path="/Login" element={
            <React.Suspense fallback ={<div>Loading..</div>}>
              <Login onLogin={handleLogin} />
            </React.Suspense>
          } />
        {/* <Route path="/" element= {<PageLayout user={user} onLogout={handleLogout}/>}> */}
          <Route path="/Home" element={
          <React.Suspense fallback ={<div>Loading...</div>}>
            <Home onLogin={handleLogin} />
          </React.Suspense>
          } />
          <Route path="/Add" element={<React.Suspense fallback ={<div>Loading...</div>}>
            <Add />
          </React.Suspense>
          } />
        {/* </Route>      */}
      </Routes>
    </div>
  );
}

export default App;
