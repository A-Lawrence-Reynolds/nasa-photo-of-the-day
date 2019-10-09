import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";

export default function PhotoList() {
  const [photo, setPhoto] = useState({});

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(response => {
        const photo = response.data;
        console.log(response);
        setPhoto(photo);
      })
      .catch(error => {
        console.log("NASA data not found", error);
      });
  }, []);

  return <PhotoCard photo={photo} />;
}
