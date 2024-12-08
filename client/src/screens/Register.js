import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const countryStateCityData = {
    USA: {
      California: ['Los Angeles', 'San Francisco', 'San Diego'],
      Texas: ['Houston', 'Dallas', 'Austin'],
    },
    India: {
      Maharashtra: ['Mumbai', 'Pune', 'Nagpur'],
      Punjab: ['Mohali', 'Jalandhar', 'Amritsar'],
    },
  };

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    salary: '',
    country: '',
    state: '',
    city: '',
  });

  const [countries] = useState(Object.keys(countryStateCityData));
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setFormData({ ...formData, country, state: '', city: '' });
    setStates(country ? Object.keys(countryStateCityData[country]) : []);
    setCities([]);
  };

  const handleStateChange = (e) => {
    const state = e.target.value;
    setFormData({ ...formData, state, city: '' });
    setCities(state ? countryStateCityData[formData.country][state] : []);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/users/add', formData);
      alert('User registered successfully!');
    } catch (err) {
      console.error(err);
      alert('Failed to register user!');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label>Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="form-control"
            rows="3"
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label>Salary</label>
          <input
            type="number"
            name="salary"
            value={formData.salary}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label>Country</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleCountryChange}
            className="form-select"
            required
          >
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label>State</label>
          <select
            name="state"
            value={formData.state}
            onChange={handleStateChange}
            className="form-select"
            disabled={!formData.country}
            required
          >
            <option value="">Select State</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label>City</label>
          <select
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className="form-select"
            disabled={!formData.state}
            required
          >
            <option value="">Select City</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
