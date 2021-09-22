import { useEffect, useState } from "react";
import "../../SCSS/AllCards.scss";

import Card from "./Card";

function AllCards() {
  // const [fetchedData, setFetchedData] = useState();

  // useEffect(() => {
  //   fetch(
  //     "https://vivo-blog-bd6d8-default-rtdb.europe-west1.firebasedatabase.app/blogs.json"
  //   )
  //     .then((response) => response.json())
  //     .then((data) => setFetchedData(data));

  //   console.log(fetchedData);
  // }, []);
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
  if (loadedCards > 2) {
  }

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <div className="all-cards max-width padding">
      {loadedCards.map((n) => {
        return <Card info={n} key={n.id} load={loadCards} />;
      })}
    </div>
  );
}

export default AllCards;
