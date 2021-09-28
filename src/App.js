import React from "react";
import "./App.css";

// import Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Component
import Header from "./component/Header";
import Footer from "./component/Footer";
import ScrollToTop from "./component/ScrollToTop";

// import Pages
import Home from "./Pages/Home";
import ReactHooks from "./Pages/ReactHooks";
import UiUx from "./Pages/UiUx";
import FormExample from "./Pages/FormExample";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Header />
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/react-hooks" component={ReactHooks} />
            <Route exact path="/ui-ux" component={UiUx} />
            <Route exact path="/form-example" component={FormExample} />
          </Switch>
        </ScrollToTop>
        <Footer />
      </Router>
    </React.StrictMode>
  );
}

export default App;
