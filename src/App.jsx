import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./contexts/userContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1>REACT CONTEXT API</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
