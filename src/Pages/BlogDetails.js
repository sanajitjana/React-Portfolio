import React from "react";

const BlogDetails = () => {
  return (
    <React.StrictMode>
      <div id="blog">
        <div className="blog-content">
          <div className="blog-grid">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div
                    class="main-title text-center wow fadeIn"
                    style={{ marginTop: "80px" }}
                  >
                    <h3>Blog Details</h3>
                    <div class="underline1"></div>
                    <div class="underline2"></div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elitsed
                      eiusmod tempor enim minim veniam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-details wow fadeIn text-left">
              <div className="container">
                <div className="row">
                  <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                    <div className="blog-main">
                      <img
                        src="assets/img/blog/blog1.jfif"
                        alt=""
                        class="blog-img"
                      />
                      <div className="blog-head">
                        <h3>
                          <strong>What is hooks in React JS?</strong>
                        </h3>
                      </div>
                      <div className="blog-middle">
                        <i class="fa fa-user blog-icon" aria-hidden="true"></i>
                        <h2>Admin</h2>
                        <i
                          class="fa fa-calendar blog-icon"
                          aria-hidden="true"
                        ></i>
                        <h2>22 August 2021</h2>
                      </div>
                      <div className="blog-bottom">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore.Lorem ipsum dolor sit amet, consectetur
                          adipisicing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore.Lorem ipsum dolor sit amet,
                          consectetur adipisicing elit, sed do eiusmod tempor
                          incididunt ut labore et dolore magna aliqua. Ut enim
                          ad minim veniam, quis nostrud exercitation ullamco
                          laboris nisi ut aliquip ex ea commodo consequat.Lorem
                          ipsum dolor sit amet, consectetur adipisicing
                          elit.Lorem ipsum dolor sit amet, consectetur
                          adipisicing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim
                          veniam, quis nostrud exercitation ullamco laboris nisi
                          ut.Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut.
                        </p>
                      </div>
                    </div>
                    <div className="pagination">
                      <ul>
                        <li>
                          <a href="#">Previous Post</a>
                        </li>
                        <li>
                          <a href="#">Next Post</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
};

export default BlogDetails;
