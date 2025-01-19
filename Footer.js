import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-white text-center p-4">
      <p>&copy; 2025 Home2U. All rights reserved.</p>
      <div>
        <Link to="/privacy-policy" className="text-white me-3">Privacy Policy</Link>
        <Link to="/terms-of-service" className="text-white">Terms of Service</Link>
      </div>
    </footer>
  );
}

export default Footer;
