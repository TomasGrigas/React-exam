import { useState } from "react";
import { BASE_URL } from "../../utils/constants";
import { useNavigate } from "react-router";
import { AlreadyColor, BackgroundColor, ButtonStyle, ErrorColor, LinkColor, MenuStyle, TitleColor } from "../../components/styledComponents";




const Register = ()=>{   
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
        <BackgroundColor>
            <MenuStyle>
                <LinkColor to="/Login">LOGIN</LinkColor>
                <LinkColor to="/Register">REGISTER</LinkColor>
            </MenuStyle>
            <img
                src="data:image/png;base64,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"
                alt ="pic"/>
            <ErrorColor>
                {registerError && <h3>{registerError}</h3>}
            </ErrorColor>
            <TitleColor>
                Please Register Here
            </TitleColor>
            <div>
            <AlreadyColor>Already Registered? Click here to<LinkColor to="/Login">LOGIN</LinkColor></AlreadyColor>     
            </div>
            <form onSubmit={handleRegister}>
                <input value ={email} onChange ={(e)=>setEmail(e.target.value)} type="email" placeholder = "Email"/>
                <input value ={password} onChange ={(e)=>setPassword(e.target.value)}type="password" placeholder = "Password"/>
                <ButtonStyle type ="submit">Register</ButtonStyle>
            </form>   
        </BackgroundColor>
        
    )
}

export default Register;