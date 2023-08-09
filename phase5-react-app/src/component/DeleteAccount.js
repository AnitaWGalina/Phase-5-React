import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";

const DeleteAccount = ({id}) => {
    const { user, logout } = useAuth();
    const token = localStorage.getItem('jwt')
    const [deleted, setDeleted] = useState(false);
    const navigate = useNavigate();
    
    const handleDelete = () => {
        // Perform the DELETE request to the API endpoint
        fetch(`http://127.0.0.1:3000/users/${user.id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
        })
          .then((response) => {
            if (response.ok) {
              // If the DELETE request is successful, mark the resource as deleted
              logout();
              setDeleted(true);
              window.alert("Successfully deleted!");
              navigate("/"); // Redirect to a deleted account page
            } else {
              // Handle the case when the DELETE request fails
              console.error("Failed to delete resource");
            }
          })
          .catch((error) => {
            console.error("Error deleting account:", error);
          });
      };
    
      if (deleted) {
        // Show a message or handle the UI when the resource is deleted
        return <p>User has been deleted.</p>;
      }

  return (
    <div>
      <Button onClick={handleDelete} colorScheme="teal">Delete Account</Button>
    </div>
  )
};
export default DeleteAccount;