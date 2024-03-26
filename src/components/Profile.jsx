import { useContext } from "react";
import UserContext from "../contexts/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <h1>Not Logged In</h1>;

  if (user.username.length < 8)
    return <h1>User Name must be at least 8 Characters in length</h1>;

  if (!user.email) return <h1>Email field must be filled in</h1>;

  if (user.password.length < 10)
    return <h1>Password must be at least 10 characters in length</h1>;

  return (
    <div>
      <h2>
        Profile: User : {user.username} --- Email : {user.email}
      </h2>
    </div>
  );
}

export default Profile;
