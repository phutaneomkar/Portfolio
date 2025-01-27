import React from 'react';
import './Hero.css';
import profile_img from '../../assets/banner.png';

export const Hero = () => {
  return (
    <div className="container hero" id='banner'>
      <div className="row align-items-center">
        <div className="col-md-6">
          <h1 className="hero-title">
            I am Omkar <br />
            <span className="hero-sub"> Web Developer.</span>
          </h1>
          <p className="lead">
            I design, build, and maintain websites using coding languages, frameworks, and tools to create functional, user-friendly experiences.
          </p>
          <div className="button-box d-flex flex-wrap align-items-center">
            <a href="#" className="btn download-btn">
              Download CV <i className="fa fa-download"></i>
            </a>
            <ul className="ul-reset social-icons">
              <li>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
              </li>
              <li>
                <a href="#"><i className="fab fa-github"></i></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-6 text-center p-4">
          <img src={profile_img} alt="Profile" className='banner' />
        </div>
      </div>
    </div>
  );
};
