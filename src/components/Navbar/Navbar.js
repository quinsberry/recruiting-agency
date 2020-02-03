import React, { Component } from 'react';
import logo from '../../logo.svg';
import SignIn from './SignIn';


export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav>
          <div className="container">
            <div className="row">
              <div className="navbar d-flex justify-content-space-between">
                <div className="col-lg-2">
                  <a href="#main">
                    <img src={logo} alt="abz" className="logo" />
                  </a>
                </div>
                <div className="col-lg-7">
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
                <div className="col-lg-3">
                  <SignIn />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
