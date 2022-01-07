//import styling

import "./SCSS/App.scss";
import "./SCSS/Modal.scss";

//import react hooks
import { HashRouter as Router, Route, Switch } from "react-router-dom";

//import components
import Header from "./components/header/Header";
import Title from "./components/Title";
// import Card from "./components/Cards/Card";
// import AllCards from "./components/Cards/AllCards";
import News from "./components/Pages/News";
import Liked from "./components/Pages/Liked";
import Form from "./components/Form";
import Footer from "./components/Footer";
import { useState } from "react";
import AddBlog from "./components/Pages/AddBlog";

function App() {
  console.log(window.location.pathname);

  return (
    <div className="mainComponents">
      <Router basename={window.location.pathname || ""}>
        <Switch>
          <Route path="/" exact>
            <News />
          </Route>
          <Route path="/liked">
            <Liked />
          </Route>
          <Route path="/add-blog">
            <AddBlog />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
