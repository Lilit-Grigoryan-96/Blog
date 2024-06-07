import { React } from "react";

const Post = ({ item, onPostClick }) => {
  return (
    <>
      <div className="post__item" onClick={() => onPostClick(item)}>
        <img
          src={item.img}
          srcSet={item.img_2x + " 2x"}
          alt={item.title}
          className="post__img"
        />
        <span className="tags">{item.tags}</span>
        <h3>{item.title}</h3>

        <div className="post__info">
          <span className="autor">{item.autor}</span>{" "}
          <span className="date">{item.date}</span>
          {item.views} Views
        </div>

        <p className="post__text">{item.text}</p>
      </div>
    </>
  );
};
export default Post;
