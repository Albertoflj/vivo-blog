//import styling

import "./SCSS/App.scss";
import "./SCSS/Modal.scss";

//import react hooks
import { HashRouter as Router, Route, Switch } from "react-router-dom";

//import components
// import Header from "./components/header/Header";
// import Title from "./components/Title";
// import Card from "./components/Cards/Card";
// import AllCards from "./components/Cards/AllCards";
import News from "./components/Pages/News";
import Liked from "./components/Pages/Liked";
// import Form from "./components/Form";
// import Footer from "./components/Footer";
// import { useState } from "react";
import AddBlog from "./components/Pages/AddBlog";
import { useEffect } from "react/cjs/react.development";
// import LoadBlogPage from "./components/LoadBlogPage";
import { useState } from "react";
import { scryRenderedComponentsWithType } from "react-dom/cjs/react-dom-test-utils.production.min";
import Blog from "./components/Pages/Blog";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCards, setLoadedCards] = useState([]);
  useEffect(() => {
    loadCards();
  }, []);
  var loadCards = () => {
    setIsLoading(true);
    fetch(
      "https://vivo-blog-bd6d8-default-rtdb.europe-west1.firebasedatabase.app/blogs.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const cards = [];
        for (const key in data) {
          const cardIn = {
            id: key,
            ...data[key],
          };
          cards.push(cardIn);
        }
        setLoadedCards(cards);
        setIsLoading(false);
      });
  };

  // console.log(loadedCards);

  // console.log(window.location.pathname);
  if (isLoading) {
    return (
      <div className="mainComponents">
        <Router>
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
  return (
    <div className="mainComponents">
      <Router>
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

          {loadedCards.map((data) => {
            return (
              <Route path={"/" + data.id} key={data.id}>
                <Blog info={data} />
              </Route>
            );
          })}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
