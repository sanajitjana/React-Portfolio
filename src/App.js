import React from "react";
import "./App.css";

// import Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Component
import Header from "./component/Header";
import Footer from "./component/Footer";

// import Pages
import Home from "./Pages/Home";
import ReactHooks from "./Pages/ReactHooks";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/react-hooks" component={ReactHooks} />
        </Switch>
        <Footer />
      </Router>
    </React.StrictMode>
  );
}

export default App;
