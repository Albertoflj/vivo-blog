import { useEffect, useState } from "react";
import "../../SCSS/AllCards.scss";

import Card from "./Card";

function LikedCards() {
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
          if (cardIn.liked === 1) {
            cards.push(cardIn);
          }
        }
        setLoadedCards(cards);
        setIsLoading(false);
      });
  };
  //   if (loadedCards.map()) {
  //     return (
  //       <div>
  //         <h1>You haven't liked any blogs.</h1>
  //       </div>
  //     );
  //   }

  if (isLoading) {
    return (
      <section className="loadingSection">
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
    // <section className="loadingSection">
    //   <p>Loading...</p>
    // </section>
  );
}

export default LikedCards;
