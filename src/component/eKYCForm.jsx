// src/component/eKYCForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function EKYCForm() {
  const [formData, setFormData] = useState({
    accountNumber: '',
    aadharFront: null,
    aadharBack: null,
    panCard: null,
    selfie: null,
  });

  const handleFileChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('accountNumber', formData.accountNumber);
    data.append('aadharFront', formData.aadharFront);
    data.append('aadharBack', formData.aadharBack);
    data.append('panCard', formData.panCard);
    data.append('selfie', formData.selfie);

    try {
      await axios.post('http://localhost:5000/api/kyc', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      Swal.fire('✅ Success', 'e-KYC submitted successfully!', 'success');
      setFormData({
        accountNumber: '',
        aadharFront: null,
        aadharBack: null,
        panCard: null,
        selfie: null,
      });
    } catch (err) {
      console.error(err);
      Swal.fire('❌ Error', 'Failed to upload e-KYC', 'error');
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">e-KYC Upload</h2>
      <form className="p-4 bg-light border rounded shadow-sm" onSubmit={handleSubmit} encType="multipart/form-data">
        <input type="text" name="accountNumber" placeholder="Account Number" className="form-control mb-3" value={formData.accountNumber} onChange={handleChange} required />

        <label className="form-label">Upload Aadhar Front</label>
        <input type="file" name="aadharFront" className="form-control mb-3" onChange={handleFileChange} required />

        <label className="form-label">Upload Aadhar Back</label>
        <input type="file" name="aadharBack" className="form-control mb-3" onChange={handleFileChange} required />

        <label className="form-label">Upload PAN Card</label>
        <input type="file" name="panCard" className="form-control mb-3" onChange={handleFileChange} required />

        <label className="form-label">Upload Selfie</label>
        <input type="file" name="selfie" className="form-control mb-4" onChange={handleFileChange} required />

        <button type="submit" className="btn btn-primary w-100">📤 Submit e-KYC</button>
      </form>
    </div>
  );
}

export default EKYCForm;
