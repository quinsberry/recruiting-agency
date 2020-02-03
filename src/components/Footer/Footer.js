import React, { Component } from 'react';
import logo from '../../logo_white.png';


export default class Footer extends Component {
  render() {
    return (
      <>
        <section className="footer">
          <div className="container">
            <div className="footer__container-nav">
              <div className="row d-flex">
                <div className="col-lg-5">
                  <a href="#main">
                    <img src={logo} alt="abz" className="logo" />
                  </a>
                </div>
                <div className="col-lg-7 d-flex justify-content-end">
                  <ul className="navbar__items">
                    <li className="navbar__items-item">
                      <a href="#aboutMe">About me</a>
                    </li>
                    <li className="navbar__items-item">
                      <a href="#relationship">Relationships</a>
                    </li>
                    <li className="navbar__items-item">
                      <a href="#requirements">Requirements</a>
                    </li>
                    <li className="navbar__items-item">
                      <a href="#users">Users</a>
                    </li>
                    <li className="navbar__items-item">
                      <a href="#signUpForm">Sing Up</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__line"></div>
        </section>
      </>
    );
  }
}