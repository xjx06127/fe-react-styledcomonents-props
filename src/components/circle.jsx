import React from "react";
import styled from "styled-components";

const CircleEach = styled.span`
  width: 100px;
  height: 100px;
  margin: 10px;
  border-radius: 100%;
  background-color: ${(props) => props.circleColor};
  display: inline-block;
`;

const Circle = (props) => {
    return (
        <>
            <CircleEach circleColor={props.circleColor}>
            </CircleEach>
        </>
    )
}

export default Circle;