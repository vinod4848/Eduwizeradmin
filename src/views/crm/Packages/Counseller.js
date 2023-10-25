import React, { useState, useEffect } from 'react';
import { getPackageByCounseller } from '../../../Services/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router-dom';


function CounsellerPackageList({ history } ) {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    // Fetch packages for counsellors when the component mounts
    getPackageByCounseller()
      .then((response) => {
        setPackages(response.data);
      })
      .catch((error) => {
        console.error('Error fetching packages for counsellors:', error);
      });
  }, []);

  const handleEditClick = (packageId) => {
    history.push(`/crm/packages/edit-package/${packageId}`);
    // You can navigate to an edit page or show a modal here
    console.log('Edit button clicked for package ID:', packageId);
  };

  const handleDeleteClick = (packageId) => {
    // Handle delete button click for the specified package
    // You can show a confirmation modal before deleting
    console.log('Delete button clicked for package ID:', packageId);
  };

  return (
    <div className="container">
      <h2>Package List</h2>
      <div className="row">
        {packages.map((packageItem) => (
          <div className="col-md-4 mb-4" key={packageItem._id}>
            <div className="card">
              <div className="card-body">
              <h5 className="card-title">User: {packageItem.user}</h5>
                <p className="card-text">Prize: {packageItem.prize}</p>
                <p className="card-text">Special Prize: {packageItem.specialPrize}</p>
                
                <button className="btn btn-primary" onClick={() => handleEditClick(packageItem._id)}>
                  <FontAwesomeIcon icon={faEdit} /> Edit
                </button>
                {/* <button className="btn btn-danger ml-2" onClick={() => handleDeleteClick(packageItem._id)}>
                  <FontAwesomeIcon icon={faTrash} /> Delete
                </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default withRouter(CounsellerPackageList);
