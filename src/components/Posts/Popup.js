import React from "react";

const Popup = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <div className="popup black__bg">
      <div className="popup__content">
        <h3>{post.title}</h3>
        <p>{post.text}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;
