import "../SCSS/BlogContent.scss";

function BlogContent(content) {
  return (
    <div className="blog-content padding max-width">
      <h4 className="blog-author">Story by: {content.author}</h4>
      <p className="content-text">{content.story}</p>
    </div>
  );
}

export default BlogContent;
