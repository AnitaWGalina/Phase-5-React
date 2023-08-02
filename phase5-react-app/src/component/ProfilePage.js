import React from 'react';


const ProfilePage = () => {
  // Replace the following data with your actual user data
  const userData = {
    name: 'Agri',
    status: 'Active',
    email: 'agribix@gmail.com',
    phoneNumber: '+254 711947327',
    location: 'Nairobi',
    isGroupMember: true, // Replace with true/false depending on the user type
  };

  const handleChangePassword = () => {
    // Implement the change password functionality
    alert('Change password functionality will be implemented here.');
  };

  const handleDeleteAccount = () => {
    // Implement the delete account functionality
    alert('Delete account functionality will be implemented here.');
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h1 className="profile-title">Profile</h1>
        <div className="profile-info">
          <div className="profile-field">
            <span className="profile-label">Name:</span>
            <span className="profile-value">{userData.name}</span>
          </div>
          <div className="profile-field">
            <span className="profile-label">Status:</span>
            <span className="profile-value">{userData.status}</span>
          </div>
          <div className="profile-field">
            <span className="profile-label">Email:</span>
            <span className="profile-value">{userData.email}</span>
          </div>
          <div className="profile-field">
            <span className="profile-label">Phone Number:</span>
            <span className="profile-value">{userData.phoneNumber}</span>
          </div>
          <div className="profile-field">
            <span className="profile-label">Location:</span>
            <span className="profile-value">{userData.location}</span>
          </div>
          {userData.isGroupMember && (
            <div className="profile-field">
              <span className="profile-label">Group Member:</span>
              <span className="profile-value">Yes</span>
            </div>
          )}
        </div>
        <div className="profile-actions">
          <button className="profile-action-btn" onClick={handleChangePassword}>Change Password</button>
          <button className="profile-action-btn delete-btn" onClick={handleDeleteAccount}>Delete Account</button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
