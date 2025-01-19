import React, { useState } from "react";
import "../styles/details.css";
import { useLocation } from "react-router-dom"; 
function Details() {
  const { state } = useLocation(); 
  const role = state?.role;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    doorno: '',
    street: '',
    city: '',
    district: '',
    pincode: '',
    aadhar: '',
    photo: null,
    aadharPhoto: null,
    company: '',
    education: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can add API calls here to handle form submission.
  };

  return (
    <div className="Details">
      <h2>Details Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <h3>Address</h3>
        <div className="address-section">
          <div>
            <label htmlFor="doorno">Door No.:</label>
            <input
              type="text"
              id="doorno"
              name="doorno"
              value={formData.doorno}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="street">Street:</label>
            <input
              type="text"
              id="street"
              name="street"
              value={formData.street}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="district">District:</label>
            <input
              type="text"
              id="district"
              name="district"
              value={formData.district}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="pincode">Pin Code:</label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="aadhar">Aadhaar Number:</label>
          <input
            type="text"
            id="aadhar"
            name="aadhar"
            value={formData.aadhar}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="photo">Upload Photo:</label>
          <input
            type="file"
            id="photo"
            name="photo"
            onChange={handleFileChange}
            accept="image/*"
            required
          />
        </div>

        <div>
          <label htmlFor="aadharPhoto">Upload Aadhaar Photo:</label>
          <input
            type="file"
            id="aadharPhoto"
            name="aadharPhoto"
            onChange={handleFileChange}
            accept="image/*"
            required
          />
        </div>
        {role === 'student' && (
          <div>
            <label htmlFor="education">Educational Qualification:</label>
            <input
              type="text"
              id="education"
              name="education"
              value={formData.education}
              onChange={handleChange}
            />
          </div>
        )}

        {role === 'employer' && (
          <div>
            <label htmlFor="company">Company:</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          </div>
        )}
        

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Details;
