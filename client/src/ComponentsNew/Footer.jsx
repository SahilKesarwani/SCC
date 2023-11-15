import React from "react";
import "../styleFooter.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer id="footer" className="footer text-center">
        <div className="container">
          <div className="row2">
            <div className="col-md-12">
              <div className="footer-logo">
                <img src={require("../images/logo.jpg")} alt="footer logo" />
                <p>SIET Coding Club</p>
              </div>
              <div className="fb-form">
                <form
                  className="form-group"
                  action="https://formspree.io/f/xknlabok"
                  method="POST"
                >
                  <input
                    className="form-control"
                    id="fb-comment"
                    name="email"
                    placeholder="Enter your email"
                  />
                  <input
                    className="form-control"
                    id="fb-comment"
                    name="message"
                    placeholder="Tell us what you think"
                  />
                  <button className="fb-btn" type="submit">
                    Submit
                  </button>
                </form>
              </div>

              <div className="footer-social">
                <ul>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.linkedin.com/company/scc-siet-coding-club/"
                    >
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.youtube.com/@sietcodingclub7100"
                    >
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.instagram.com/sietcodingclub/"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="copyright-info">
              <span>Copyright © 2022 SCC. All Rights Reserved.</span>
            </div>
            <div className="copyright-info">
              <span>Made with (❤️) by Rahul Singh and Gauri Gupta -> </span>
              <Link to="/developerspage" className="meetDevText">
                Meet the developers
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
