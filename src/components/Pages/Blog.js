import Title from "../Title";
import Header from "../header/Header";
import Footer from "../Footer";
import BlogContent from "../BlogContent";

function Blog(data) {
  return (
    <div className="blog-page mh1 page">
      <Header />
      <Title
        title={data.info.title}
        subTitle=""
        background={"yes"}
        image={data.info.image}
      />
      <BlogContent story={data.info.description} author={data.info.author} />
      <Footer />
    </div>
  );
}

export default Blog;
