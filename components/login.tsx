import { useState } from "react";
import { postLogin } from "@/controllers/request";
import ILogin from "@/interfaces/iLogin";
import { setToken } from "@/controllers/request";
import './drinkInfo.css'
import './login.css'
import Card from "./card"
import { ArrowRight } from 'lucide-react';
interface LoginProps {
    onLogin :(isAuthenticated : boolean , token?: string) => void;
}

const Login: React.FC<LoginProps> = ({onLogin}) =>{
    const[username,setUsername] = useState('');
    const[password,setPassword] = useState('');
    const[error,setError] = useState<string | null>(null);  

    const handleLogin = async() => {

        try{
            const authData:ILogin = {
                username:username,
                password:password
            }
            const response = await postLogin(authData);
            if(response.status == 422){
                setError('Validation failed')
            }else if(response.token){
                setToken(response.token) ;
                onLogin(true,response.token);
            } 
        }catch(err){
            console.log(err);
            setError('Server side error');
        }

    }

    return (
        <div className="detail-modal">
            <Card>
          <h2>Login</h2>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <div className="modal-content">
          <input className="input"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input className="input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          </div>
          <ArrowRight size="48" className="enter" onClick={handleLogin}/>
          </Card>
        </div>
      );
    };
    
    export default Login;