import {Link, useNavigate} from "react-router-dom";
import "./navigation.css";

export const Navigation = ({user, onLogout}) =>{
    const navigate = useNavigate();
    
    const handleLogout = () => {
        onLogout();
        navigate("/")
    }

    console.log(user);

    return(
        <div className='navigation'>
            <Link to="/Home">Home</Link>
            <Link to="/Add">Add</Link>
            <button onClick={handleLogout}>Logout</button>
        </div>

       
    )   
}