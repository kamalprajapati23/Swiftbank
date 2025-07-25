import React from 'react';

function BusinessLoanForm() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Business Loan Application</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Business Name</label>
          <input type="text" className="form-control" placeholder="Enter Business Name" />
        </div>
        <div className="mb-3">
          <label className="form-label">Owner Name</label>
          <input type="text" className="form-control" placeholder="Enter Owner Name" />
        </div>
        <div className="mb-3">
          <label className="form-label">Loan Amount</label>
          <input type="number" className="form-control" placeholder="Enter Loan Amount" />
        </div>
        <div className="mb-3">
          <label className="form-label">Business Type</label>
          <input type="text" className="form-control" placeholder="e.g., Retail, Manufacturing" />
        </div>
        <button type="submit" className="btn btn-primary w-100">Apply for Business Loan</button>
      </form>
    </div>
  );
}

export default BusinessLoanForm;
