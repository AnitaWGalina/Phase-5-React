import React from "react";
import { useAuth } from "../context/AuthContext";
import { NavLink } from "react-router-dom";
import DeleteAccount from "./DeleteAccount";

const Profile = () => {
  const { user, logout } = useAuth();
  // const token = localStorage.getItem('jwt')
  // const [deleted, setDeleted] = useState(false);
  // const navigate = useNavigate(); // Add this line to access the navigation function

  if (!user) {
    return <p>Please log in to view your profile.</p>;
  }

  return (
    <div>
      <h2>Welcome, {user.name}!</h2>
      <h1>Status: {user.status}</h1>
      <h1>Group Size: {user.group_number}</h1>
      <h1>Email Address: {user.email}</h1>
      <h1>Phone Number: {user.phone_number}</h1>
      <h1>Location: {user.location}</h1>
      <button onClick={logout}>Logout</button>
      <NavLink to="/update_account">
        <button>Update My Account</button>
      </NavLink>
      <DeleteAccount />
    </div>
  );
};

export default Profile;