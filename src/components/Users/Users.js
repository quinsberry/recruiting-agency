import React, { Component } from 'react';
import User from './User';
import { users } from '../../Redux/Users/Users';

export default class Users extends Component {
  render() {
    return (
      <section id="users" className="users">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <div className="section-title">
                <h2>Our cheerful users</h2>
              </div>
            </div>
          </div>
          <div className="row section-description">
            <User />
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8 align-items-center">
              <div className="btn-section d-flex justify-content-center">
                <button className="btn-signUp-inverse">Show more</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
