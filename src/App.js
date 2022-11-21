import React from "react";
import { Routes, Route } from 'react-router-dom';
import './App.css';

const Register = React.lazy(()=> import('./views/Register/Register'));
const Login = React.lazy(()=> import('./views/Login/Login'));
const Home = React.lazy(()=> import('./views/Home/Home'));
const Add = React.lazy(()=> import('./views/Add/Add'));

function App() {


  
  return (
    <div className="App">
      <Routes>
          <Route path="Register" element={
            <React.Suspense fallback ={<div>Loading...</div>}>
              <Register />
            </React.Suspense>
          } />
          <Route path="/" element={
            <React.Suspense fallback ={<div>Loading..</div>}>
              <Login  />
            </React.Suspense>
          } />
            <Route path="/Home" element={
              <React.Suspense fallback ={<div>Loading...</div>}>
                <Home  />
             </React.Suspense>
            } />
            <Route path="/Add" element={<React.Suspense fallback ={<div>Loading...</div>}>
              <Add />
            </React.Suspense>
            } /> 
      </Routes>
    </div>
  );
}

export default App;
