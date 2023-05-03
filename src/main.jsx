import React from "react";
import Box from "./components/box";
import Circle from "./components/circle";
import Card from "./components/card";

const Main = () => {
  const circleColorArr = [
    "pink",
    "red",
    "black",
    "gray",
    "green",
    "blue",
    "orange",
  ];

  return (
    <>
      <Box boxColor="red" text="text1"/>
      <Box boxColor="blue" text="text2"/>
      <Box boxColor="green" text="text3"/>
      <Box boxColor="pink" text="text4"/>
      <Circle circleColor="red" />
      <Circle circleColor="orange" />
      <Circle circleColor="yellow" />
      <Circle circleColor="green" />
      <Circle circleColor="blue" />
      <Circle circleColor="gray" />
      <Circle circleColor="purple" />
      <br></br>
      <Card url="GitHub-Mark.png" title="1번" content="안녕하세요"
      buttonColor1="blue" buttonColor2="skyblue"/>
      <Card url="logo192.png" title="2번" content="리액트 어려워"
      buttonColor1="red" buttonColor2="organge"/>
      <Card url="글쓰기.png" title="3번" content="개발 잘하고 싶다"
      buttonColor1="black" buttonColor2="white"/>
      <Card url="산책.jpg" title="4번" content="디자인도 잘하고 싶다"
      buttonColor1="green" buttonColor2="purple"/>
      <Card url="혼코노.png" title="5번" content="과제 끝~"
      buttonColor1="gray" buttonColor2="yellow"/>
      
    </>
  );
};

export default Main;
