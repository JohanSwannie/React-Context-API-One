import { useContext, useState } from "react";
import UserContext from "../contexts/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    setUser({ username, password });
  };

  const clearFields = () => {
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <h2>Login</h2>
      <div className="form">
        <div>
          <input
            type="text"
            value={username}
            placeholder="User Name"
            autoFocus
            onClick={(event) => setUsername(event.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            placeholder="Password"
            onClick={(event) => setPassword(event.target.value)}
          />
        </div>
        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
        <div>
          <button onClick={clearFields}>Clear Fields</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
