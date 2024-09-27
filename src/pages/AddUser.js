
import React, { useState } from 'react';

function AddUser() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    zipcode: ''
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);


  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const phoneRegex = /^[0-9]{10}$/; 
  const zipcodeRegex = /^\d{6}(-\d{4})?$/; 
  const validateForm = () => {
    const errors = {};
    let valid = true;

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      valid = false;
    }

    if (!formData.email) {
      errors.email = 'Email is required';
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Email is not valid';
      valid = false;
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
      valid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      errors.phone = 'Phone number must be 10 digits';
      valid = false;
    }

    if (!formData.street.trim()) {
      errors.street = 'Street is required';
      valid = false;
    }

    if (!formData.city.trim()) {
      errors.city = 'City is required';
      valid = false;
    }

    if (!formData.zipcode.trim()) {
      errors.zipcode = 'Zipcode is required';
      valid = false;
    } else if (!zipcodeRegex.test(formData.zipcode)) {
      errors.zipcode = 'Zipcode must be in the format XXXXX or XXXXX-XXXX';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmittedData(formData); 
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit} className="mt-4">
    
        <div className="mb-3">
          <label>Name:</label>
          <input
            type="text"
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

      
        <div className="mb-3">
          <label>Email:</label>
          <input
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        
        <div className="mb-3">
          <label>Phone:</label>
          <input
            type="tel"
            className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
        </div>

       
        <div className="mb-3">
          <label>Street:</label>
          <input
            type="text"
            className={`form-control ${errors.street ? 'is-invalid' : ''}`}
            name="street"
            value={formData.street}
            onChange={handleChange}
          />
          {errors.street && <div className="invalid-feedback">{errors.street}</div>}
        </div>

        <div className="mb-3">
          <label>City:</label>
          <input
            type="text"
            className={`form-control ${errors.city ? 'is-invalid' : ''}`}
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
          {errors.city && <div className="invalid-feedback">{errors.city}</div>}
        </div>

    
        <div className="mb-3">
          <label>Zip Code:</label>
          <input
            type="text"
            className={`form-control ${errors.zipcode ? 'is-invalid' : ''}`}
            name="zipcode"
            value={formData.zipcode}
            onChange={handleChange}
          />
          {errors.zipcode && <div className="invalid-feedback">{errors.zipcode}</div>}
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      
      {submittedData && (
        <div className="mt-4">
          <h3>Preview of Submitted Data:</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Phone:</strong> {submittedData.phone}</p>
          <p><strong>Address:</strong> {submittedData.street}, {submittedData.city}, {submittedData.zipcode}</p>
        </div>
      )}
    </div>
  );
}

export default AddUser;
