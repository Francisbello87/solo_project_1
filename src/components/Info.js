import React from "react";
import profileIcon from "../images/FRANCIS11.png";

export default function Info() {
  return (
    <div className="info-container">
      <img src={profileIcon} />
      <div className="wrapper">
        <h1>Francis Bello</h1>
        <p>Frontend Developer</p>
        <small>francisb.website</small>
        <div>
          <button className="email">
            <a href="mailto:bellofrancis87@gmail.com">
              <i class="fas fa-envelope"></i>Email
            </a>
          </button>
          <button className="linkedin">
            <a href="https://www.linkedin.com/in/francisbello/" target="_blank">
              <i class="fab fa-linkedin"></i>LinkedIn
            </a>
          </button>
          <div className="about">
            <h3>About</h3>
            <p>
              I am a frontend developer with a particular interest in making
              things simple and automating daily tasks. I try to keep up with
              security and best practices, and am always looking for new things
              to learn.
            </p>
            <h3>Interests</h3>
            <p>
              Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
              Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
            </p>
          </div>
          <div className="footer">
            <ul className="footer-icons">
              <li>
                <a href="https://twitter.com/Francis_coder" target="_blank">
                  <i class="fab fa-twitter-square"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-facebook-square"></i>
                </a>
              </li>
              <li>
                <a href="https://instagram.com/thomasmore87" target="_blank">
                  <i class="fab fa-instagram-square"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/Francisbello87" target="_blank">
                  <i class="fab fa-github-square"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
