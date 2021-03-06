import "../SCSS/Title.scss";

function Title(props) {
  return (
    <div className="title-div padding max-width">
      <h1>{props.title}</h1>
      <h3>{props.subTitle}</h3>
      <div className="image-div">
        <img src={props.image} />
      </div>
    </div>
  );
}

export default Title;
