import React from 'react';
import './About.jsx';

function About() {
  return (
    <div className="about-section container my-5 py-4" id="about">
      <h2 className="text-center mb-4">About <span className="text-info">SwiftBank</span></h2>
      <p className="text-center lead text-muted">
        SwiftBank is a secure and modern online banking application designed to provide fast, smooth, and reliable financial services to its users.
      </p>
       <div className="row text-center mt-4">
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm h-100 shadow bg-warning">
            <div className="card-body">
              <i className="bi bi-shield-lock-fill fs-1 text-info"></i>
              <h5 className="mt-3">Secure Banking</h5>
              <p className="text-muted">End-to-end encryption ensures your data and transactions are fully safe.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm h-100 shadow bg-warning">
            <div className="card-body">
              <i className="bi bi-speedometer2 fs-1 text-info"></i>
              <h5 className="mt-3">Fast Transactions</h5>
              <p className="text-muted">Experience lightning-fast fund transfers and account actions.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm h-100 bg-warning">
            <div className="card-body">
              <i className="bi bi-headset fs-1 text-info"></i>
              <h5 className="mt-3">24x7 Support</h5>
              <p className="text-muted">Our support team is always ready to assist you anytime, anywhere.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
