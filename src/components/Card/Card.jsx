import React, { useState, useEffect } from "react";
import Cards from "react-tinder-card";
import "./Card.css";
import database from "./firebase";

function Card() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const unsubscribe = database
      .collection("people")
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
      );

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <div className="card__cardContainer">
        {people.map((person) => (
          <Cards
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </Cards>
        ))}
      </div>
    </div>
  );
}

export default Card;