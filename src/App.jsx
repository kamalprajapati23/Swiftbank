import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './index.css';

import Navbar from './component/Navbar';
import Slider from './component/Slider';
import About from './component/About';
import Services from './component/Services';
import AccountOpeningForm from './component/AccountOpeningForm';
import EKYCForm from './component/eKYCForm';
import SmartDashboard from './component/SmartDashboard';
import FarmerLoanForm from './component/FarmerLoanForm';
import HomeLoanForm from './component/HomeLoanForm';
import BusinessLoanForm from './component/BusinessLoanForm';
import ATMServiceForm from './component/ATMServiceForm'; // ✅ This line added
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: '80px' }}>
        <Routes>
          <Route path="/" element={
            <>
              <Slider />
              <About />
              <Services />
              <AccountOpeningForm />
              <EKYCForm />
              <SmartDashboard />
            </>
          } />
          <Route path="/farmer" element={<FarmerLoanForm />} />
          <Route path="/home-loan" element={<HomeLoanForm />} />
          <Route path="/business-loan" element={<BusinessLoanForm />} />
          <Route path="/transactions" element={<ATMServiceForm />} /> {/* ✅ ATM Route */}
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
