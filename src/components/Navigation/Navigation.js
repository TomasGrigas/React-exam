import {Link} from "react-router-dom";
import "./navigation.css";

export const Navigation = () =>{
    return(
        <div className='navigation'>
            <Link to="/">Register</Link>
            <Link to="/Login">Login</Link>
            <Link to="/Home">Home</Link>
            <Link to="/Add">Add</Link>
        </div>
    )   
}