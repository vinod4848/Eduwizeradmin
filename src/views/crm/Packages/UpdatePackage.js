import React, { useState, useEffect } from 'react';
import { editPackage, getPackageById } from '../../../Services/api';
import { withRouter } from 'react-router-dom';

function UpdatePackage({ history }) {
  // Extract the package ID from the URL manually
  const urlParts = window.location.pathname.split('/');
  const id = urlParts[urlParts.length - 1];

  const [packageData, setPackageData] = useState({});
  const [formData, setFormData] = useState({
    prize: '',
    specialPrize: '',
    user: '',
  });
  console.log(formData,"dfsadde")

  useEffect(() => {
    // Fetch the package data by ID when the component mounts
    getPackageById(id)
      .then((response) => {
        setPackageData(response.data);
        // Populate the form with the existing package data
        setFormData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching package data:', error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update the formData state when form fields change
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make the PUT request to update the package
      await editPackage(id, formData);
      // Redirect or show a success message as needed
      history.push(`/crm/packages/counseller`);
    } catch (error) {
      console.error('Error updating package:', error);
    }
  };

  return (
    <div className="container">
      <h2>Edit Package</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="prize">Prize</label>
          <input
            type="text"
            className="form-control"
            id="prize"
            name="prize"
            value={formData.prize}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="specialPrize">Special Prize</label>
          <input
            type="text"
            className="form-control"
            id="specialPrize"
            name="specialPrize"
            value={formData.specialPrize}
            onChange={handleChange}
          />
        </div>
        {/* <div className="form-group">
          <label htmlFor="user">User</label>
          <input
            type="text"
            className="form-control"
            id="user"
            name="user"
            value={formData.user}
            onChange={handleChange}
          />
        </div> */}
        <button type="submit" className="btn btn-primary">
          Update Package
        </button>
      </form>
    </div>
  );
}

export default withRouter(UpdatePackage);
