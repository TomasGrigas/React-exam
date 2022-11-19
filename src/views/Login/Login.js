import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BASE_URL } from "../../utils/constants";


export const Login = ()=>{
            const [loginError, setLoginError] = useState();
            const navigate = useNavigate();
            const [email, setEmail] = useState("");
            const [password, setPassword] = useState("");
     
            const handleLogin = (e) => {
            e.preventDefault();
            fetch(`${BASE_URL}/auth/login`,{
                 method: 'POST',
                 headers: {
                 'Content-Type': 'application/json',
                 },
                 body: JSON.stringify({
                     email,
                     password
                 })
             })
             .then(res => res.json())
             .then(data => {
                 console.log(data);
                 if(data.err){
                     setLoginError(data.err);
                 } else {
                    localStorage.setItem("token", data.token);
                     navigate("/Home")

                 }
             });
         
         }
     
         return(
             <div>
                 <Link to="/Login">Login</Link>
                 <Link to="/Register">Register</Link>
                 {loginError && <h3>{loginError}</h3>}
                 <h1>Please Login Here</h1>
                 <form onSubmit={handleLogin}>
                     <input value ={email} onChange ={(e)=>setEmail(e.target.value)} type="email" placeholder = "Email"/>
                     <input value ={password} onChange ={(e)=>setPassword(e.target.value)}type="password" placeholder = "Password"/>
                     <button onClick={handleLogin}>Login</button>
                 </form>
                  
                 
             </div>

         )
         }