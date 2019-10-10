import React from "react";
import styled from "styled-components";

const PhotoDiv = styled.div`
  font-family: "Jura", sans-serif;
  display: flex;
  flex-direction: column;
`;
const HeaderDiv = styled.div`
  height: 100vh;
  width: 100vw;
  background-position: center;
  background-size: ;
  background-repeat: no-repeat;
  background-color: black;
  background-image: url(${props => props.url});
`;
const Text = styled.h1`
  justify-content: flex-end;
  display: flex;
  padding-right: 40px;
  padding-bottom: 5px;
  border-bottom: white solid 2px;
  width: 40%;
  color: red;
`;
const Title = styled.p`
  justify-content: flex-start;
  color: red;
  border-top: solid white 2px;
  padding: 12px;
  width: 41%;
  font-size: xx-large;
  display: flex;
`;
const Explanation = styled.p`
  width: 40%;
  color: red;
  padding-left: 7px;
`;

const PhotoCard = props => {
  return (
    <div>
      <PhotoDiv key={props.photo.url}>
        <HeaderDiv url={props.photo.hdurl}>
          <Text>NASA photo of the day</Text>
          <Explanation>
            <b>{props.photo.explanation}</b>
          </Explanation>
          <Title>
            <b>{props.photo.title}</b>
          </Title>
        </HeaderDiv>
      </PhotoDiv>
    </div>
  );
};

export default PhotoCard;
