import Header from "../header/Header";
import Title from "../Title";
import AllCards from "../Cards/AllCards";
import Footer from "../Footer";

function News() {
  return (
    <div className="news-page mh1 page">
      <Header />
      <Title title="Vivo Blogs" subTitle="Get all the news in technology" />
      <AllCards />
      <Footer />
    </div>
  );
}
export default News;
