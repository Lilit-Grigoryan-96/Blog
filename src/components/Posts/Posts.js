import { useState } from "react";
import Post from "./SinglePost";
import Popup from "./Popup";

const SinglePost = ({ search }) => {
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const handleClosePopup = () => {
    setSelectedPost(null);
  };

  return (
    <section className="posts">
      <div className="posts__inner">
        <div className="container posts__container">
          {search.map((el, index) => {
            return <Post item={el} key={index} onPostClick={handlePostClick} />;
          })}
          <Popup post={selectedPost} onClose={handleClosePopup} />
        </div>
      </div>
    </section>
  );
};

export default SinglePost;
