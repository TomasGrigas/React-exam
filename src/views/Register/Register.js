import { useState } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../utils/constants";
import { useNavigate } from "react-router";



export const Register = ()=>{   
       const [registerError, setRegisterError] = useState();
       const navigate = useNavigate();
       const [email, setEmail] = useState("");
       const [password, setPassword] = useState("");

       const handleRegister = (e) => {
            e.preventDefault();
            fetch(`${BASE_URL}/auth/register`,{
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
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
                    setRegisterError(data.err);
                } else {
                    navigate("/Login")
                }
            });
        }

    return(
        <div>
            <Link to="/Login">Login</Link>
            <Link to="/Register">Register</Link>
            {registerError && <h3>{registerError}</h3>}
            <h1>Please Register</h1>
            <form onSubmit={handleRegister}>
                <input value ={email} onChange ={(e)=>setEmail(e.target.value)} type="email" placeholder = "Email"/>
                <input value ={password} onChange ={(e)=>setPassword(e.target.value)}type="password" placeholder = "Password"/>
                <button type ="submit">Register</button>
            </form>     
        </div>
    )
}