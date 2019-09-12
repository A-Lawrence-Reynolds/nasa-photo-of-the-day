import React from "react";
import styled from "styled-components";
const Photo = styled.div`
  font-family: "Righteous", cursive;
  color: #f2c861;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SpaceImage = styled.img`
  // height: %;
  width: 95%;
  object-fit: scale;
  flex-shrink: 2;
`;

const HeaderText = styled.h1`
  font-size: 15rem;
  text-shadow: grey 1px 1px 2pc;
`;

const Desc = styled.h2`
  width: 90%;
  backgound: grey;
  border-radius: 5px;
`;

const Title = styled.h3``;
const Date = styled.h3``;

const PhotoCard = props => {
  return (
    <Photo key={props.photo.url}>
      <HeaderText>NASA photo of the day</HeaderText>
      <SpaceImage
        className="photo-img"
        alt="space photo"
        src={props.photo.hdurl}
      />
      <Desc>{props.photo.explanation}</Desc>
      <Title>{props.photo.title}</Title>
      <Date>{props.photo.date}</Date>
    </Photo>
  );
};

export default PhotoCard;
