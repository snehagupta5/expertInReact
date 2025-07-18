import React from 'react'
const Address = ({ formData, handleInputChange, formError }) => {
  return (
    <div>
      <div className="Profile_container">
        <label>Street: </label>
        <input
          type="text"
          value={formData.street}
          name="Street"
          onChange={(e) => handleInputChange(e, "street")}
        />
      </div>
      <div className="Profile_container">
        <label>City: </label>
        <input
          type="text"
          value={formData.city}
          name="City"
          onChange={(e) => handleInputChange(e, "city")}
        />
      </div>
      <div className="Profile_container">
        <label>Pincode: </label>
        <input
          type="text"
          value={formData.pincode}
          name="Pincode"
          onChange={(e) => handleInputChange(e, "pincode")}
        />
        {formError.pincode && <div className="Error">{formError.pincode}</div>}
      </div>
    </div>
  );
};
export default Address;
