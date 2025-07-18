import React from 'react'

const Profile = ({ formData, handleInputChange, formError }) => {
  return (
    <div>
      <div className="Profile_container">
        <label>First Name: </label>
        <input
          type="text"
          value={formData.name}
          name="name"
          onChange={(e) => handleInputChange(e, "name")}
        />
        {formError.name && <div className="Error">{formError.name}</div>}
      </div>
      <div className="Profile_container">
        <label>Last Name: </label>
        <input
          type="text"
          value={formData.lastName}
          name="lastName"
          onChange={(e) => handleInputChange(e, "lastName")}
        />
        {formError.lastName && (
          <div className="Error">{formError.lastName}</div>
        )}
      </div>
      <div className="Profile_container">
        <label>Email: </label>
        <input
          type="text"
          value={formData.email}
          name="Email"
          onChange={(e) => handleInputChange(e, "email")}
        />
        {formError.email && <div className="Error">{formError.email}</div>}
      </div>
    </div>
  );
}

export default Profile