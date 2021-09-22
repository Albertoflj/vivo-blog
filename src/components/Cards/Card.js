import "../../SCSS/Card.scss";

import AllCards from "./AllCards";

//icons
import trashCan from "../../icons/trash-can.svg";
import emptyHeart from "../../icons/heart-outline.svg";
import fullHeart from "../../icons/heart-fill.svg";

import Modal from "./Modal";
import Backdrop from "./Backdrop";
//react Hooks
import { useState } from "react";

function Card(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function deleteHandler() {
    setModalIsOpen(true);
  }
  function closeModalHandler() {
    setModalIsOpen(false);
  }

  const [heart, setHeart] = useState(emptyHeart);
  const [heartVar, setHeartVar] = useState(0);

  function changeHeart() {
    if (heartVar === 0) {
      setHeart(fullHeart);
      setHeartVar(1);
    } else {
      setHeart(emptyHeart);
      setHeartVar(0);
    }
  }

  function deleteCard(id) {
    fetch(
      "https://vivo-blog-bd6d8-default-rtdb.europe-west1.firebasedatabase.app/blogs/" +
        id +
        ".json",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => console.log(response))
      .then((data) => {
        console.log(data);
        props.load();
      });
  }
  return (
    <div className="card">
      <div className="card-image card-padding">
        <img src={props.info.image} alt="Test"></img>
      </div>
      <h1 className="card-title card-padding">{props.info.shortTitle}</h1>
      <p className="card-description card-padding">
        {props.info.shortDescription}
      </p>
      <div className="card-buttons">
        <button
          className="card-button-trash"
          onClick={deleteHandler}
          // onClick={() => {
          //   deleteCard(props.info.id);
          // }}
        >
          <img src={trashCan} alt="trash can"></img>
        </button>
        <button className="card-button">Read More</button>
        <button className="card-button-heart" onClick={changeHeart}>
          <img src={heart} alt="heart"></img>
        </button>
      </div>
      {modalIsOpen && (
        <Modal
          onCancel={closeModalHandler}
          onConfirm={() => {
            deleteCard(props.info.id);
          }}
        />
      )}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}

export default Card;
