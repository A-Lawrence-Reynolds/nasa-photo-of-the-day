import React from "react";

const PhotoCard = props => {
  return (
    <div>
      <div key={props.photo.url}>
        <h1>NASA photo of the day</h1>
        <img className="photo-img" alt="space photo" src={props.photo.hdurl} />
        <p>{props.photo.explanation}</p>
        <p>{props.photo.title}</p>
        <p>{props.photo.date}</p>
      </div>
    </div>
  );
};

export default PhotoCard;
