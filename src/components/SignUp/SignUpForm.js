import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);

    this.state = {
      name: '',
      email: '',
      phone: '',
      position: '',
      selectedFile: null,
      error: '',
    }
    console.log('The value is: ', this.state.name, ' email: ', this.state.email, ' phone: ', this.state.phone, ' position: ', this.state.position);
  }

  handleChange(e) {
    e.preventDefault();
    const value = e.target.value
    this.setState({
      ...this.state,
      [e.target.name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('The value is: ', this.state.name, ' email: ', this.state.email, ' phone: ', this.state.phone, ' position: ', this.state.position);
  }

  handleUpload(e) {
    this.setState({
      ...this.state,
      selectedFile: e.target.files[0],
      loaded: 0,
    })
  }

  handleSignUp() {
    const data = new FormData();
    data.append('file', this.state.selectedFile);
  }


  render() {
    return (
      <section id="signUpForm" className="signUpForm">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <div className="section-title">
                <h2>Register to get a work</h2>
              </div>
            </div>
          </div>
          <form className="signUpForm__form" >
            <div className="row">
              <div className="col-lg-4">
                <label htmlFor="name" className="inputLab name">
                  <input type="name" className="input" name="name" placeholder="Your name" onChange={this.handleChange} value={this.state.name} />
                </label>
              </div>
              <div className="col-lg-4">
                <label htmlFor="email" className="inputLab email">
                  <input type="email" className="input" name="email" placeholder="Your email" onChange={this.handleChange} value={this.state.email} />
                </label>
              </div>
              <div className="col-lg-4">
                <label htmlFor="phone" className="inputLab phone">
                  <input type="phone" className="input" name="phone" placeholder="+48 (___) ___ ___" onChange={this.handleChange} value={this.state.value} />
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <label className="slct">
                  <select defaultValue="Select your position" name="position" className="select" onChange={this.handleChange}>
                    <option value="Select your position" className="option" >Select your position</option>
                    <option value="Front-end Developer" className="option">Front-end Developer</option>
                    <option value="Back-end Developer" className="option">Back-end Developer</option>
                    <option value="Designer" className="option">Designer</option>
                  </select>
                </label>
              </div>
              <div className="col-lg-6">
                <label htmlFor="photo" className="upload">
                  <input type="photo" className="input upload-input" placeholder="Upload your photo" />
                  <button className="btn-signUp-inverse upload-btn">Upload</button>
                </label>
              </div>
            </div>

            <div className="row d-flex justify-content-center">
              <div className="col-lg-11 d-flex justify-content-center">
                <button type="submit" className="btn-signUp" onClick={this.handleSignUp}>Sign Up</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

SignUpForm.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.number,
  position: PropTypes.string,
  photo: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string,
};
