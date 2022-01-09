import "../../SCSS/Card.scss";

import AllCards from "./AllCards";

//icons
import trashCan from "../../icons/trash-can.svg";
import emptyHeart from "../../icons/heart-outline.svg";
import fullHeart from "../../icons/heart-fill.svg";

import Modal from "./Modal";
import Backdrop from "./Backdrop";
//react Hooks
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import { useEffect, useState } from "react";
import { useHistory } from "react-router";
// import Title from "../Title";

function Card(props) {
  const history = useHistory();

  function readMore() {
    history.push("/" + props.info.id);
  }

  function addLikedBlog(args) {
    fetch(
      "https://vivo-blog-bd6d8-default-rtdb.europe-west1.firebasedatabase.app/blogs/" +
        props.info.id +
        ".json",
      {
        method: "PATCH",
        body: JSON.stringify({
          liked: args,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  const [modalIsOpen, setModalIsOpen] = useState(false);
  function deleteHandler() {
    setModalIsOpen(true);
  }
  function closeModalHandler() {
    setModalIsOpen(false);
  }

  const [heart, setHeart] = useState(emptyHeart);
  const [heartVar, setHeartVar] = useState(0);

  useEffect(() => {
    setHeartVar(props.info.liked);
    if (props.info.liked === 1) {
      setHeart(fullHeart);
    } else if (props.info.liked === 0) {
      setHeart(emptyHeart);
    }
  }, []);
  function changeHeart() {
    if (heartVar == 0) {
      setHeart(fullHeart);
      setHeartVar(1);
      addLikedBlog(1);
    } else {
      setHeart(emptyHeart);
      setHeartVar(0);
      addLikedBlog(0);
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
  function editInfo(args) {
    args = 1;
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
        <button className="card-button" onClick={readMore}>
          Read More
        </button>
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
