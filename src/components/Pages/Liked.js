import Footer from "../Footer";
import Header from "../header/Header";
import Title from "../Title";
import LikedCards from "../Cards/LikedCards";

function Liked() {
  return (
    <div className="liked-blogs-page mh1 page">
      <Header />
      <Title title="Liked Blogs" subTitle="Here are your Liked Blogs" />
      <LikedCards />
      <Footer />
    </div>
  );
}

export default Liked;
