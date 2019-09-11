import React from "react";

const PhotoCard = props => {
  return (
    <div className="photo" key={props.photo.url}>
      <h1 className="header-text">NASA photo of the day</h1>
      <img className="photo-img" alt="space photo" src={props.photo.hdurl} />
      <h2 className="">{props.photo.explanation}</h2>
      <h3>{props.photo.title}</h3>
      <h4>{props.photo.date}</h4>
    </div>
  );
};

export default PhotoCard;
