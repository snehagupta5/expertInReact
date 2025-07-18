import React from 'react'
const Summary = ({ formData }) => {
    return (
        <div className="summar_container">
            <div>First Name:{formData.name}</div>
            <div>Last Name:{formData.lastName}</div>
            <div>Email:{formData.email}</div>
            <div>Street:{formData.street}</div>
            <div>City:{formData.city}</div>
            <div>Pincode:{formData.pincode}</div>
        </div>
    );
};
export default Summary