import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function FarmerLoanForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    aadhaar: '',
    landArea: '',
    cropType: '',
    loanAmount: '',
    purpose: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const loanID = `FARM-LOAN-${Math.floor(1000 + Math.random() * 9000)}`;
    alert(`✅ Loan Form Submitted!\nLoan ID: ${loanID}`);
  };

  return (
    <div className="container mt-5">
      <div className="p-4 rounded shadow bg-light">
        <h3 className="text-center mb-4 text-success">Farmer Loan Application</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Farmer Name" className="form-control mb-3 border border-success" value={formData.name} onChange={handleChange} required />
          <input type="text" name="phone" placeholder="Phone Number" className="form-control mb-3 border border-success" value={formData.phone} onChange={handleChange} required />
          <input type="text" name="aadhaar" placeholder="Aadhaar Number" className="form-control mb-3 border border-success" value={formData.aadhaar} onChange={handleChange} required />
          <input type="text" name="landArea" placeholder="Land Area (in acres)" className="form-control mb-3 border border-success" value={formData.landArea} onChange={handleChange} required />
          <input type="text" name="cropType" placeholder="Crop Type" className="form-control mb-3 border border-success" value={formData.cropType} onChange={handleChange} required />
          <input type="number" name="loanAmount" placeholder="Loan Amount (₹)" className="form-control mb-3 border border-success" value={formData.loanAmount} onChange={handleChange} required />
          <textarea name="purpose" placeholder="Purpose of Loan" className="form-control mb-3 border border-success" value={formData.purpose} onChange={handleChange} required />
          <button type="submit" className="btn btn-success w-100">Apply</button>
        </form>
      </div>
    </div>
  );
}

export default FarmerLoanForm;
