import React from 'react';
import html from '../../imgs/html.svg';
import css from '../../imgs/css.svg';
import js from '../../imgs/javascript.svg';

export default function Relationship() {
  return (
    <section id="relationship" className="relationship">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8">
            <div className="section-title">
              <h2>About my relationships with web-development</h2>
            </div>
          </div>
        </div>
        <div className="row section-description">
          <div className="col-lg-4 relationship__item">
            <img src={html} alt="html logo" className="relationship__item-img" />
            <h4>I'm in love with HTML</h4>
            <p className="p2">Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications.</p>
          </div>
          <div className="col-lg-4 relationship__item">
            <img src={css} alt="css logo" className="relationship__item-img" />
            <h4>CSS is my best friend</h4>
            <p className="p2">Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML.</p>
          </div>
          <div className="col-lg-4 relationship__item">
            <img src={js} alt="javascript logo" className="relationship__item-img" />
            <h4>JavaScript is my passion</h4>
            <p className="p2">JavaScript is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
