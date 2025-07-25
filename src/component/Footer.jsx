import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-light pt-4 pb-3 mt-5">
      <div className="container">
        <div className="row">

          {/* Brand and About */} 
          <div className="col-md-3 mb-3">
            <h5>🏦 SwiftBank Pro</h5>
            <p>
              India's trusted digital bank offering smart banking services
              like account opening, KYC, dashboard, statements, and more.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/services" className="text-light text-decoration-none">Services</a></li>
              <li><a href="/about" className="text-light text-decoration-none">About Us</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
              <li><a href="/dashboard" className="text-light text-decoration-none">Smart Dashboard</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 mb-3">
            <h5>Contact Us</h5>
            <p><i className="bi bi-geo-alt-fill me-2"></i>Lucknow, Uttar Pradesh, India</p>
            <p><i className="bi bi-telephone-fill me-2"></i>+91 8765077981</p>
            <p><i className="bi bi-envelope-fill me-2"></i>support@swiftbank.in</p>
            <div>
              <a href="#" className="text-light me-3"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-light me-3"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-light me-3"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-light"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>

          {/* About Developer Kamal */}
          <div className="col-md-3 mb-3">
            <h5>About Developer</h5>
            <p>
              👨‍💻 <strong>Er. Kamal Prajapati</strong><br />
              A passionate <strong>MERN Stack Developer</strong> from India, crafting full-stack web experiences with React, Node.js, Express & MongoDB.
            </p>
            <p>
              🚀 Project by: <strong>Er. Kamal</strong><br />
              📧 Email: <a href="kamalprajapati6244@gmail.com" className="text-light text-decoration-underline">kamalprajapati6244@gmail.com</a>
            </p>
          </div>

        </div>

        {/* Bottom Line */}
        <hr className="border-light" />
        <p className="text-center mb-0">
          &copy; {new Date().getFullYear()} SwiftBank Pro. All rights reserved. | Developed with ❤️ by <strong>Er. Kamal Prajapati</strong>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
