import React, { useState } from 'react';
import Swal from 'sweetalert2';

function ATMServiceForm() {
  const initialState = {
    accountNumber: '',
    name: '',
    mobile: '',
    address: '',
    aadhaar: '',
    dob: '',
    pan: '',
    branch: '',
    nominee: '',
  };

  const [debitData, setDebitData] = useState(initialState);
  const [creditData, setCreditData] = useState(initialState);

  const handleChange = (e, type) => {
    const { name, value } = e.target;
    if (type === "debit") {
      setDebitData(prev => ({ ...prev, [name]: value }));
    } else {
      setCreditData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e, type) => {
    e.preventDefault();
    const data = type === "debit" ? debitData : creditData;

    Swal.fire({
      icon: 'success',
      title: `${type === "debit" ? "Debit" : "Credit"} Card Request Submitted`,
      html: `
        <b>${data.name}</b>, your <b>${type.toUpperCase()} Card</b> request has been submitted.<br/>
        We will contact you at <b>${data.mobile}</b>.
      `,
      confirmButtonText: 'OK'
    });

    console.log(`${type.toUpperCase()} FORM DATA:`, data);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">Apply for ATM Card</h2>
      <div className="row g-4">
        
        {/* Debit Card Form */}
        <div className="col-md-6">
          <div className="p-4 shadow rounded bg-light">
            <h4 className="mb-4 text-primary">Debit Card Apply</h4>
            <form onSubmit={(e) => handleSubmit(e, "debit")}>
              <Input label="Account Number" name="accountNumber" value={debitData.accountNumber} onChange={(e) => handleChange(e, "debit")} />
              <Input label="Full Name" name="name" value={debitData.name} onChange={(e) => handleChange(e, "debit")} />
              <Input label="Mobile Number" name="mobile" value={debitData.mobile} onChange={(e) => handleChange(e, "debit")} />
              <Input label="Address" name="address" value={debitData.address} onChange={(e) => handleChange(e, "debit")} />
              <Input label="Aadhaar Number" name="aadhaar" value={debitData.aadhaar} onChange={(e) => handleChange(e, "debit")} />
              <Input label="Date of Birth" name="dob" type="date" value={debitData.dob} onChange={(e) => handleChange(e, "debit")} />
              <Input label="PAN Number" name="pan" value={debitData.pan} onChange={(e) => handleChange(e, "debit")} />
              <Input label="Branch Name" name="branch" value={debitData.branch} onChange={(e) => handleChange(e, "debit")} />
              <Input label="Nominee Name (optional)" name="nominee" value={debitData.nominee} onChange={(e) => handleChange(e, "debit")} />
              <div className="text-center mt-3">
                <button type="submit" className="btn btn-success px-4">Submit Debit Request</button>
              </div>
            </form>
          </div>
        </div>

        {/* Credit Card Form */}
        <div className="col-md-6">
          <div className="p-4 shadow rounded bg-light">
            <h4 className="mb-4 text-danger">Credit Card Apply</h4>
            <form onSubmit={(e) => handleSubmit(e, "credit")}>
              <Input label="Account Number" name="accountNumber" value={creditData.accountNumber} onChange={(e) => handleChange(e, "credit")} />
              <Input label="Full Name" name="name" value={creditData.name} onChange={(e) => handleChange(e, "credit")} />
              <Input label="Mobile Number" name="mobile" value={creditData.mobile} onChange={(e) => handleChange(e, "credit")} />
              <Input label="Address" name="address" value={creditData.address} onChange={(e) => handleChange(e, "credit")} />
              <Input label="Aadhaar Number" name="aadhaar" value={creditData.aadhaar} onChange={(e) => handleChange(e, "credit")} />
              <Input label="Date of Birth" name="dob" type="date" value={creditData.dob} onChange={(e) => handleChange(e, "credit")} />
              <Input label="PAN Number" name="pan" value={creditData.pan} onChange={(e) => handleChange(e, "credit")} />
              <Input label="Branch Name" name="branch" value={creditData.branch} onChange={(e) => handleChange(e, "credit")} />
              <Input label="Nominee Name (optional)" name="nominee" value={creditData.nominee} onChange={(e) => handleChange(e, "credit")} />
              <div className="text-center mt-3">
                <button type="submit" className="btn btn-danger px-4">Submit Credit Request</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable Input Field
const Input = ({ label, name, type = "text", value, onChange }) => (
  <div className="mb-3">
    <label className="form-label">{label}</label>
    <input type={type} className="form-control" name={name} required value={value} onChange={onChange} />
  </div>
);

export default ATMServiceForm;
