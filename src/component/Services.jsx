import React from 'react';
import './Services.jsx';

function Services() {
  return (
    <div className="services-section container my-5 py-4" id="services">
      <h2 className="text-center mb-4">Our <span className="text-info">Services</span></h2>
      <p className="text-center lead text-muted">
        We offer a wide range of banking services designed for your financial needs.
      </p>

      <div className="row mt-4">
        <div className="col-md-4 mb-4">
          <div className="card service-card h-100 shadow bg-warning">
            <div className="card-body text-center">
              <i className="bi bi-piggy-bank fs-1 text-success"></i>
              <h5 className="mt-3">Savings Account</h5>
              <p>Secure your money and earn interest with our flexible savings accounts.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card service-card h-100 shadow bg-warning">
            <div className="card-body text-center">
              <i className="bi bi-bank fs-1 text-primary"></i>
              <h5 className="mt-3">Current Account</h5>
              <p>Manage your business transactions efficiently with zero limits.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card service-card h-100 shadow bg-warning">
            <div className="card-body text-center">
              <i className="bi bi-cash-coin fs-1 text-warning"></i>
              <h5 className="mt-3">Fixed Deposits</h5>
              <p>Grow your savings with high-interest fixed deposit plans.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card service-card h-100 shadow bg-warning">
            <div className="card-body text-center">
              <i className="bi bi-currency-exchange fs-1 text-info"></i>
              <h5 className="mt-3">Loans</h5>
              <p>Apply for personal, home, or business loans at low interest rates.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card service-card h-100 shadow bg-warning">
            <div className="card-body text-center">
              <i className="bi bi-wallet2 fs-1 text-danger"></i>
              <h5 className="mt-3">UPI / NEFT / RTGS</h5>
              <p>Transfer money instantly with our real-time payment systems.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card service-card h-100 shadow bg-warning">
            <div className="card-body text-center">
              <i className="bi bi-credit-card fs-1 text-secondary"></i>
              <h5 className="mt-3">Debit / Credit Cards</h5>
              <p>Get SwiftBank cards with exciting rewards and low interest rates.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Services;
