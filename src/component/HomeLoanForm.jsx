// src/component/HomeLoanForm.jsx
import React from 'react';

function HomeLoanForm() {
  return (
    <div className="container mt-5">
      <h2>🏠 Home Loan Application Form</h2>
      <form>
        <div className="mb-3">
          <label>Name:</label>
          <input type="text" className="form-control" placeholder="Enter full name" />
        </div>

        <div className="mb-3">
          <label>Loan Amount:</label>
          <input type="number" className="form-control" placeholder="Amount in ₹" />
        </div>

        <div className="mb-3">
          <label>Property Address:</label>
          <input type="text" className="form-control" placeholder="Complete address" />
        </div>

        <div className="mb-3">
          <label>Occupation:</label>
          <input type="text" className="form-control" placeholder="Your job/business" />
        </div>

        <button type="submit" className="btn btn-primary">Apply Now</button>
      </form>
    </div>
  );
}

export default HomeLoanForm;
