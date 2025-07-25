// src/components/AccountOpeningForm.js
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';

function AccountOpeningForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    aadhar: '',
    pan: '',
    initialDeposit: '',
  });

  const [accountNumber, setAccountNumber] = useState('');
  const fixedIFSC = 'SBIN0012345';

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const generateAccountNumber = () => {
    const base = '4337020100031';
    const random = Math.floor(100 + Math.random() * 900);
    return base + random;
  };

  const handleAccountSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, address, aadhar, pan, initialDeposit } = form;

    if (!name || !email || !phone || !address || !aadhar || !pan || !initialDeposit) {
      Swal.fire('❌ Error', 'All fields are required!', 'error');
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      Swal.fire('📱 Error', 'Enter valid 10-digit phone number!', 'error');
      return;
    }

    if (!/^\d{12}$/.test(aadhar)) {
      Swal.fire('🔖 Error', 'Enter valid 12-digit Aadhar number!', 'error');
      return;
    }

    const accNo = generateAccountNumber();

    try {
      const res = await axios.post('http://localhost:5000/api/account', {
        ...form,
        accountNumber: accNo,
        ifsc: fixedIFSC,
      });

      Swal.fire({
        icon: 'success',
        title: '✅ Account Opened!',
        html: `<b>Account Number:</b> ${accNo}<br/><b>IFSC:</b> ${fixedIFSC}`,
      });

      setAccountNumber(accNo);
    } catch (err) {
      console.error("Account creation error:", err);
      Swal.fire('❌ Error', 'Account creation failed!', 'error');
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">SwiftBank <span className="text-primary">Account Opening</span></h2>
      <div className="p-4 bg-light border rounded shadow-sm">
        <input type="text" name="name" placeholder="Full Name" className="form-control mb-3" value={form.name} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" className="form-control mb-3" value={form.email} onChange={handleChange} />
        <input type="text" name="phone" placeholder="Phone Number" className="form-control mb-3" value={form.phone} onChange={handleChange} />
        <input type="text" name="address" placeholder="Address" className="form-control mb-3" value={form.address} onChange={handleChange} />
        <input type="text" name="aadhar" placeholder="Aadhar Number" className="form-control mb-3" value={form.aadhar} onChange={handleChange} />
        <input type="text" name="pan" placeholder="PAN Number" className="form-control mb-3" value={form.pan} onChange={handleChange} />
        <input type="number" name="initialDeposit" placeholder="Initial Deposit (₹)" className="form-control mb-4" value={form.initialDeposit} onChange={handleChange} />
        <button onClick={handleAccountSubmit} className="btn btn-success w-100">✅ Open Account</button>
      </div>
    </div>
  );
}

export default AccountOpeningForm;
