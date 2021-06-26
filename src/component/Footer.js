import React from "react";

function Footer() {
  return (
    <React.StrictMode>
      <div id="contact">
        <div className="contact-content">
          <div className="text-grid">
            <div className="text-grid-main">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 col-sm-12">
                    <div className="main-title text-center wow fadeIn">
                      <h3>Contact With Me</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elitsed eiusmod tempor enim minim veniam.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-grid">
            <div className="contact-form-details wow fadeIn">
              <div className="container">
                <div className="row contact-row">
                  <div className="col-md-8 col-md-offset-2 col-sm-12 col-sm-offset-1 contact-col">
                    <h3>Write Your Message Here</h3>
                    <div className="contact-form">
                      <form
                        id="contactForm"
                        className="contact-form shake"
                        data-toggle="validator"
                      >
                        <div className="form-group">
                          <div className="controls">
                            <input
                              type="text"
                              id="name"
                              className="form-control"
                              placeholder="Enter Name"
                              required
                              data-error="Please enter your name"
                            />
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="controls">
                            <input
                              type="email"
                              className="email form-control"
                              id="email"
                              placeholder="Enter Email"
                              required
                              data-error="Please enter your email"
                            />
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="controls">
                            <input
                              type="text"
                              id="msg_subject"
                              className="form-control"
                              placeholder="Enter Subject"
                              required
                              data-error="Please enter your message subject"
                            />
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="controls">
                            <textarea
                              id="message"
                              rows="7"
                              placeholder="Massage"
                              className="form-control"
                              required
                              data-error="Write your message"
                            ></textarea>
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                        <button
                          type="submit"
                          id="submit"
                          className="btn btn-success"
                        >
                          {" "}
                          Send Message
                        </button>
                        <div
                          id="msgSubmit"
                          className="h3 text-center hidden"
                        ></div>
                        <div className="clearfix"></div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="row contact-info-row text-center wow fadeIn">
                  <div className="col-md-3 col-sm-6 contact-colamn">
                    <div className="contact-col-info" data-wow-delay=".2s">
                      <i
                        className="fa fa-map-marker contact-icon"
                        aria-hidden="true"
                      ></i>
                      <h3>Address</h3>
                      <p>Kolkata, West Bengal, India</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 contact-colamn">
                    <div className="contact-col-info" data-wow-delay=".4s">
                      <i
                        className="fa fa-envelope contact-icon"
                        aria-hidden="true"
                      ></i>
                      <h3>Email</h3>
                      <p>sanajitjana1402@gmail.com</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 contact-colamn">
                    <div className="contact-col-info" data-wow-delay=".6s">
                      <i
                        className="fa fa-mobile contact-icon"
                        aria-hidden="true"
                      ></i>
                      <h3>Phone</h3>
                      <p>+91 8372876775</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 contact-colamn">
                    <div className="contact-col-info" data-wow-delay=".6s">
                      <i
                        className="fa fa-television contact-icon"
                        aria-hidden="true"
                      ></i>
                      <h3>Portfolio</h3>
                      <p>https://sanajitjana.herokuapp.com/</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="copyright-details" style={{ marginTop: "25px" }}>
              <div className="about-social-icon text-center">
                <ul className="about-social">
                  <li className="wow fadeIn" data-wow-delay=".2s">
                    <a
                      href="https://www.facebook.com/sanajitjanafb"
                      target="newtab"
                    >
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="wow fadeIn" data-wow-delay=".4s">
                    <a href="https://twitter.com/SanajitJana9" target="newtab">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="wow fadeIn" data-wow-delay=".6s">
                    <a
                      href="https://in.pinterest.com/sanajitjana1/_saved/"
                      target="newtab"
                    >
                      <i className="fa fa-pinterest-p" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="wow fadeIn" data-wow-delay=".8s">
                    <a
                      href="https://www.linkedin.com/in/sanajit-jana-60880b190/"
                      target="newtab"
                    >
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="wow fadeIn" data-wow-delay="1s">
                    <a
                      href="https://www.behance.net/sanajitjana1"
                      target="newtab"
                    >
                      <i className="fa fa-behance" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="wow fadeIn" data-wow-delay="1.2s">
                    <a
                      href="https://www.instagram.com/sanajitjana01/"
                      target="newtab"
                    >
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="copyright">
                {/* <h3>Made with ❤️ by Sanajit Jana</h3> */}
                <h3>
                  Copyright &copy; 2021 Sanajit Jana. All Rights Reserved.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
}

export default Footer;
