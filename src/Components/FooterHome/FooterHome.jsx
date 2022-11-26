import React from "react";

export default function FooterHome() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-row">
          <div className="col">
            <h2 className="title">EMAIL SIGN UP</h2>
            <p className="detail">
              Be the first to know about new products and special offers.
            </p>
            <a className="path" href="#">
              Sign up now
            </a>
          </div>
          <div className="col">
            <h2 className="title">GIFT CARDS</h2>
            <p className="detail">Give the gift that always fits.</p>
            <a className="path" href="#">
              View cards
            </a>
          </div>
          <div className="col">
            <h2 className="title">STORES NEAR YOU</h2>
            <p className="detail">
              Locate a Nice retail store or authorized retailer.
            </p>
            <a className="path" href="#">
              Search
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
