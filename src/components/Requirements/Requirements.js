import React from 'react';
import sectionImage from '../../imgs/man-laptop-v1.svg';

export default function Requirements() {
  return (
    <section id="requirements" className="requirements">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8">
            <div className="section-title">
              <h2>General requirements for the test task</h2>
            </div>
          </div>
        </div>
        <div className="row section-description">
          <div className="col-lg-6">
            <div className="descr">
              <p className="p2">Users want to find answers to their questions quickly and data shows that people really care about how quickly their pages load. The Search team announced speed would be a ranking signal for desktop searches in 2010 and as of this month (July 2018), page speed will be a ranking factor for mobile searches too.</p>
              <p className="p2">f you're a developer working on a site, now is a good time to evaluate your performance using our speed tools. Think about how performance affects the user experience of your pages and consider measuring a variety of real-world user-centric performance metrics.</p>
              <p className="p2">Are you shipping too much JavaScript? Too many images? Images and JavaScript are the most significant contributors to the page weight that affect page load time based on data from HTTP Archive and the Chrome User Experience Report - our public dataset for key UX metrics as experienced by Chrome users under real-world conditions.</p>
            </div>
          </div>
          <div className="col-lg-6">
            <img src={sectionImage} alt="man with mobile" />
          </div>
        </div>
      </div>
    </section>
  )
}
