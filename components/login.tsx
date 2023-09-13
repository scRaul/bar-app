import { useState } from "react";
import { postLogin } from "@/controllers/request";
import ILogin from "@/interfaces/iLogin";

import "./login.css";
import Card from "./card";
import { ArrowRight } from "lucide-react";

interface LoginProps {
  onLogin: (isAuthenticated: boolean, token?: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    try {
      const authData: ILogin = {
        username: username,
        password: password,
      };
      const response = await postLogin(authData);
      console.log(response);
      if (response.status == 422) {
        setError("Validation failed");
      } else if (response.token) {
        localStorage.setItem("jwtToken", response.token);
        onLogin(true, response.token);
      }
    } catch (err) {
      console.log(err);
      setError("Server side error");
    }
  };

  return (
    <div className="detail-modal">
      <Card>
        <h2>Login</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <ArrowRight size={48} className="enter bttn" onClick={handleLogin} />
      </Card>
    </div>
  );
};

export default Login;
