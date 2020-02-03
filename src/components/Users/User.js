import React, { Component } from 'react';
import { users } from '../../Redux/Users/Users';

export default class User extends Component {
  // const { id, name, position, email, phoneNumber, img, registrationDate } = this.users;

  render() {
    return (
      users.map(user =>
        <div key={user.id} className="col-lg-4 users__item">
          <div className="row">
            <div className="col-3">
              <img src={user.img} alt={user.name} className="users__item-photo" />
            </div>
            <div className="col-9">
              <h4>{user.name}</h4>
              <div className="users__item-descr">
                <p className="p3">{user.position}</p>
                <p className="p3">{user.email}</p>
                <p className="p3">{user.phoneNumber}</p>
              </div>
            </div>
          </div>
        </div>
      )
    )
  }
}
