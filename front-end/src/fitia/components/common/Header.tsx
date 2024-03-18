// Header.js
import React from 'react';

function Header() {
  return (
    <header className="bg-dark text-light py-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="mb-0">Logo</h1>
          </div>
          <div className="col-md-6 text-right">
            <nav>
              <ul className="list-inline mb-0">
                <li className="list-inline-item"><a href="#" className="text-light">Admin</a></li>
                <li className="list-inline-item"><a href="#" className="text-light">Status</a></li>
                <li className="list-inline-item"><a href="#" className="text-light">Contact Us</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;