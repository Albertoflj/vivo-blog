import "../SCSS/Form.scss";
import { useRef } from "react";
import { useHistory } from "react-router";

function Form() {
  const titleRef = useRef();
  const shortTitleRef = useRef();
  const imageRef = useRef();
  const authorRef = useRef();
  const shortDescriptionRef = useRef();
  const descriptionRef = useRef();

  const history = useHistory();

  function uploadData(event) {
    event.preventDefault();

    const titleInput = titleRef.current.value;
    const shortTitleInput = shortTitleRef.current.value;
    const imageInput = imageRef.current.value;
    const authorInput = authorRef.current.value;
    const shortDescriptionInput = shortDescriptionRef.current.value;
    const descriptionInput = descriptionRef.current.value;

    const blogData = {
      title: titleInput,
      shortTitle: shortTitleInput,
      image: imageInput,
      author: authorInput,
      shortDescription: shortDescriptionInput,
      description: descriptionInput,
      liked: "0",
    };

    fetch(
      "https://vivo-blog-bd6d8-default-rtdb.europe-west1.firebasedatabase.app/blogs.json",
      {
        method: "POST",
        body: JSON.stringify(blogData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });

    console.log(titleInput);
  }

  return (
    <div className="form-container">
      {/* maxlength="10" pt later*/}
      <form onSubmit={uploadData} className="form-widths">
        <label htmlFor="title">Title</label>
        <input
          ref={titleRef}
          className="form-input"
          required
          type="text"
          id="title"
        />
        <label htmlFor="shortTitle">Short Title</label>
        <input
          ref={shortTitleRef}
          className="form-input"
          required
          type="text"
          id="shortTitle"
        />
        <label htmlFor="image">Image</label>
        <input
          ref={imageRef}
          className="form-input"
          required
          type="text"
          id="image"
        />
        <label htmlFor="author">Author</label>
        <input
          ref={authorRef}
          className="form-input"
          required
          type="text"
          id="author"
        />
        <label htmlFor="shortDescription">Short Description</label>
        <input
          ref={shortDescriptionRef}
          className="form-input"
          required
          type="text"
          id="shortDescription"
        />
        <label htmlFor="description">Description</label>
        <textarea ref={descriptionRef} rows="5" required id="description" />

        <button className="form-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
