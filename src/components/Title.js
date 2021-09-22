import "../SCSS/Title.scss";

function Title(props) {
  return (
    <div className="title-div padding">
      <h1>{props.title}</h1>
      <h3>{props.subTitle}</h3>
    </div>
  );
}

export default Title;
