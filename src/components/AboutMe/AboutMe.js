import React from 'react';
import sectionImage from '../../imgs/man-mobile.svg';

export default function AboutMe() {
  return (
    <section id="aboutMe" className="aboutMe">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8">
            <div className="section-title">
              <h2>Let's get acquainted</h2>
            </div>
          </div>
        </div>
        <div className="row section-description">
          <div className="col-lg-4">
            <img src={sectionImage} alt="man with mobile" />
          </div>
          <div className="col-lg-8">
            <h4>I am cool frontend developer</h4>
            <div className="descr">
              <p className="p2">When real users have a slow experience on mobile, they're much less likely to find what they are looking for or purchase from you in the future. For many sites this equates to a huge missed opportunity, especially when more than half of visits are abandoned if a mobile page takes over 3 seconds to load.</p>
              <p className="p2">Last week, Google Search and Ads teams announced two new speed initiatives to help improve user-experience on the web. </p>
            </div>
            <a href="#signUpForm" className="signUp-text">Sign Up</a>
          </div>
        </div>
      </div>
    </section>
  )
}
