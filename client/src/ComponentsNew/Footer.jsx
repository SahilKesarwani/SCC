import React from "react";
import "../styleFooter.css";

export default function Footer() {
  return (
    <>
      <footer id="footer" className="footer text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* <div className="footer-menu">
                <ul className="nav unstyled">
                  <li>
                    <a href="www.google.com">Home</a>
                  </li>
                  <li>
                    <a href="www.google.com">Blog</a>
                  </li>
                  <li>
                    <a href="www.google.com">Tickets</a>
                  </li>
                  <li>
                    <a href="www.google.com">Faq</a>
                  </li>
                  <li>
                    <a href="www.google.com">Press</a>
                  </li>
                  <li>
                    <a href="www.google.com">Contact</a>
                  </li>
                </ul>
              </div> */}
              <div className="footer-logo">
                <img src={require('../images/logo.jpg')} alt="footer logo" />
                <p>SIET Coding Club</p>
              </div>
              <div className="footer-social">
                <ul>
                  <li>
                    <a href="www.google.com">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="www.google.com">
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href="www.google.com">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="copyright-info">
                <span>Copyright © 2022 SCC. All Rights Reserved.</span>
              </div>
            </div>
          </div>
        </div>
        
      </footer>
    </>
  );
}
