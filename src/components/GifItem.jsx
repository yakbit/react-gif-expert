import React from "react";

export const GifItem = ({ title, url, id }) => {
  return (
    <div className="grid-gallery__item">
      <img className="grid-gallery__image" src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};
