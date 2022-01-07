import Header from "../header/Header";
import Title from "../Title";
import Form from "../Form";
import Footer from "../Footer";

function AddBlog() {
  return (
    <div className="add-blog-page mh1 page">
      <Header />
      <Title title="Add Blog" subTitle="Create a new blog" />
      <Form />
      <Footer />
    </div>
  );
}
export default AddBlog;
