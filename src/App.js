import React, { Component } from 'react';
import './styles/css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import AboutMe from './components/AboutMe/AboutMe';
import Relationship from './components/Relationship/Relationship';
import Requirements from './components/Requirements/Requirements';
import Users from './components/Users/Users';
import SignUpForm from './components/SignUp/SignUpForm';
import Footer from './components/Footer/Footer';



class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Main />
        <AboutMe />
        <Relationship />
        <Requirements />
        <Users />
        <SignUpForm />
        <Footer />
      </>
    );
  }
}

export default App;
