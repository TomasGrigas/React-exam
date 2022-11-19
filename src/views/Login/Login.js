import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export const Login = ({onLogin})=>{
        const navigate = useNavigate();
        const handleLogin = () =>  {
            onLogin();
            navigate("/home");
        }
      
    return (
        <div>
            <div>
                
            </div>
           <Link to="/Register">Register</Link>
           <button onClick={handleLogin}>Login</button>   
        </div>
    );
}