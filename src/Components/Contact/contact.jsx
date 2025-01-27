import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="container hero" id="contact">
      <div className="row">
        {/* Contact Form Section */}
        <div className="col-lg-6 col-md-7 order-2 order-md-1">
          <div
            className="contact-form-box wow fadeInLeft p-5"
            data-wow-delay=".3s"
            style={{ visibility: "visible", animationDelay: "0.3s", animationName: "fadeInLeft" }}
          >
            <div className="section-header">
              <h2 className="section-title">Let’s work together!</h2>
              <p>
                I design and code beautifully simple things and I love what I do. Just simple like that!
              </p>
            </div>

            <div className="tj-contact-form">
              <form id="contact-form" noValidate>
                <div className="row gx-3 gy-3">
                  <div className="col-sm-6">
                    <div className="form_group">
                      <input
                        type="text"
                        name="conName"
                        id="conName"
                        placeholder="First name"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form_group">
                      <input
                        type="text"
                        name="conLName"
                        id="conLName"
                        placeholder="Last name"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form_group">
                      <input
                        type="email"
                        name="conEmail"
                        id="conEmail"
                        placeholder="Email address"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form_group">
                      <input
                        type="tel"
                        name="conPhone"
                        id="conPhone"
                        placeholder="Phone number"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  {/* <div className="col-12">
                    <div className="form_group">
                      <select name="conService" id="conService" className="tj-nice-select">
                        <option value="" disabled defaultValue>
                          Choose Service
                        </option>
                        <option value="branding">Branding Design</option>
                        <option value="web">Web Design</option>
                        <option value="uxui">UI/UX Design</option>
                        <option value="app">App Design</option>
                      </select>
                    </div>
                  </div> */}
                  <div className="col-12">
                    <div className="form_group">
                      <textarea
                        name="conMessage"
                        id="conMessage"
                        placeholder="Message"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form_btn">
                      <button type="submit" className="btn tj-btn-primary send-msg">
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="col-lg-5 offset-lg-1 col-md-5 d-flex flex-wrap align-items-center order-1 order-md-2">
          <div className="contact-info-list">
            <ul className="contact-me flex-column">
              <li
                className="d-flex flex-wrap align-items-center position-relative contactus fadeInRight"
                data-wow-delay=".4s"
                style={{ visibility: "visible", animationDelay: "0.4s", animationName: "fadeInRight" }}
              >
                <div className="contact-icons">
                <i class="fa-solid fa-phone-volume"></i>
                </div>
                <div className="text-box">
                  <p>Phone</p>
                  <a href="tel:9421111149">+91 9421111149</a>
                </div>
              </li>
              <li
                className="d-flex flex-wrap align-items-center position-relative contactus fadeInRight"
                data-wow-delay=".5s"
                style={{ visibility: "visible", animationDelay: "0.5s", animationName: "fadeInRight" }}
              >
                <div className="contact-icons">
                <i class="fa-regular fa-envelope"></i>
                </div>
                <div className="text-box">
                  <p>Email</p>
                  <a href="mailto:omkar8290@gmail.com">omkar8290@gmail.com</a>
                </div>
              </li>
              <li
                className="d-flex flex-wrap align-items-center position-relative wow fadeInRight"
                data-wow-delay=".6s"
                style={{ visibility: "visible", animationDelay: "0.6s", animationName: "fadeInRight" }}
              >
               
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
