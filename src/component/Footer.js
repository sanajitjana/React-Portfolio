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
                        action="https://herokuapp.us6.list-manage.com/subscribe/post?u=870e1b447d1f93893227a9c52&amp;id=85d6c939a5"
                        method="post"
                        id="mc-embedded-subscribe-form contactForm"
                        name="mc-embedded-subscribe-form"
                        className="contact-form shake validate"
                        target="_blank"
                        data-toggle="validator"
                        novalidate
                      >
                        <div className="form-group">
                          <div className="controls">
                            <input
                              type="text"
                              name="FLNAME"
                              id="mce-FLNAME"
                              className="required form-control"
                              placeholder="Your Name"
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
                              className="email required form-control"
                              name="EMAIL"
                              id="mce-EMAIL"
                              placeholder="Your Email"
                              required
                              data-error="Please enter your email"
                            />
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="controls">
                            <input
                              type="phone"
                              name="PHONE"
                              className="phone form-control"
                              id="phone mce-PHONE"
                              placeholder="Your Phone"
                              required
                              data-error="Please enter your phone"
                            />
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="controls">
                            <textarea
                              id="message mce-MESSAGE"
                              rows="7"
                              placeholder="Your Massage"
                              name="MESSAGE"
                              className="required form-control"
                              required
                              data-error="Please enter your message"
                            ></textarea>
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                        <div id="mce-responses" class="clear">
                          <div
                            class="response"
                            id="mce-error-response"
                            style={{ display: "none" }}
                          ></div>
                          <div
                            class="response"
                            id="mce-success-response"
                            style={{ display: "none" }}
                          ></div>
                        </div>
                        {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                        <div
                          style={{ position: "absolute", left: "-5000px" }}
                          aria-hidden="true"
                        >
                          <input
                            type="text"
                            name="b_870e1b447d1f93893227a9c52_85d6c939a5"
                            tabindex="-1"
                            value=""
                          />
                        </div>
                        <button
                          type="submit"
                          value="Subscribe"
                          name="subscribe"
                          id="submit mc-embedded-subscribe"
                          className="btn btn-success"
                        >
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
                      <a
                        href="mailto:sanajitjana1402@gmail.com"
                        style={{
                          color: "black",
                          textDecoration: "none",
                          fontSize: "17px",
                        }}
                      >
                        sanajitjana1402@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 contact-colamn">
                    <div className="contact-col-info" data-wow-delay=".6s">
                      <i
                        className="fa fa-mobile contact-icon"
                        aria-hidden="true"
                      ></i>
                      <h3>Phone</h3>
                      <a
                        href="tel:8372876775"
                        style={{
                          color: "black",
                          textDecoration: "none",
                          fontSize: "17px",
                        }}
                      >
                        +91 8372876775
                      </a>
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
                  <li className="wow fadeIn" data-wow-delay="1.2s">
                    <a
                      href="https://www.instagram.com/sanajitjana01/"
                      target="newtab"
                    >
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="wow fadeIn" data-wow-delay=".8s">
                    <a
                      href="https://www.linkedin.com/in/sanajitjana"
                      target="newtab"
                    >
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="wow fadeIn" data-wow-delay=".4s">
                    <a href="https://twitter.com/sanajitjana01" target="newtab">
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
                  <li className="wow fadeIn" data-wow-delay="1s">
                    <a
                      href="https://www.behance.net/sanajitjana1"
                      target="newtab"
                    >
                      <i className="fa fa-behance" aria-hidden="true"></i>
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
