import React from "react";

const UiUx = () => {
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
                      ReactJS/Php-Laravel and Web Components everything else
                      accomplished on my spare software development time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-details wow fadeIn text-left">
              <div className="container">
                <div
                  className="row"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div className="col-xl-9 col-lg-9 col-md-12 col-xs-12 col-sm-12">
                    <div className="blog-main">
                      <img
                        src="assets/img/blog-details/ui-ux.jpg"
                        alt="The importance of UI/UX"
                        class="blog-img"
                      />
                      <div className="blog-head">
                        <h3>
                          <strong>
                            The importance of UI/UX | Software Engineering
                          </strong>
                        </h3>
                      </div>
                      <div className="blog-middle">
                        <i class="fa fa-user blog-icon" aria-hidden="true"></i>
                        <h2>Admin</h2>
                        <i
                          class="fa fa-calendar blog-icon"
                          aria-hidden="true"
                        ></i>
                        <h2>28 August 2021</h2>
                      </div>
                      <div className="blog-bottom">
                        <p>
                          The user interface is the front-end application view
                          to which the user interacts in order to use the
                          software. The software becomes more popular if its
                          user interface is:
                        </p>
                        <ul>
                          <li>Attractive</li>
                          <li>Simple to use</li>
                          <li>Responsive in short time</li>
                          <li>Clear to understand</li>
                          <li>Consistent on all interface screens</li>
                        </ul>
                        <br />
                        <p>There are two types of User Interface:</p>
                        <h4>Command Line Interface:</h4>
                        <p>
                          Command Line Interface provides a command prompt,
                          where the user types the command and feeds it to the
                          system. The user needs to remember the syntax of the
                          command and its use.
                        </p>
                        <p>
                          Graphical User Interface: Graphical User Interface
                          provides a simple interactive interface to interact
                          with the system. GUI can be a combination of both
                          hardware and software. Using GUI, the user interprets
                          the software. User Interface Design Process:
                        </p>
                        <img
                          src="assets/img/blog-details/ui-ux-process.jpg"
                          alt="Hooks are the most valuable things in react"
                          class="blog-img"
                        />
                        <br />
                        <br />
                        <h4>User Interface Design Process:</h4>
                        <p>
                          The analysis and design process of a user interface is
                          iterative and can be represented by a spiral model.
                          The analysis and design process of the user interface
                          consists of four framework activities.
                        </p>
                        <p>
                          <strong>1.</strong> User, task, environmental
                          analysis, and modelling: Initially, the focus is based
                          on the profile of users who will interact with the
                          system, i.e. understanding, skill and knowledge, type
                          of user, etc, based on the user’s profile users are
                          made into categories. From each category, requirements
                          are gathered. Based on the requirements developer
                          understand how to develop the interface. Once all the
                          requirements are gathered a detailed analysis is
                          conducted. In the analysis part, the tasks that the
                          user performs to establish the goals of the system are
                          identified, described and elaborated. The analysis of
                          the user environment focuses on the physical work
                          environment. Among the questions to be asked are:
                        </p>
                        <ul>
                          <li>
                            Where will the interface be located physically?
                          </li>
                          <li>
                            Will the user be sitting, standing, or performing
                            other tasks unrelated to the interface?
                          </li>
                          <li>
                            Does the interface hardware accommodate space,
                            light, or noise constraints?
                          </li>
                          <li>
                            Are there special human factors considerations
                            driven by environmental factors?
                          </li>
                        </ul>
                        <br />
                        <p>
                          <strong>2.</strong> Interface Design: The goal of this
                          phase is to define the set of interface objects and
                          actions i.e. Control mechanisms that enable the user
                          to perform desired tasks. Indicate how these control
                          mechanisms affect the system. Specify the action
                          sequence of tasks and subtasks, also called a user
                          scenario. Indicate the state of the system when the
                          user performs a particular task. Always follow the
                          three golden rules stated by Theo Mandel. Design
                          issues such as response time, command and action
                          structure, error handling, and help facilities are
                          considered as the design model is refined. This phase
                          serves as the foundation for the implementation phase.
                        </p>
                        <p>
                          <strong>3.</strong> Interface construction and
                          implementation: The implementation activity begins
                          with the creation of a prototype (model) that enables
                          usage scenarios to be evaluated. As the iterative
                          design process continues a User Interface toolkit that
                          allows the creation of windows, menus, device
                          interaction, error messages, commands, and many other
                          elements of an interactive environment can be used for
                          completing the construction of an interface.
                        </p>
                        <p>
                          <strong>4.</strong> Interface Validation: This phase
                          focuses on testing the interface. The interface should
                          be in such a way that it should be able to perform
                          tasks correctly and it should be able to handle a
                          variety of tasks. It should achieve all the user’s
                          requirements. It should be easy to use and easy to
                          learn. Users should accept the interface as a useful
                          one in their work.
                        </p>
                        <h5>Golden Rules:</h5>
                        <p>
                          The following are the golden rules stated by Theo
                          Mandel that must be followed during the design of the
                          interface.
                        </p>
                        <p>Place the user in control:</p>
                        <ul>
                          <li>
                            Define the interaction modes in such a way that does
                            not force the user into unnecessary or undesired
                            actions: The user should be able to easily enter and
                            exit the mode with little or no effort.
                          </li>
                          <li>
                            Provide for flexible interaction: Different people
                            will use different interaction mechanisms, some
                            might use keyboard commands, some might use a mouse,
                            some might use the touch screen, etc, Hence all
                            interaction mechanisms should be provided.
                          </li>
                          <li>
                            Allow user interaction to be interruptable and
                            undoable: When a user is doing a sequence of actions
                            the user must be able to interrupt the sequence to
                            do some other work without losing the work that had
                            been done. The user should also be able to do undo
                            operations.
                          </li>
                          <li>
                            Streamline interaction as skill level advances and
                            allow the interaction to be customized: Advanced or
                            highly skilled users should be provided with a
                            chance to customize the interface as the user wants
                            which allows different interaction mechanisms so
                            that the user doesn’t feel bored while using the
                            same interaction mechanism.
                          </li>
                          <li>
                            Hide technical internals from casual users: The user
                            should not be aware of the internal technical
                            details of the system. He should interact with the
                            interface just to do his work.
                          </li>
                          <li>
                            Design for direct interaction with objects that
                            appear on the screen: The user should be able to use
                            the objects and manipulate the objects that are
                            present on the screen to perform a necessary task.
                            By this, the user feels easy to control over the
                            screen.
                          </li>
                        </ul>
                        <br />

                        {/* Go to www.addthis.com/dashboard to customize your tools */}
                        <div class="addthis_inline_share_toolbox"></div>
                      </div>
                    </div>
                    <div className="pagination">
                      <ul>
                        <li>
                          <a href="/react-hooks">Previous Post</a>
                        </li>
                        <li>
                          <a href="/form-example">Next Post</a>
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

export default UiUx;
