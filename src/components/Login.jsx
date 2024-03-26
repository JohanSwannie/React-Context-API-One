import { useContext, useState } from "react";
import UserContext from "../contexts/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    setUser({ username, email, password });
  };

  const clearFields = () => {
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form">
          <div>
            <input
              type="text"
              value={username}
              placeholder="Username"
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div>
            <input
              type="email"
              value={email}
              placeholder="Email"
              required
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
          <div>
            <button onClick={clearFields}>Clear Fields</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
